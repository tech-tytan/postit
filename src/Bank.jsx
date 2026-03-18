import { useState } from "react";
import Counter from "./bank_components/Counter";
import Atm from "./bank_components/Atm";
import Pos from "./bank_components/Pos";
import Success from "./bank_components/Success";
import Warning from "./bank_components/Warning";

const Bank=() => {
    const [accountBalance, setAccountBalance]=useState(1000);
    const [amount,setAmount]=useState(0);
    // let accountBalance=1000;
    function update_amount(e) {
        setAmount(e.target.value);
    }

    return (
        <div className="container">
            <h1>Bank Application: {accountBalance}</h1>
            {(accountBalance>1000)?<Success/>:<Warning/>}
            <button className="btn btn-danger" onClick={() => {
                if(amount<accountBalance) {
                setAccountBalance(accountBalance-amount);
                }else{
                    alert("Oga, you can't withdraw more than what you have");
                }
                }}>Withdraw</button>
                <input type="number" value={amount} onChange={update_amount}/>
            <button className="btn btn-primary" onClick={() => {
                setAccountBalance(accountBalance+Number(amount));
                }}>Deposit</button>
            <Counter ab={accountBalance}/>
            <Atm ab={accountBalance}/>
            <Pos ab={accountBalance}/>
        </div>
    );
}

export default Bank;