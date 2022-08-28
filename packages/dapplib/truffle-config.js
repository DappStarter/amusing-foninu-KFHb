require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh spot toy note often universe harvest inhale equal gate'; 
let testAccounts = [
"0x72da75c467b8e9ed5a4d0b91f9157b3c2196169d401d94abf8994a331567f1aa",
"0x00719b47331255821bedc466f1ec70bc322c2e3ec36fc69a4eb6d54d23c1658a",
"0x6857a5247d41cb58dcb44fb74fb6014a998b87d95018604636aa0ffe6bccb648",
"0x61e2a045bc72be3b0008523f1bad9e387fbeb046b5e435e1e9826ccef3158553",
"0x1fb7509137ef73a30a9c56b172e1cbcabda896f9ee50865825c03bb54009da29",
"0x24131e4f0222043add675ee54b8be10076bc60f6bdd7de1b1be8b8a66f064a43",
"0xf51c4a16f0150fb964fa2fb6e743ad734f18ba52ce57c7625995202a91268d2b",
"0x6748d5041a8d2603b8268e1f3a3b98ab78c7b7e2bd571491e35effa79ad42964",
"0xf297b15f334ea336efb97da246c56a1001cbf84b20a6c316f7a3b4d2df0800bb",
"0xaf6d92948f590fe5dfb0dab0ba662ae6bb50d3409bd0daab630538591a0ffa9f"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

