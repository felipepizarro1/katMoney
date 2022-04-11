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
import { useState } from 'react'


function App() {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false)
  return (
    <div className="App">
      <AddBudgetModal show={showAddBudgetModal} handleClose={() => setShowAddBudgetModal(false) } />
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
