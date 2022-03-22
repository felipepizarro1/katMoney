import React from "react";
import { Component } from "react";

function Incomings () {

    return(
        <div className="App">
            <div className="container incomingsborder mt-3">
               <div className="row m-4">
                   <div className="col m-auto">
                        <h3>Wallet</h3>
                        <h4>$200</h4>
                   </div>
                   <div className="col m-auto">
                        <h3>Bank Account</h3>
                        <h4>$33,000</h4>
                   </div>
                   <div className="col m-auto">
                        <h3>Savings</h3>
                        <h4>$12,000</h4>
                   </div>
               </div>
            </div>
        </div>

    )
}

export default Incomings;