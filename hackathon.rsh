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

const [totalPaid] = parallelReduce([amount/5 ])
  .invariant(balance() == 0)
  .while(totalPaid > amount/5 * 4)
  .api_(SettleExpense.settleUp, () => {
    return[
        [amount/5],
        notify => {
            transfer(amount/5).to(payees[]);
            notify(true);
            return [false]
        }
    ]       
});

commit();

});