import React from "react";
import { Component } from "react";

var cointest = require('../pruebamoneda1-02.png');

function Incomings () {

    return(
        <div className="App">
            <div className="container incomingsborder mt-3">
               <div className="row m-2">
                   <div className="col m-auto">
                        <h3 draggable="true">Wallet</h3>
                        <img width={100} src={cointest} className="incomingimg" draggable="true"/>
                        <h4>$200</h4>
                   </div>
                   <div className="col m-auto">
                        <h3>Bank 1</h3>
                        <img width={100} src={cointest} />
                        <h4>$33,000</h4>
                   </div>
                   <div className="col m-auto">
                        <h3>Savings</h3>
                        <img width={100} src={cointest} />
                        <h4>$12,000</h4>
                   </div>
               </div>
            </div>
        </div>

    )
}

export default Incomings;