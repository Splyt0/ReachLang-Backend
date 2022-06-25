'reach 0.1';

// const [expenseStatus, CREATED, ONGOING, SETTLED] = makeEnum(3);

export const main = Reach.App(() => {

const ExpenseCreator = Participant("Payer", {
    amount: UInt,
    payees: Array(Address, 5),

});

const SettleExpense = API("Settle", {
    settleUp : Fun([], Bool),
});

init();

ExpenseCreator.only(() => {
    const amount = declassify(interact.amount);
    const payees = declassify(interact.payees);
});

ExpenseCreator.publish(amount,payees);
const paidUsers = new Set()

const [totalPaid] = parallelReduce([ amount/5 ])
  .invariant(balance() == 0)
  .while(totalPaid < amount)
  .api_(SettleExpense.settleUp, () => {
    check(paidUsers.includes(this), "You have already paid!");
    return[
        [amount/5],
        notify => {
            transfer(amount/5).to(ExpenseCreator);
            paidUsers.insert(this);
            notify(true);
            return [totalPaid + amount/5]
        }
    ]       
});

commit();






});