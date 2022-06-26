import * as expenses from './build/expenses.main.mjs'
import * as hackathon from './build/hackathon.main.mjs'
import { loadStdlib, ask } from '@reach-sh/stdlib'

const stdlib = await loadStdlib('ETH')
stdlib.setProviderByName('TestNet')

const acct = await stdlib.newAccountFromMnemonic(
  'act eyebrow discover post pond seek cart scout toward arrive language rebel'
)
console.log(acct)
const ctcExpenses = acct.contract(expenses)
const ctcHackathon = acct.contract(hackathon)

// deploy Expenses contract
await stdlib.withDisconnect(() =>
  ctcExpenses.p.Payer({
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
// deploy Hackathon contract
await stdlib.withDisconnect(() =>
  ctcHackathon.p.Winner({
    amount: 100,
    winners: [
      '0xcb270e8610977301c85d39edb608b5513bbf6261',
      '0xef0d7077b93af44b966f2a2469715323ac4966e7',
      '0xef0d7077b93af44b966f2a2469715323ac4966e6',
      '0xef0d7077b93af44b966f2a2469715323ac4966e5',
      '0xef0d7077b93af44b966f2a2469715323ac4966e4'
    ]
  })
)

//Returns the contract address - getInfo
const expensesCtcAddress = await ctcExpenses.getInfo()
const hackathonCtcAddress = await ctcHackathon.getInfo()

console.log('********************************************')
console.log('Announcer contract address is:', expensesCtcAddress)
console.log('Announcer contract address is:', hackathonCtcAddress)
console.log('********************************************')
