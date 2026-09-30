import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses,onDelete }) {

    return (

        <div>

            <h2 className="expense-heading"> Your Expenses</h2>

            {expenses.length === 0 ? (

                <p>No expenses added yet.</p>

            ) : (

                expenses.map(function(expense) {

                    return (
                        <ExpenseItem
                            key={expense.id}
                            expense={expense}
                            onDelete={onDelete}
                        />
                    );

                })

            )}

        </div>
    );
}

export default ExpenseList;