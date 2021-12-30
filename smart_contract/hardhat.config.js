require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/AgcuCxqtm79ct0hhyYZ47WuE1M-cBrzQ",
      accounts: [
        "10aacd3d2d9df842fc0044b0cf2486b1ca563cfe46109d136845b3db57f3886f",
      ],
    },
  },
};
