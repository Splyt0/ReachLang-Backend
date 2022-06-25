import * as announcerBackend from './build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';

const stdlib = await loadStdlib('ETH');
//stdlib.setProviderByName('TestNet');

const bal = stdlib.parseCurrency(1000);
const acct = await stdlib.newTestAccount(bal);

const ctc = acct.contract(announcerBackend);

// deploy contract
await stdlib.withDisconnect(() =>
  ctc.p.Announcer({
    ready: stdlib.disconnect,
  })
);

//Returns the contract address - getInfo
const announcerCtcAddress = await ctc.getInfo();

console.log('********************************************');
console.log('Announcer contract address is:', announcerCtcAddress);
console.log('********************************************');