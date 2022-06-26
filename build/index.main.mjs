// Automatically generated with Reach 0.1.11 (f1ffa756)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (f1ffa756)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  
  return {
    infos: {
      },
    views: {
      3: []
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Announcer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Announcer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Announcer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_Tuple([ctc1]);
  
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:20:17:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:20:17:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v71, time: v70, didSend: v22, from: v69 } = txn1;
      
      ;
      
      const v73 = v70;
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v71, time: v70, didSend: v22, from: v69 } = txn1;
  ;
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:21:31:application',
    fs: ['at ./index.rsh:21:31:application call to [unknown function] (defined at: ./index.rsh:21:31:function exp)', 'at ./index.rsh:21:31:application call to "liftedInteract" (defined at: ./index.rsh:21:31:application)'],
    msg: 'ready',
    who: 'Announcer'
    });
  
  let v73 = v70;
  
  while (await (async () => {
    
    return true;})()) {
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc2],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v84], secs: v86, time: v85, didSend: v41, from: v83 } = txn2;
    undefined /* setApiDetails */;
    ;
    const v88 = null;
    await txn2.getOutput('Publisher_publish', 'v88', ctc0, v88);
    const cv73 = v85;
    
    v73 = cv73;
    
    continue;
    
    }
  return;
  
  
  };
export async function Listener(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Listener expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Listener expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Contract;
  const ctc1 = stdlib.T_Tuple([ctc0]);
  const ctc2 = stdlib.T_Null;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 0,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v71, time: v70, didSend: v22, from: v69 } = txn1;
  ;
  let v73 = v70;
  
  while (await (async () => {
    
    return true;})()) {
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc1],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v84], secs: v86, time: v85, didSend: v41, from: v83 } = txn2;
    undefined /* setApiDetails */;
    ;
    const v87 = v84[stdlib.checkedBigNumberify('./index.rsh:29:16:array', stdlib.UInt_max, '0')];
    const v88 = null;
    await txn2.getOutput('Publisher_publish', 'v88', ctc2, v88);
    stdlib.protect(ctc2, await interact.hear(v87), {
      at: './index.rsh:32:31:application',
      fs: ['at ./index.rsh:32:31:application call to [unknown function] (defined at: ./index.rsh:32:31:function exp)', 'at ./index.rsh:32:31:application call to "liftedInteract" (defined at: ./index.rsh:32:31:application)'],
      msg: 'hear',
      who: 'Listener'
      });
    
    const cv73 = v85;
    
    v73 = cv73;
    
    continue;
    
    }
  return;
  
  
  };
export async function _Publisher_publish3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Publisher_publish3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Publisher_publish3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Contract;
  const ctc1 = stdlib.T_Tuple([ctc0]);
  const ctc2 = stdlib.T_Null;
  
  
  const [] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), []);
  const v81 = stdlib.protect(ctc1, await interact.in(), {
    at: './index.rsh:29:9:application',
    fs: ['at ./index.rsh:29:9:application call to [unknown function] (defined at: ./index.rsh:29:9:function exp)'],
    msg: 'in',
    who: 'Publisher_publish'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v81],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:29:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v84], secs: v86, time: v85, didSend: v41, from: v83 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Publisher_publish"
        });
      ;
      const v88 = null;
      const v89 = await txn1.getOutput('Publisher_publish', 'v88', ctc2, v88);
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v84], secs: v86, time: v85, didSend: v41, from: v83 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v88 = null;
  const v89 = await txn1.getOutput('Publisher_publish', 'v88', ctc2, v88);
  stdlib.protect(ctc2, await interact.out(v84, v89), {
    at: './index.rsh:29:9:application',
    fs: ['at ./index.rsh:29:9:application call to [unknown function] (defined at: ./index.rsh:29:9:function exp)', 'at ./index.rsh:30:15:application call to "notify" (defined at: ./index.rsh:29:9:function exp)'],
    msg: 'out',
    who: 'Publisher_publish'
    });
  
  return;
  
  
  
  };
export async function Publisher_publish(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Publisher_publish expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Publisher_publish expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _Publisher_publish3(ctcTop, interact);}
  };
const _ALGO = {
  ABI: {
    impure: [`Publisher_publish(uint64)byte[0]`],
    pure: [],
    sigs: [`Publisher_publish(uint64)byte[0]`]
    },
  appApproval: `BiAEAAECAyYBACI1ADEYQQDyKGRJIls1AYEIWzUCNhoAF0lBABQiNQQjNQaB95/qiQESRDYaAUIAFjYaAhc1BDYaAzYaARdJJAxAADUkEkQlNAESRDQESSISTDQCEhFESTUFNf+ABByGT+U0/1CwgAgAAAAAAAAAWLAoNQcyBkIAJiISRIGgjQaIAJUiNAESRDQESSISTDQCEhFEgARfDav6sDIGQgAANf8lNQEyBjUCQgAcMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKDQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCMxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 0,
  stateSize: 0,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "elem0",
                    "type": "address"
                  }
                ],
                "internalType": "struct T4",
                "name": "v84",
                "type": "tuple"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v88",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_a0",
        "type": "address"
      }
    ],
    "name": "Publisher_publish",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "elem0",
                    "type": "address"
                  }
                ],
                "internalType": "struct T4",
                "name": "v84",
                "type": "tuple"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051610944380380610944833981016040819052610022916101c9565b600080554360035560408051338152825160208083019190915283015115158183015290517faf3102e4a96b239a2811210526ca19adcde1af3e2876a2c9a5886a5a887a2dcb9181900360600190a161007d3415600761009d565b610085610101565b6020810151439052610096816100c6565b505061026c565b816100c25760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b600360009081554360015560408051602080820184905282518083038201815291830190925280516100fc926002920190610130565b505050565b604051806040016040528060001515815260200161012b6040518060200160405280600081525090565b905290565b82805461013c90610231565b90600052602060002090601f01602090048101928261015e57600085556101a4565b82601f1061017757805160ff19168380011785556101a4565b828001600101855582156101a4579182015b828111156101a4578251825591602001919060010190610189565b506101b09291506101b4565b5090565b5b808211156101b057600081556001016101b5565b6000604082840312156101db57600080fd5b604080519081016001600160401b038111828210171561020b57634e487b7160e01b600052604160045260246000fd5b604052825181526020830151801515811461022557600080fd5b60208201529392505050565b600181811c9082168061024557607f821691505b6020821081141561026657634e487b7160e01b600052602260045260246000fd5b50919050565b6106c98061027b6000396000f3fe60806040526004361061004b5760003560e01c80631e93b0f11461005457806369afda4714610078578063832307571461008b578063ab53f2c6146100a0578063d5225957146100c357005b3661005257005b005b34801561006057600080fd5b506003545b6040519081526020015b60405180910390f35b6100526100863660046104c4565b6100e6565b34801561009757600080fd5b50600154610065565b3480156100ac57600080fd5b506100b5610111565b60405161006f9291906104dc565b6100d66100d1366004610555565b6101ae565b604051901515815260200161006f565b60408051602081019091526000815261010d610107368490038401846105ae565b826101ea565b5050565b6000606060005460028080546101269061063c565b80601f01602080910402602001604051908101604052809291908181526020018280546101529061063c565b801561019f5780601f106101745761010080835404028352916020019161019f565b820191906000526020600020905b81548152906001019060200180831161018257829003601f168201915b50505050509050915091509091565b60006101b86103cf565b602080820151516001600160a01b0385169052604080519182019052600081526101e282826101ea565b519392505050565b6101fa600360005414600961036f565b815161021590158061020e57508251600154145b600a61036f565b6000808055600280546102279061063c565b80601f01602080910402602001604051908101604052809291908181526020018280546102539061063c565b80156102a05780601f10610275576101008083540402835291602001916102a0565b820191906000526020600020905b81548152906001019060200180831161028357829003601f168201915b50505050508060200190518101906102b89190610671565b60408051338152855160208083019190915286015151516001600160a01b03168183015290519192507f397fbf74ee760faaaf416e26711cae0f761d205a28047865f4cb3b3fdc062bbc919081900360600190a16103183415600861036f565b604051600081527f9a8c34779222688b64d9751639b61ae3421d82ddb17a9169ddf9195a5261aa869060200160405180910390a160008252610358610401565b602081015143905261036981610394565b50505050565b8161010d5760405163100960cb60e01b81526004810182905260240160405180910390fd5b600360009081554360015560408051602080820184905282518083038201815291830190925280516103ca92600292019061042b565b505050565b6040518060400160405280600081526020016103fc60408051808201909152600060208201908152815290565b905290565b60405180604001604052806000151581526020016103fc6040518060200160405280600081525090565b8280546104379061063c565b90600052602060002090601f016020900481019282610459576000855561049f565b82601f1061047257805160ff191683800117855561049f565b8280016001018555821561049f579182015b8281111561049f578251825591602001919060010190610484565b506104ab9291506104af565b5090565b5b808211156104ab57600081556001016104b0565b6000604082840312156104d657600080fd5b50919050565b82815260006020604081840152835180604085015260005b81811015610510578581018301518582016060015282016104f4565b81811115610522576000606083870101525b50601f01601f191692909201606001949350505050565b80356001600160a01b038116811461055057600080fd5b919050565b60006020828403121561056757600080fd5b61057082610539565b9392505050565b6040516020810167ffffffffffffffff811182821017156105a857634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360408112156105c157600080fd5b6040516040810181811067ffffffffffffffff821117156105f257634e487b7160e01b600052604160045260246000fd5b604052833581526020601f198301121561060b57600080fd5b610613610577565b915061061d610577565b61062960208601610539565b8152825260208101919091529392505050565b600181811c9082168061065057607f821691505b602082108114156104d657634e487b7160e01b600052602260045260246000fd5b60006020828403121561068357600080fd5b8151801515811461057057600080fdfea26469706673582212200b9ee842b090e3df70c78037ab65518ff02c949346751dac2637a7275387ccc764736f6c634300080c0033`,
  BytecodeLen: 2372,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:38:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:27:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Announcer": Announcer,
  "Listener": Listener,
  "Publisher_publish": Publisher_publish
  };
export const _APIs = {
  Publisher: {
    publish: Publisher_publish
    }
  };
