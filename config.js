module.exports = {
    contractDExAddrs: [
        {addr: '0x9B5bCcA9CfD9F693D217f3A3CE9486eA71800b10', info: 'Deployed Current'},
    ],
    ethTestnet: true,
    port: '9000',
    ethRPC: 'https://localhost:8546',
    dbPath: 'mongodb://localhost:27017/dex',
    etherscanUrl: 'http://etherscan.io',
    etherscanAPI: 'http://etherscan.io',
    etherscanAPIKey: '',
    tokens: [
        {addr: '0x0000000000000000000000000000000000000000', name: 'ETH', decimals: 18},
        {addr: '0x0Df600C873dA796c3ef6D6a0472772Eb954D6986', name: 'SCO', decimals: 18},
        {addr: '', name: 'ACEX', decimals: 18}
    ],
    defaultPair: {token: 'SCO', base: 'ETH'},
    pairs: [
        {token: 'SCO', base: 'ETH'},
        {token: 'ACEX', base: 'ETH'}
    ],
    dExContractABI: [
        {
        "constant": false,
        "inputs": [
            {
                "name": "tokenGet",
                "type": "address"
            },
            {
                "name": "amountGet",
                "type": "uint256"
            },
            {
                "name": "tokenGive",
                "type": "address"
            },
            {
                "name": "amountGive",
                "type": "uint256"
            },
            {
                "name": "expires",
                "type": "uint256"
            },
            {
                "name": "nonce",
                "type": "uint256"
            },
            {
                "name": "user",
                "type": "address"
            },
            {
                "name": "v",
                "type": "uint8"
            },
            {
                "name": "r",
                "type": "bytes32"
            },
            {
                "name": "s",
                "type": "bytes32"
            },
            {
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "trade",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "tokenGet",
                    "type": "address"
                },
                {
                    "name": "amountGet",
                    "type": "uint256"
                },
                {
                    "name": "tokenGive",
                    "type": "address"
                },
                {
                    "name": "amountGive",
                    "type": "uint256"
                },
                {
                    "name": "expires",
                    "type": "uint256"
                },
                {
                    "name": "nonce",
                    "type": "uint256"
                }
            ],
            "name": "order",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "address"
                },
                {
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "name": "orderFills",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "tokenGet",
                    "type": "address"
                },
                {
                    "name": "amountGet",
                    "type": "uint256"
                },
                {
                    "name": "tokenGive",
                    "type": "address"
                },
                {
                    "name": "amountGive",
                    "type": "uint256"
                },
                {
                    "name": "expires",
                    "type": "uint256"
                },
                {
                    "name": "nonce",
                    "type": "uint256"
                },
                {
                    "name": "v",
                    "type": "uint8"
                },
                {
                    "name": "r",
                    "type": "bytes32"
                },
                {
                    "name": "s",
                    "type": "bytes32"
                }
            ],
            "name": "cancelOrder",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "withdraw",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "token",
                    "type": "address"
                },
                {
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "depositToken",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "tokenGet",
                    "type": "address"
                },
                {
                    "name": "amountGet",
                    "type": "uint256"
                },
                {
                    "name": "tokenGive",
                    "type": "address"
                },
                {
                    "name": "amountGive",
                    "type": "uint256"
                },
                {
                    "name": "expires",
                    "type": "uint256"
                },
                {
                    "name": "nonce",
                    "type": "uint256"
                },
                {
                    "name": "user",
                    "type": "address"
                },
                {
                    "name": "v",
                    "type": "uint8"
                },
                {
                    "name": "r",
                    "type": "bytes32"
                },
                {
                    "name": "s",
                    "type": "bytes32"
                }
            ],
            "name": "amountFilled",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "address"
                },
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "tokens",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "feeMake_",
                    "type": "uint256"
                }
            ],
            "name": "changeFeeMake",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "feeMake",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "feeRebate_",
                    "type": "uint256"
                }
            ],
            "name": "changeFeeRebate",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "feeAccount",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "tokenGet",
                    "type": "address"
                },
                {
                    "name": "amountGet",
                    "type": "uint256"
                },
                {
                    "name": "tokenGive",
                    "type": "address"
                },
                {
                    "name": "amountGive",
                    "type": "uint256"
                },
                {
                    "name": "expires",
                    "type": "uint256"
                },
                {
                    "name": "nonce",
                    "type": "uint256"
                },
                {
                    "name": "user",
                    "type": "address"
                },
                {
                    "name": "v",
                    "type": "uint8"
                },
                {
                    "name": "r",
                    "type": "bytes32"
                },
                {
                    "name": "s",
                    "type": "bytes32"
                },
                {
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "name": "sender",
                    "type": "address"
                }
            ],
            "name": "testTrade",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "feeAccount_",
                    "type": "address"
                }
            ],
            "name": "changeFeeAccount",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "feeRebate",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "feeTake_",
                    "type": "uint256"
                }
            ],
            "name": "changeFeeTake",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "admin_",
                    "type": "address"
                }
            ],
            "name": "changeAdmin",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "token",
                    "type": "address"
                },
                {
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "withdrawToken",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "address"
                },
                {
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "name": "orders",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "feeTake",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "deposit",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "accountLevelsAddr_",
                    "type": "address"
                }
            ],
            "name": "changeAccountLevelsAddr",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "accountLevelsAddr",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "token",
                    "type": "address"
                },
                {
                    "name": "user",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "admin",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "tokenGet",
                    "type": "address"
                },
                {
                    "name": "amountGet",
                    "type": "uint256"
                },
                {
                    "name": "tokenGive",
                    "type": "address"
                },
                {
                    "name": "amountGive",
                    "type": "uint256"
                },
                {
                    "name": "expires",
                    "type": "uint256"
                },
                {
                    "name": "nonce",
                    "type": "uint256"
                },
                {
                    "name": "user",
                    "type": "address"
                },
                {
                    "name": "v",
                    "type": "uint8"
                },
                {
                    "name": "r",
                    "type": "bytes32"
                },
                {
                    "name": "s",
                    "type": "bytes32"
                }
            ],
            "name": "availableVolume",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "name": "admin_",
                    "type": "address"
                },
                {
                    "name": "feeAccount_",
                    "type": "address"
                },
                {
                    "name": "accountLevelsAddr_",
                    "type": "address"
                },
                {
                    "name": "feeMake_",
                    "type": "uint256"
                },
                {
                    "name": "feeTake_",
                    "type": "uint256"
                },
                {
                    "name": "feeRebate_",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "fallback"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "tokenGet",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "amountGet",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "tokenGive",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "amountGive",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "expires",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "nonce",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "user",
                    "type": "address"
                }
            ],
            "name": "Order",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "tokenGet",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "amountGet",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "tokenGive",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "amountGive",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "expires",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "nonce",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "v",
                    "type": "uint8"
                },
                {
                    "indexed": false,
                    "name": "r",
                    "type": "bytes32"
                },
                {
                    "indexed": false,
                    "name": "s",
                    "type": "bytes32"
                }
            ],
            "name": "Cancel",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "tokenGet",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "amountGet",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "tokenGive",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "amountGive",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "get",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "give",
                    "type": "address"
                }
            ],
            "name": "Trade",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "token",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "balance",
                    "type": "uint256"
                }
            ],
            "name": "Deposit",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "token",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "balance",
                    "type": "uint256"
                }
            ],
            "name": "Withdraw",
            "type": "event"
        }
    ]
};