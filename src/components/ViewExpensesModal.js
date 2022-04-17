import React from 'react'
import { Modal, Button, Stack } from "react-bootstrap"
import { BudgetsProvider, UNCATEGORIZED_BUDGET_iD, useBudgets } from '../contexts/BudgetContext'



export default function ViewExpensesModal({ budgetId, handleClose }) {
    const { getBudgetExpenses, budgets, deleteBudget, deleteExpense } = useBudgets()
    const expenses = getBudgetExpenses(budgetId)
    const budget = UNCATEGORIZED_BUDGET_iD === budgetId ? { name: "Uncategorized", id: UNCATEGORIZED_BUDGET_iD } : budgets.find(b => b.id === budgetId)

  return (
    <Modal show={budgetId !=null} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <Stack direction="horizontal" gap="2">
              <div>Expenses - {budget?.name}</div>
              {budgetId !== UNCATEGORIZED_BUDGET_iD && (<Button onClick={()=>{ deleteBudget(budget)
                    handleClose()
                 }} variant="outline-danger">Delete</Button>)}
            </Stack>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Stack direction="vertical" gap="3">
            {expenses.map( expense => (
              <Stack direction="horizontal" gap="2" key={expense.id}>
                
              </Stack>
            )
            )}
          </Stack>
        </Modal.Body>
    </Modal>
  )
}
 