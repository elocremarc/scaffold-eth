/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { IpNftFactory, IpNftFactoryInterface } from "../IpNftFactory";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "IpNftContractAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "licensor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "IpBrandName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "IpBrandSymbol",
        type: "string",
      },
    ],
    name: "NewIpNft",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "IpNftContracts",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getChildren",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "IpBrandName",
        type: "string",
      },
      {
        internalType: "string",
        name: "IpBrandSymbol",
        type: "string",
      },
      {
        internalType: "string",
        name: "IpURI",
        type: "string",
      },
    ],
    name: "newIpNft",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061002161001c610026565b61002a565b61007a565b3390565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b612858806100896000396000f3fe60806040523480156200001157600080fd5b50600436106200006a5760003560e01c80631174b413146200006f5780633132e4dd146200009e5780634892e8e814620000c4578063715018a614620000ce5780638da5cb5b14620000da578063f2fde38b14620000f3575b600080fd5b6200008662000080366004620004fa565b6200010a565b604051620000959190620006b6565b60405180910390f35b620000b5620000af3660046200052a565b6200011f565b60405162000095919062000667565b620000b5620002c2565b620000d862000326565b005b620000e462000383565b60405162000095919062000606565b620000d862000104366004620004fa565b62000392565b60016020526000908152604090205460ff1681565b60606000848484604051620001349062000463565b6200014293929190620006c1565b604051809103906000f0801580156200015f573d6000803e3d6000fd5b506001600160a01b0381166000818152600160208190526040808320805460ff1916831790556002805492830181559092527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace0180546001600160a01b031916831790555163320a5a9160e21b81529192509063c8296a4490620001e890339060040162000606565b600060405180830381600087803b1580156200020357600080fd5b505af115801562000218573d6000803e3d6000fd5b505050507f14d0e7cb597fa7d1d6123e77f3ddc2b777451dca71511ca224ef48ee2a8409cd813387876040516200025394939291906200061a565b60405180910390a16002805480602002602001604051908101604052809291908181526020018280548015620002b357602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831162000294575b50505050509150509392505050565b606060028054806020026020016040519081016040528092919081815260200182805480156200031c57602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311620002fd575b5050505050905090565b620003306200040f565b6001600160a01b03166200034362000383565b6001600160a01b031614620003755760405162461bcd60e51b81526004016200036c9062000750565b60405180910390fd5b62000381600062000413565b565b6000546001600160a01b031690565b6200039c6200040f565b6001600160a01b0316620003af62000383565b6001600160a01b031614620003d85760405162461bcd60e51b81526004016200036c9062000750565b6001600160a01b038116620004015760405162461bcd60e51b81526004016200036c906200070a565b6200040c8162000413565b50565b3390565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b612087806200079c83390190565b600082601f83011262000482578081fd5b813567ffffffffffffffff80821115620004a057620004a062000785565b604051601f8301601f191681016020018281118282101715620004c757620004c762000785565b604052828152848301602001861015620004df578384fd5b82602086016020830137918201602001929092529392505050565b6000602082840312156200050c578081fd5b81356001600160a01b038116811462000523578182fd5b9392505050565b6000806000606084860312156200053f578182fd5b833567ffffffffffffffff8082111562000557578384fd5b620005658783880162000471565b945060208601359150808211156200057b578384fd5b620005898783880162000471565b935060408601359150808211156200059f578283fd5b50620005ae8682870162000471565b9150509250925092565b60008151808452815b81811015620005df57602081850181015186830182015201620005c1565b81811115620005f15782602083870101525b50601f01601f19169290920160200192915050565b6001600160a01b0391909116815260200190565b6001600160a01b038581168252841660208201526080604082018190526000906200064890830185620005b8565b82810360608401526200065c8185620005b8565b979650505050505050565b6020808252825182820181905260009190848201906040850190845b81811015620006aa5783516001600160a01b03168352928401929184019160010162000683565b50909695505050505050565b901515815260200190565b600060608252620006d66060830186620005b8565b8281036020840152620006ea8186620005b8565b90508281036040840152620007008185620005b8565b9695505050505050565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b634e487b7160e01b600052604160045260246000fdfe60806040526200000e6200010f565b600880546001600160a01b0319166001600160a01b0392909216919091179055662386f26fc100006009553480156200004657600080fd5b5060405162002087380380620020878339810160408190526200006991620002e6565b8251839083906200008290600090602085019062000195565b5080516200009890600190602084019062000195565b505050620000b5620000af6200011e60201b60201c565b62000122565b620000bf62000174565b50600a8054600181018255600091909152815162000105917fc65a7bb8d6351c1cf70c95a316cc6a92839c986682d98bc35f958f4883f9d2a80190602084019062000195565b50505050620003c6565b6007546001600160a01b031690565b3390565b600780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b604080518082019091526007815266697066733a2f2f60c81b602082015290565b828054620001a39062000373565b90600052602060002090601f016020900481019282620001c7576000855562000212565b82601f10620001e257805160ff191683800117855562000212565b8280016001018555821562000212579182015b8281111562000212578251825591602001919060010190620001f5565b506200022092915062000224565b5090565b5b8082111562000220576000815560010162000225565b600082601f8301126200024c578081fd5b81516001600160401b0380821115620002695762000269620003b0565b6040516020601f8401601f1916820181018381118382101715620002915762000291620003b0565b6040528382528584018101871015620002a8578485fd5b8492505b83831015620002cb5785830181015182840182015291820191620002ac565b83831115620002dc57848185840101525b5095945050505050565b600080600060608486031215620002fb578283fd5b83516001600160401b038082111562000312578485fd5b62000320878388016200023b565b9450602086015191508082111562000336578384fd5b62000344878388016200023b565b935060408601519150808211156200035a578283fd5b5062000369868287016200023b565b9150509250925092565b6002810460018216806200038857607f821691505b60208210811415620003aa57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b611cb180620003d66000396000f3fe60806040526004361061011f5760003560e01c80638da5cb5b116100a0578063c8296a4411610064578063c8296a44146102df578063c87b56dd146102ff578063e985e9c51461031f578063f2fde38b1461033f578063fa1022be1461035f5761011f565b80638da5cb5b1461025557806395d89b411461026a578063a22cb4651461027f578063a8bb251c1461029f578063b88d4fde146102bf5761011f565b806323b872dd116100e757806323b872dd146101e057806342842e0e146101e05780636352211e1461020057806370a0823114610220578063715018a6146102405761011f565b806301ffc9a71461012457806306fdde031461015a57806307f507771461017c578063081812fc14610191578063095ea7b3146101be575b600080fd5b34801561013057600080fd5b5061014461013f36600461145a565b61037f565b604051610151919061159c565b60405180910390f35b34801561016657600080fd5b5061016f6103c7565b60405161015191906115a7565b610184610459565b6040516101519190611b41565b34801561019d57600080fd5b506101b16101ac3660046114d8565b61056a565b604051610151919061154b565b3480156101ca57600080fd5b506101de6101d9366004611431565b6105ad565b005b3480156101ec57600080fd5b506101de6101fb366004611343565b610645565b34801561020c57600080fd5b506101b161021b3660046114d8565b61065d565b34801561022c57600080fd5b5061018461023b3660046112f7565b610692565b34801561024c57600080fd5b506101de6106d6565b34801561026157600080fd5b506101b1610721565b34801561027657600080fd5b5061016f610730565b34801561028b57600080fd5b506101de61029a3660046113f7565b61073f565b3480156102ab57600080fd5b506101de6102ba366004611492565b61080d565b3480156102cb57600080fd5b506101de6102da36600461137e565b610854565b3480156102eb57600080fd5b506101de6102fa3660046112f7565b610893565b34801561030b57600080fd5b5061016f61031a3660046114d8565b6108de565b34801561032b57600080fd5b5061014461033a366004611311565b6108e9565b34801561034b57600080fd5b506101de61035a3660046112f7565b610917565b34801561036b57600080fd5b5061018461037a3660046114d8565b610985565b60006001600160e01b031982166380ac58cd60e01b14806103b057506001600160e01b03198216635b5e139f60e01b145b806103bf57506103bf826109cf565b90505b919050565b6060600080546103d690611bb9565b80601f016020809104026020016040519081016040528092919081815260200182805461040290611bb9565b801561044f5780601f106104245761010080835404028352916020019161044f565b820191906000526020600020905b81548152906001019060200180831161043257829003601f168201915b5050505050905090565b600060095434146104855760405162461bcd60e51b815260040161047c90611a6e565b60405180910390fd5b61048f600b6109e8565b600061049b600b6109f1565b90506104a733826109f5565b61056581600a6000815481106104cd57634e487b7160e01b600052603260045260246000fd5b9060005260206000200180546104e290611bb9565b80601f016020809104026020016040519081016040528092919081815260200182805461050e90611bb9565b801561055b5780601f106105305761010080835404028352916020019161055b565b820191906000526020600020905b81548152906001019060200180831161053e57829003601f168201915b5050505050610ad4565b905090565b600061057582610b18565b6105915760405162461bcd60e51b815260040161047c90611955565b506000908152600460205260409020546001600160a01b031690565b60006105b88261065d565b9050806001600160a01b0316836001600160a01b031614156105ec5760405162461bcd60e51b815260040161047c90611aaf565b806001600160a01b03166105fe610b35565b6001600160a01b0316148061061a575061061a8161033a610b35565b6106365760405162461bcd60e51b815260040161047c90611791565b6106408383610b39565b505050565b60405162461bcd60e51b815260040161047c90611689565b6000818152600260205260408120546001600160a01b0316806103bf5760405162461bcd60e51b815260040161047c90611838565b60006001600160a01b0382166106ba5760405162461bcd60e51b815260040161047c906117ee565b506001600160a01b031660009081526003602052604090205490565b6106de610b35565b6001600160a01b03166106ef610721565b6001600160a01b0316146107155760405162461bcd60e51b815260040161047c906119a1565b61071f6000610ba7565b565b6007546001600160a01b031690565b6060600180546103d690611bb9565b610747610b35565b6001600160a01b0316826001600160a01b031614156107785760405162461bcd60e51b815260040161047c9061170e565b8060056000610785610b35565b6001600160a01b03908116825260208083019390935260409182016000908120918716808252919093529120805460ff1916921515929092179091556107c9610b35565b6001600160a01b03167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610801919061159c565b60405180910390a35050565b600a80546001810182556000919091528151610850917fc65a7bb8d6351c1cf70c95a316cc6a92839c986682d98bc35f958f4883f9d2a8019060208401906111d7565b5050565b61086561085f610b35565b83610bf9565b6108815760405162461bcd60e51b815260040161047c90611af0565b61088d84848484610c7e565b50505050565b61089b610b35565b6001600160a01b03166108ac610721565b6001600160a01b0316146108d25760405162461bcd60e51b815260040161047c906119a1565b6108db81610917565b50565b60606103bf82610cb1565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b61091f610b35565b6001600160a01b0316610930610721565b6001600160a01b0316146109565760405162461bcd60e51b815260040161047c906119a1565b6001600160a01b03811661097c5760405162461bcd60e51b815260040161047c9061160c565b6108db81610ba7565b600061098f610b35565b6001600160a01b03166109a0610721565b6001600160a01b0316146109c65760405162461bcd60e51b815260040161047c906119a1565b50600981905590565b6001600160e01b031981166301ffc9a760e01b14919050565b80546001019055565b5490565b6001600160a01b038216610a1b5760405162461bcd60e51b815260040161047c906118cf565b610a2481610b18565b15610a415760405162461bcd60e51b815260040161047c90611652565b610a4d60008383610640565b6001600160a01b0382166000908152600360205260408120805460019290610a76908490611b4a565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b610add82610b18565b610af95760405162461bcd60e51b815260040161047c90611881565b60008281526006602090815260409091208251610640928401906111d7565b6000908152600260205260409020546001600160a01b0316151590565b3390565b600081815260046020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610b6e8261065d565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6000610c0482610b18565b610c205760405162461bcd60e51b815260040161047c90611745565b6000610c2b8361065d565b9050806001600160a01b0316846001600160a01b03161480610c665750836001600160a01b0316610c5b8461056a565b6001600160a01b0316145b80610c765750610c7681856108e9565b949350505050565b610c89848484610dca565b610c9584848484610ef7565b61088d5760405162461bcd60e51b815260040161047c906115ba565b6060610cbc82610b18565b610cd85760405162461bcd60e51b815260040161047c90611904565b60008281526006602052604081208054610cf190611bb9565b80601f0160208091040260200160405190810160405280929190818152602001828054610d1d90611bb9565b8015610d6a5780601f10610d3f57610100808354040283529160200191610d6a565b820191906000526020600020905b815481529060010190602001808311610d4d57829003601f168201915b505050505090506000610d7b611012565b9050805160001415610d8f575090506103c2565b815115610dc1578082604051602001610da992919061151c565b604051602081830303815290604052925050506103c2565b610c7684611033565b826001600160a01b0316610ddd8261065d565b6001600160a01b031614610e035760405162461bcd60e51b815260040161047c906119d6565b6001600160a01b038216610e295760405162461bcd60e51b815260040161047c906116ca565b610e34838383610640565b610e3f600082610b39565b6001600160a01b0383166000908152600360205260408120805460019290610e68908490611b76565b90915550506001600160a01b0382166000908152600360205260408120805460019290610e96908490611b4a565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6000610f0b846001600160a01b03166110b6565b1561100757836001600160a01b031663150b7a02610f27610b35565b8786866040518563ffffffff1660e01b8152600401610f49949392919061155f565b602060405180830381600087803b158015610f6357600080fd5b505af1925050508015610f93575060408051601f3d908101601f19168201909252610f9091810190611476565b60015b610fed573d808015610fc1576040519150601f19603f3d011682016040523d82523d6000602084013e610fc6565b606091505b508051610fe55760405162461bcd60e51b815260040161047c906115ba565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610c76565b506001949350505050565b604080518082019091526007815266697066733a2f2f60c81b602082015290565b606061103e82610b18565b61105a5760405162461bcd60e51b815260040161047c90611a1f565b6000611064611012565b9050600081511161108457604051806020016040528060008152506110af565b8061108e846110bc565b60405160200161109f92919061151c565b6040516020818303038152906040525b9392505050565b3b151590565b6060816110e157506040805180820190915260018152600360fc1b60208201526103c2565b8160005b811561110b57806110f581611bf4565b91506111049050600a83611b62565b91506110e5565b60008167ffffffffffffffff81111561113457634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f19166020018201604052801561115e576020820181803683370190505b5090505b8415610c7657611173600183611b76565b9150611180600a86611c0f565b61118b906030611b4a565b60f81b8183815181106111ae57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a9053506111d0600a86611b62565b9450611162565b8280546111e390611bb9565b90600052602060002090601f016020900481019282611205576000855561124b565b82601f1061121e57805160ff191683800117855561124b565b8280016001018555821561124b579182015b8281111561124b578251825591602001919060010190611230565b5061125792915061125b565b5090565b5b80821115611257576000815560010161125c565b600067ffffffffffffffff8084111561128b5761128b611c4f565b604051601f8501601f1916810160200182811182821017156112af576112af611c4f565b6040528481529150818385018610156112c757600080fd5b8484602083013760006020868301015250509392505050565b80356001600160a01b03811681146103c257600080fd5b600060208284031215611308578081fd5b6110af826112e0565b60008060408385031215611323578081fd5b61132c836112e0565b915061133a602084016112e0565b90509250929050565b600080600060608486031215611357578081fd5b611360846112e0565b925061136e602085016112e0565b9150604084013590509250925092565b60008060008060808587031215611393578081fd5b61139c856112e0565b93506113aa602086016112e0565b925060408501359150606085013567ffffffffffffffff8111156113cc578182fd5b8501601f810187136113dc578182fd5b6113eb87823560208401611270565b91505092959194509250565b60008060408385031215611409578182fd5b611412836112e0565b915060208301358015158114611426578182fd5b809150509250929050565b60008060408385031215611443578182fd5b61144c836112e0565b946020939093013593505050565b60006020828403121561146b578081fd5b81356110af81611c65565b600060208284031215611487578081fd5b81516110af81611c65565b6000602082840312156114a3578081fd5b813567ffffffffffffffff8111156114b9578182fd5b8201601f810184136114c9578182fd5b610c7684823560208401611270565b6000602082840312156114e9578081fd5b5035919050565b60008151808452611508816020860160208601611b8d565b601f01601f19169290920160200192915050565b6000835161152e818460208801611b8d565b835190830190611542818360208801611b8d565b01949350505050565b6001600160a01b0391909116815260200190565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090611592908301846114f0565b9695505050505050565b901515815260200190565b6000602082526110af60208301846114f0565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b6020808252601c908201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604082015260600190565b60208082526021908201527f5472616e736665722044697361626c656420427579206e6577204c6963656e736040820152606560f81b606082015260800190565b60208082526024908201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646040820152637265737360e01b606082015260800190565b60208082526019908201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604082015260600190565b6020808252602c908201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860408201526b34b9ba32b73a103a37b5b2b760a11b606082015260800190565b60208082526038908201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760408201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000606082015260800190565b6020808252602a908201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604082015269726f206164647265737360b01b606082015260800190565b60208082526029908201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460408201526832b73a103a37b5b2b760b91b606082015260800190565b6020808252602e908201527f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60408201526d32bc34b9ba32b73a103a37b5b2b760911b606082015260800190565b6020808252818101527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604082015260600190565b60208082526031908201527f45524337323155524953746f726167653a2055524920717565727920666f72206040820152703737b732bc34b9ba32b73a103a37b5b2b760791b606082015260800190565b6020808252602c908201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860408201526b34b9ba32b73a103a37b5b2b760a11b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526029908201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960408201526839903737ba1037bbb760b91b606082015260800190565b6020808252602f908201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60408201526e3732bc34b9ba32b73a103a37b5b2b760891b606082015260800190565b60208082526021908201527f56616c756520646966666572656e74207468616e206c6963656e736520436f736040820152601d60fa1b606082015260800190565b60208082526021908201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656040820152603960f91b606082015260800190565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b90815260200190565b60008219821115611b5d57611b5d611c23565b500190565b600082611b7157611b71611c39565b500490565b600082821015611b8857611b88611c23565b500390565b60005b83811015611ba8578181015183820152602001611b90565b8381111561088d5750506000910152565b600281046001821680611bcd57607f821691505b60208210811415611bee57634e487b7160e01b600052602260045260246000fd5b50919050565b6000600019821415611c0857611c08611c23565b5060010190565b600082611c1e57611c1e611c39565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160e01b0319811681146108db57600080fdfea264697066735822122029a7c9855acd9a5aa74bec8eba805414f0e65c852f3a4a2bd75558979293e09264736f6c63430008000033a26469706673582212203f8d43c4c54a6216f8f230486ca096f9ea563a568456046f749d96f0d5fe8cc364736f6c63430008000033";

export class IpNftFactory__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<IpNftFactory> {
    return super.deploy(overrides || {}) as Promise<IpNftFactory>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): IpNftFactory {
    return super.attach(address) as IpNftFactory;
  }
  connect(signer: Signer): IpNftFactory__factory {
    return super.connect(signer) as IpNftFactory__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): IpNftFactoryInterface {
    return new utils.Interface(_abi) as IpNftFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IpNftFactory {
    return new Contract(address, _abi, signerOrProvider) as IpNftFactory;
  }
}
