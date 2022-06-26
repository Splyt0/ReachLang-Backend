"reach 0.1";

const [expenseStatus, CREATED, ONGOING, SETTLED] = makeEnum(3);

export const main = Reach.App(() => {
  // tzpe for balance
  // no create
  // const SettleType = Map(Tuple(Address, UInt));

  const Split00 = Participant("Creator", {
    // isReady: Fun([Bool], Null),
    createGroup: Fun(
      [
        Array(Address, 5),
        Array(
          Object({
            UInt,
            Address,
            Address,
            UInt,
            expenseStatus,
            BalanceType,
            SettleType,
          }),
          100
        ),
      ],
      Null
    ), // return value is what we will go into the notify
    //Create a new group and send an array of group members, along with size(fixed - 5)
  });

  // type for expenses
  // no create
  const ExpenseObject = Object({
    expenseId: UInt,
    payer: Address,
    totalExpense: UInt,
    status: expenseStatus,
    balances: Map,
    settled: Map,
  });

  // default expense
  const DefaultExpense = {
    expenseId: 1,
    payer: "0x0", // getAddress()
    creator: "0x0",
    totalExpense: 0,
    status: expenseStatus.CREATED,
    balances: new Map(),
    settled: new Map(),
  };

  // EXPENSES API
  const Expense = API("Expense", {
    //Send expense parameters here - TODO
    // Prameters: Expense ID, Payer, Creator, TotalExpense, Expense Status, Balances, Settled
    createExpense: Fun(
      [UInt, Address, Address, UInt, expenseStatus, Map, Map],
      Null
    ), // return value is what we will go into the notify
    settleExpense: Fun([UInt], Null),
  });

  // see all expenses of a group
  const view = View("Expenses", {
    expenses: Fun([Address], UInt),
    members: [Address],
  });

  init();

  Creator.only(() => {
    const [members, expenses] = declassify(interact.createGroup);
  });

  Creator.publish(members);
  const expenses = new Map(ExpenseObject);

  Expenses.expenses.set(() => fromSome(expenses, DefaultExpense));
  Expenses.members.set(members);

  // map to store all expenses that are being payed or that have been created?

  const [expenseId, payer, creator, totalExpense, status, ] =
    parallelReduce(
      expenseId,
      payer,
      creator,
      totalExpense,
      status,
     
    )
      .define(() => {
        Expenses;
      })
      .api_(
        Expense.createExpense,
        (
          expenseId,
          payer,
          creator,
          totalExpense,
          status,
        
        ) => {
          members[this] = isSome(members[this])
            ? members[this] + totalExpense
            : totalExpense;
          expenseId = expenseId || 0;
          creator = this;
          status = expenseStatus.CREATED;
          members.forEach((address) => {
            if (address != payer) {
              balances[address] = balances[address] + totalExpense / 5;
              settled[address] = false;
            }
            if (address == payer) {
              settled[address] = true;
            }
          });

          return [
            expenseId + 1,
            payer,
            creator,
            totalExpense,
            status,
            balances,
            settled,
          ];
        }
      );

  // current user calls this function
  // if they have settled everzthing their balance should be 0 and thez should be sttled to true
  //   const [] = parallelReduce().api_(Expense.settleExpense, (expenseId) => {
  //     const user = this;
  //     const expense = Expense[expenseId];
  //     if (expense.status == expenseStatus.SETTLED) {
  //       return [];
  //     } else {
  //       expense.status = expenseStatus.ONGOING;
  //       userBalance = expense.balances[user];
  //       expense.settled[user] = true;
  //       transfer(userBalance).to();
  //     }

  //     return [];
  //   });
});
