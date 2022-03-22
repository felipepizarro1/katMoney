import React from "react";
import { Component } from "react";



function Balance () {
return(
    <div className="App">
        <div className="container">
            <div className="row m-5">
                <div className="col-1 m-auto">
                    <h2>Menu</h2>
                </div>
                <div className="col-3 m-auto">
                    <h2>Incoming</h2>
                    <h3>$3,500</h3>
                </div>
                <div className="col-4 m-auto">
                    <h2>Expenses</h2>
                    <h3>$2,050</h3>
                </div>
                <div className="col-3 m-auto">
                    <h2>Balance</h2>
                    <h3>$1,450</h3>
                </div>
                <div className="col-1 m-auto">
                    <h2>Reset</h2>
                </div>
            </div>

        </div>

    </div>
)
}

export default Balance;