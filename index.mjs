import * as splitOO from './build/test.main.mjs'
import { loadStdlib, ask } from '@reach-sh/stdlib'

const stdlib = await loadStdlib('ETH')
stdlib.setProviderByName('TestNet')

// const bal = stdlib.parseCurrency(1000)
// const acct = await stdlib.newTestAccount(bal)

// const getAccFromMnemonic = async (
//   message = 'Please paste the mnemonic of the deployer:'
// ) => {
//   const mnemonic = await ask.ask(message);
//   const fmtMnemonic = mnemonic.replace(/,/g, '');
//   const acc = await stdlib.newAccountFromMnemonic(fmtMnemonic);
//   return acc;
// };

const acct = await stdlib.newAccountFromMnemonic(
  'act eyebrow discover post pond seek cart scout toward arrive language rebel'
)
console.log(acct)
const ctc = acct.contract(splitOO)

// deploy contract
await stdlib.withDisconnect(() =>
  ctc.p.Payer({
    amount: 1,
    payees: [
      '0xcb270e8610977301c85d39edb608b5513bbf6261',
      '0xef0d7077b93af44b966f2a2469715323ac4966e7',
      '0xef0d7077b93af44b966f2a2469715323ac4966e6',
      '0xef0d7077b93af44b966f2a2469715323ac4966e5',
      '0xef0d7077b93af44b966f2a2469715323ac4966e4'
    ]
  })
)

//Returns the contract address - getInfo
const splitOOCtcAddress = await ctc.getInfo()

console.log('********************************************')
console.log('Announcer contract address is:', splitOOCtcAddress)
console.log('********************************************')
