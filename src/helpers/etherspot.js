// import { Sdk, NetworkNames, randomPrivateKey } from 'etherspot';
const EtherSpot = require("etherspot");

const getTokenList = () => {
  try {
    const privateKey = EtherSpot.randomPrivateKey();

    const etherSpotSDK = new EtherSpot.Sdk(
      {
        privateKey,
      },
      {
        networkName: "mainnet",
      }
    );

    const output = etherSpotSDK.getTokenListTokens({
      name: "EtherspotStableCoins",
    });

    return output;
  } catch (error) {
    return error;
  }
};

module.exports = { getTokenList };
