import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Balance from './components/headerbalance';
import Incomings from './components/incomings';
import Expenses from './components/expenses';
import Title from './components/title';

class App extends Component {
  render(){
  return (
    <div className="App">
      <Title/>
      <Balance />
      <Incomings/>
      <Expenses/>
    </div>
  );
 }
}

export default App;
