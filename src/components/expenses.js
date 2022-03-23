import React from "react";
import { Component } from "react";

var logo = require('../logo-prueba.png');

function Expenses() {

    return(
        <div className="App">
            <div className="container expensesborder mt-3">
                <div className="row m-5">
                    <div className="col m-auto">
                        <h5>Groceries</h5>
                        <img width={80} src={logo} className="mb-2"/>
                        <h6>$265</h6>
                    </div>
                    <div className="col m-auto">
                        <h5>Restaurants</h5>
                        <img width={80} src={logo} className="mb-2"/>
                        <h6>$265</h6>
                    </div>
                    <div className="col m-auto">
                        <h5>Entertainment</h5>
                        <img width={80} src={logo} className="mb-2"/>
                        <h6>$265</h6>
                    </div>

                </div>
                <div className="row m-5">
                    <div className="col m-auto">
                        <h5>Transport</h5>
                        <img width={80} src={logo} className="mb-2"/>
                        <h6>$265</h6>
                    </div>
                    <div className="col m-auto">
                        <h5>Shopping</h5>
                        <img width={80} src={logo} className="mb-2"/>
                        <h6>$265</h6>
                    </div>
                    <div className="col m-auto">
                        <h5>Bills</h5>
                        <img width={80} src={logo} className="mb-2"/>
                        <h6>$265</h6>
                    </div>

                </div>
                <div className="row m-5">
                    <div className="col m-auto">
                        <h5>Pet</h5>
                        <img width={80} src={logo} className="mb-2"/>
                        <h6>$265</h6>
                    </div>
                    <div className="col m-auto">
                        <h5>Streamings</h5>
                        <img width={80} src={logo} className="mb-2"/>
                        <h6>$265</h6>
                    </div>
                    <div className="col m-auto">
                        <h5>Add</h5>
                        <h6>+</h6>
                    </div>

                </div>
            </div>
        </div>
    )

}

export default Expenses;