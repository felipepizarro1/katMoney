import { useBudgets } from "../contexts/BudgetContext"
import BudgetCard from "./expensescomponents/BudgetCard"

export default function TotalBudgetCard(props) {

    const { getBudgetExpenses } = useBudgets()
    const amount = getBudgetExpenses(UNCATEGORIZED_BUDGET_iD).reduce((total, expense) => total + expense.amount, 0)
    if (max === 0) return null
  return (
    <BudgetCard amount={amount} name="Total" gray max={max}/>
  )
}
