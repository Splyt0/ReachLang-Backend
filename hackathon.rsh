'reach 0.1';

// const [expenseStatus, CREATED, ONGOING, SETTLED] = makeEnum(3);

export const main = Reach.App(() => {

const ExpenseCreator = Participant("Winner", {
    amount: UInt,
    winners: Array(Address, 5),

});

const SettleWinnings = API("Settle", {
    settleUp : Fun([], Bool),
});

init();

ExpenseCreator.only(() => {
    const amount = declassify(interact.amount);
    const winners = declassify(interact.winners);
});

ExpenseCreator.publish(amount,winners);

const [totalPaid] = parallelReduce([ amount/5 ])
  .invariant(balance() == 0)
  .while(totalPaid > amount/5)
  .api_(SettleWinnings.settleUp, () => {
    return[
        [amount/5],
        notify => {
            winners.forEach((winner) => {
            transfer(amount/5).to(winner);

            })
            notify(true);
            return [totalPaid -  amount/5 * 5 ]
        }
    ]       
});

commit();

});