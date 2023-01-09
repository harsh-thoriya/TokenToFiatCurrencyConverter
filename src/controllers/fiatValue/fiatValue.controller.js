const etherspot = require("../../helpers/etherspot");
const coingecko = require("../../helpers/coingecko");

const get = async (req, res) => {
  try {
    const currencyList = req.query.currencyList;
    const tokenList = await etherspot.getTokenList();

    let tokenAddresses = tokenList.map((record) => {
      return record.address;
    });

    let tokenPrice =
      tokenAddresses &&
      tokenAddresses.length &&
      (await coingecko.getTokenPrice(tokenAddresses, currencyList));

    res.status(200).send(tokenPrice);
  } catch (error) {
    res.status(400).send("Error Occurred. Please Try Again Later");
  }
};

module.exports = { get };
