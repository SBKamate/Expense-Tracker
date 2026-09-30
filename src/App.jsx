import { useState } from "react";

import "./App.css";

import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Summary from "./components/Summary";


function App() {

    // Store all expenses
    const [expenses, setExpenses] = useState([]);

    // Search state
    const [search, setSearch] = useState("");

    // Category filter state
    const [categoryFilter, setCategoryFilter] = useState("All");


    // Add expense
    function addExpense(newExpense) {

        setExpenses(function(previousExpenses) {

            return [...previousExpenses, newExpense];

        });

    }


    // Delete expense
    function deleteExpense(id) {

        setExpenses(function(previousExpenses) {

            return previousExpenses.filter(function(expense) {

                return expense.id !== id;

            });

        });

    }


    // Calculate total expense
    const totalExpense = expenses.reduce(
        function(total, expense) {

            return total + expense.amount;

        },
        0
    );


    // Search + category filtering
    const filteredExpenses = expenses.filter(function(expense) {

        const matchesSearch =
            expense.title
                .toLowerCase()
                .includes(search.toLowerCase());


        const matchesCategory =
            categoryFilter === "All" ||
            expense.category === categoryFilter;


        return matchesSearch && matchesCategory;

    });


    return (

        <div className="app">

            <h1>Personal Expense Manager</h1>

             <p>Track your spending and manage your expenses easily</p>
            {/* Total Expense */}

            <Summary total={totalExpense} />
            


            {/* Add Expense */}

            <ExpenseForm
                onAddExpense={addExpense}
            />


            {/* Search */}

            <input
                type="text"
                placeholder="Search expenses..."
                value={search}
                onChange={(event) =>
                    setSearch(event.target.value)
                }
            />


            {/* Category Filter */}

            <select
                value={categoryFilter}
                onChange={(event) =>
                    setCategoryFilter(event.target.value)
                }
            >

                <option value="All">
                    All Categories
                </option>

                <option value="Food">
                    Food
                </option>

                <option value="Travel">
                    Travel
                </option>

                <option value="Shopping">
                    Shopping
                </option>

                <option value="Education">
                    Education
                </option>

                <option value="Other">
                    Other
                </option>

            </select>


            {/* Expense List */}

            <ExpenseList
                expenses={filteredExpenses}
                onDelete={deleteExpense}
            />

        </div>

    );
}


export default App;