import { useState } from "react";

function ExpenseForm({ onAddExpense }) {

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");
    const [date, setDate] = useState("");

    function handleSubmit(event) {

        event.preventDefault();

        if (!title || !amount || !category || !date) {
            alert("Please fill all fields");
            return;
        }

        const newExpense = {

            id: Date.now(),

            title: title,

            amount: Number(amount),

            category: category,

            date: date

        };

        onAddExpense(newExpense);

        setTitle("");
        setAmount("");
        setCategory("");
        setDate("");
    }

    return (

        <form onSubmit={handleSubmit}>

            <h2>Add Expense</h2>

            <input
                type="text"
                placeholder="Expense title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />

            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(event) => setAmount(event.target.value)}
            />

            <select
                value={category}
                onChange={(event) => setCategory(event.target.value)}
            >

                <option value="">Select category</option>

                <option value="Food">Food</option>

                <option value="Travel">Travel</option>

                <option value="Shopping">Shopping</option>

                <option value="Education">Education</option>

                <option value="Other">Other</option>

            </select>

            <input
                type="date"
                value={date}
                onChange={(event) => setDate(event.target.value)}
            />

            <button type="submit">
                Add Expense
            </button>

        </form>
    );
}

export default ExpenseForm;