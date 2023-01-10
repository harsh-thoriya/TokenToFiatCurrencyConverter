const etherspot = require("../../helpers/etherspot");
const coingecko = require("../../helpers/coingecko");

const get = async (req, res) => {
  try {
    const currencyList = req.query.currencyList;
    const tokenList = await etherspot.getTokenList();

    let tokenAddresses = tokenList.map((record) => {
      return record.address;
    });

    const cachedData = await req.redisClient.get(
      req.path + req.query.currencyList.toString()
    );
    if (cachedData) {
      return res.status(200).send(JSON.parse(cachedData));
    }

    let tokenPrice =
      tokenAddresses &&
      tokenAddresses.length &&
      (await coingecko.getTokenPrice(tokenAddresses, currencyList));

    tokenPrice.data &&
      tokenPrice.data.length &&
      (await req.redisClient.set(
        req.path + req.query.currencyList.toString(),
        JSON.stringify(tokenPrice.data),
        {
          EX: 60 * 60 * 24,
          NX: true,
        }
      ));

    return res.status(200).send(tokenPrice);
  } catch (error) {
    return res.status(400).send("Error Occurred. Please Try Again Later");
  }
};

module.exports = { get };
