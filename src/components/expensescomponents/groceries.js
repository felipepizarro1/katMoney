import React, { Component } from 'react';
import { Button, Stack } from 'reactstrap';
import { Container } from 'reactstrap';

function Groceries () {
    return(
        <Container className="my-4">
            <div className="row">
                <div className="col">
                 <h2>I'M GROCERIES</h2>
                 <Button color="primary" className='m-2'>Add Budget</Button>
                 <Button outline color="primary" className='m-2'>Add Expense</Button>
                 </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1rem", alignItems: "flex-start"}}> </div>
        </Container>

)
}

export default Groceries;