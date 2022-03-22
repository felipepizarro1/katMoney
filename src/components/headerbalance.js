import React from "react";
import { Component } from "react";



function Balance () {
return(
    <div className="App">
        <div className="container balanceborder ">
            <div className="row m-5">
                <div className="col-1 m-auto">
                    <h4>Menu</h4>
                </div>
                <div className="col-3 m-auto">
                    <h4>Incoming</h4>
                    <h3>$3,500</h3>
                </div>
                <div className="col-4 m-auto">
                    <h4>Expenses</h4>
                    <h3>$2,050</h3>
                </div>
                <div className="col-3 m-auto">
                    <h4>Balance</h4>
                    <h3>$1,450</h3>
                </div>
                <div className="col-1 m-auto">
                    <h4>Reset</h4>
                </div>
            </div>

        </div>

    </div>
)
}

export default Balance;