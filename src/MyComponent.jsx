
import React,  {useState} from 'react';

function MyComponent() {
  
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(25);
    const [isEmployed, setIsEmployed] = useState(false);   
    
    const updateName = () => {
        setName('John Doe');
    }

    const incrementAge = () => {
        setAge(age + 1);
    }

    const toggleEmployment = () => {
           setIsEmployed(!isEmployed);
    }

    return(<div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>

        <p>Age: {age}</p>
        <button onClick={incrementAge}>Increment Age</button>

        <p>Is isEmployed: {isEmployed ? "Yes" : "No"}</p>
        <button onClick={toggleEmployment}>Toggle Employment</button>
    </div>)
}

export default MyComponent;