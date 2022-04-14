import { UNCATEGORIZED_BUDGET_iD, useBudgets } from "../contexts/BudgetContext"
import BudgetCard from "./expensescomponents/BudgetCard"

export default function UncategorizedBudgetCard(props) {

    const { getBudgetExpenses } = useBudgets()
    const amount = getBudgetExpenses(UNCATEGORIZED_BUDGET_iD).reduce((total, expense) => total + expense.amount, 0)
    if (amount === 0) return null
  return (
    <BudgetCard amount={amount} name="Uncategorized" gray {...props}/>
  )
}
