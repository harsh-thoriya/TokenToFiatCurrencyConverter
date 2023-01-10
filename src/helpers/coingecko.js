const CoinGecko = require("coingecko-api");

const getTokenPrice = async (tokenAddresses, currencyList) => {
  try {
    const coinGeckoClient = new CoinGecko();

    let tokenDetails = await coinGeckoClient.simple.fetchTokenPrice({
      contract_addresses: tokenAddresses,
      vs_currencies: currencyList,
    });

    return tokenDetails;
  } catch (error) {
    console.log("Errr", error);
    return new Error(error);
  }
};

module.exports = { getTokenPrice };
