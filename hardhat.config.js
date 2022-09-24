// // require('nomiclabs/hardhat-waffle');
// require("@nomicfoundation/hardhat-toolbox");

// const projectIDNumber="7888fffa40fd4406b0ba413e60d639c5";
// const fs = require('fs');
// const keyData = fs.readFileSync('./g-key.txt', {
//   encoding:'utf8', flag: 'r'
// });

// module.exports = {
//   defaultNetwork: 'hardhat',
//     networks:{
//       chainId: 1337 //config standard
//     },
//     mumbai:{
      
//       url:`https://polygon-mainnet.infura.io/v3/${projectIDNumber}`,
//       accouts:[keyData],
//     },
//     mainnet:{
//       url:`https://mainnet.infura.io/v3/${projectIDNumber}`,
//     accounts:[keyData]
//   },

//   solidity: {
//     version: "0.8.9",
//     settings: {
//       optimizer: {
//         enabled: true,
//         runs: 200
//       }
//     }
//   }
// };
require("@nomiclabs/hardhat-waffle");
const projectId = '7888fffa40fd4406b0ba413e60d639c5'
const fs = require('fs')
const keyData = fs.readFileSync('./g-key.txt', {
  encoding:'utf8', flag:'r'
})

module.exports = {
  defaultNetwork: 'hardhat',
  networks:{
    hardhat:{
      chainId: 1337 // config standard 
    },
    mumbai:{
      url:`https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts:[keyData]
    },
    mainnet: {
      url:`https://mainnet.infura.io/v3/${projectId}`,
      accounts:[keyData]
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
