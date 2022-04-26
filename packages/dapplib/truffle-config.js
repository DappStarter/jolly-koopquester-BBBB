require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture stove response saddle athlete install clog tackle skate'; 
let testAccounts = [
"0x047f3f7f4f6c0f7e5a329e6c00a05b17225ef997f950a3fbbad7d87bd7618b7e",
"0x167fe4e5bcdaad59d5905e79905b5f1438b1dd2f9abff8f44513aa3b1c1c7580",
"0xbad24f0d73f845fe3ae1296e9e06da13fbdb62930dfd5ecc466a7ab394d2281f",
"0x4c11a77b30c68b66170c2e1e4999c0d10267edc0504be08022f483521be51e0b",
"0xd8023e2742b9a3ae00fa87e58043213beae93ffc269ec4b6d18c9c7e9917a48a",
"0xd5336362438a93b1e938d401f450ad5f9395075a2539fb5f95c21b83209e08e5",
"0x7d42f434f20e3dd2f91c76d7c80f8b7e358bf2fd22fef320cb913d8b4c29ecb3",
"0x3af170b52a1434735b8587ea4be0a8f3ae922d2f9ec9935d1dcf84c6a95f5c73",
"0x096984b4dfe4af1f905e7f9b2cbbdd44ffe4178b35aef6c76cc61631388985ea",
"0xb8a254948842ebe1deff40c53dd0c1f7a16b634354173aec283290e2bd55cffb"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

