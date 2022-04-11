import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Container } from 'reactstrap';
import BudgetCard from './BudgetCard';
import { useState } from 'react'


function Groceries () {
    return(
        <>
        <Container className="my-4">
            <div className="row">
                <div className="col">
                 <h2>Budgets</h2>
                 <Button color="primary" className='m-2' >Add Budget</Button>
                 <Button outline color="primary" className='m-2'>Add Expense</Button>
                 </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1rem", alignItems: "flex-start"}}>
                <BudgetCard 
                name={"Groceries"} 
                gray 
                amount={1100} 
                max={500}>   
                </BudgetCard>
            </div>
        </Container>
        
        </>
)
}

export default Groceries;