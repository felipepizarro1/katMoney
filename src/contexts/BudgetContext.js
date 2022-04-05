import React, { useContext, useState } from 'react'

const BudgetsContext = React.createContext()

export function useBudgets () {
    return useContext(BudgetsContext)

}

// {
//     id:
//     name:
//     max
// }

// {
//     id:
//     budgetId:
//     amount:
//     description:

// }

export const BudgetsProvider = ({ children }) => {
    const [budgets, setBudgets] = useState([])
    const [expenses, setExpense ] = useState([])
    
    function getBudgetExpenses (budgetId) {
        return expenses.filter(expense => expense.budgetId === budget)

    }
    function addExpense () {

    }

    function addBudget () {

    }

    function deleteBudget () {

    }
    function deleteExpense () {

    }

    return (<BudgetsContext.Provider value={{
        budgets,
        expenses,
        getBudgetExpenses,
        addExpense,
        addBudget,
        deleteBudget,
        deleteExpense
    }}>{children}</BudgetsContext.Provider> 
    )
}

