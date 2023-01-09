const CoinGecko = require("coingecko-api");

const getTokenPrice = (tokenAddresses, currencyList) => {
  try {
    const coinGeckoClient = new CoinGecko();

    let tokenDetails = coinGeckoClient.simple.fetchTokenPrice({
      contract_addresses: tokenAddresses,
      vs_currencies: currencyList,
    });
    return tokenDetails;
  } catch (error) {
    return error;
  }
};

module.exports = { getTokenPrice };
