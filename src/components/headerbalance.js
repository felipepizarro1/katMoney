import React from "react";
import { Component } from "react";



function Balance () {
return(
    <div className="App">
        <div className="container balanceborder mt-3 ">
            <div className="row m-1">
                <div className="col-1 m-auto">
                    <h5>Menu</h5>
                </div>
                <div className="col-3 m-auto d-none d-sm-block">
                    <h5>Incoming</h5>
                    <h6 className="incomingnumber">$3,500</h6>
                </div>
                <div className="col-4 m-auto">
                    <h4>Expenses</h4>
                    <h5 className="expensesnumber">$2,050</h5>
                </div>
                <div className="col-3 m-auto d-none d-sm-block">
                    <h5>Balance</h5>
                    <h6>$1,450</h6>
                </div>
                <div className="col-1 m-auto">
                    <h5>Reset</h5>
                </div>
            </div>

        </div>

    </div>
)
}

export default Balance;