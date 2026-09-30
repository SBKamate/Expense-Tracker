function ExpenseItem({ expense,onDelete }) {

    return (

        <div className="expense-item">

            <div>

                <h3>{expense.title}</h3>

                <p>
                    {expense.category} • {expense.date}
                </p>

            </div>

            <div>

                <strong>
                    ₹{expense.amount}
                </strong>

                <br />

                <button>
                    Edit
                </button>

                <button onClick={()=>onDelete(expense.id)}>
                    Delete
                </button>

            </div>

        </div>
    );
}

export default ExpenseItem;