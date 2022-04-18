import { useBudgets } from "../contexts/BudgetContext"
import BudgetCard from "./expensescomponents/BudgetCard"

export default function TotalBudgetCard(props) {

    const { expenses, budgets } = useBudgets()
    const amount = expenses.reduce(
      (total, expense) => total + expense.amount, 0)

    const max = budgets.reduce(
      (total, budget) => total + budget.max, 0)
    
    if (max === 0) return null
  return (
    <BudgetCard amount={amount} name="Spent/Planned" gray max={max} hideButtons/>
  )
}