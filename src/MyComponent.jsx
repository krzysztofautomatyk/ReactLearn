import React, {useState} from "react";

function MyComponent(){

    const [count, setCount] = useState(0);
/*
    function handleIncrement(){
        setCount(count + 1);
        setCount(count + 1);
        setCount (count + 1);
        //Update rexult is 1 not 3
    }
*/
    function handleIncrement(){
        setCount(count => count + 1);
        setCount(count => count + 1);
        setCount(count => count + 1);
        //Update result is 3
    }

    function handleDecrement(){
        setCount(count - 1);
    }

    function handleReset(){
        //setCount(0);
        setCount(count => 0);
    }

    return (
        <div className="counter-container">
            <h1>Counter</h1>
            <p>Count: {count}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}

export default MyComponent;