import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Balance from './components/headerbalance';
import Incomings from './components/incomings';
import Expenses from './components/expenses';
import Title from './components/title';
import Footer from './components/footer';
import Groceries from './components/expensescomponents/groceries';
import AddBudgetModal from './components/AddBudgetModal';
import AddExpenseModal from './components/AddExpensesComponent';
import ViewExpensesModal from './components/ViewExpensesModal';
import { useState } from 'react'

import { Button } from 'reactstrap';
import { Container } from 'reactstrap';
import BudgetCard from './components/expensescomponents/BudgetCard';
import UncategorizedBudgetCard from './components/UncategorizedBudgetCard';
import { BudgetsProvider, UNCATEGORIZED_BUDGET_iD, useBudgets } from './contexts/BudgetContext';
import TotalBudgetCard from './components/TotalBudgetCard';

function App() {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false)
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false)
  const [viewExpensesModalBudgetId, setViewExpensesModalBudgetId] = useState()
  const [addExpenseModalBudgetId, setAddExpenseModalBudgetId] = useState()
  const { budgets, getBudgetExpenses } = useBudgets()
  

  function openAddExpenseModal(budgetId) {
      setShowAddExpenseModal(true)
      setAddExpenseModalBudgetId(budgetId)
  }


  return (
    <div className="App">
      <AddBudgetModal show={showAddBudgetModal} handleClose={() => setShowAddBudgetModal(false) } />
      <AddExpenseModal 
      show={showAddExpenseModal}
      defaultBudgetId={addExpenseModalBudgetId}
      handleClose={() => setShowAddExpenseModal(false)}
        />
      <ViewExpensesModal 
      budgetId={viewExpensesModalBudgetId}
      handleClose={() => setViewExpensesModalBudgetId()}
        />
      <Container className="my-4">
        <div className="row">
            <div className="col">
              <h2>Budgets</h2>
                <Button color="primary" className='m-2' onClick={() => setShowAddBudgetModal(true)}>Add Budget</Button>
                <Button outline color="danger" className='m-2' onClick={openAddExpenseModal}>Add Expense</Button>
            </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1rem", alignItems: "flex-start"}}>
        
                {budgets.map(budget =>{
                  const amount = getBudgetExpenses(budget.id).reduce((total, expense) => total + expense.amount, 0)
                return(
                <BudgetCard 
                key={budget.id}
                name={budget.name} 
                amount={amount} 
                max={budget.max}
                onAddExpenseClick={() => openAddExpenseModal(budget.id)}
                onViewExpensesClick={() => setViewExpensesModalBudgetId(budget.id)}
                />  
                )
              })}
              <UncategorizedBudgetCard onAddExpenseClick={openAddExpenseModal} onViewExpensesClick={() => setViewExpensesModalBudgetId(UNCATEGORIZED_BUDGET_iD)}/>
              <TotalBudgetCard />
        </div>
      </Container>
      <Title/>
      <Balance />
      <Incomings/>
      <Expenses/>
      <Footer/>
      <Groceries/>
      
    </div>
  );
 
}

export default App;
