import React, { useState, useRef } from "react";

function MyComponent() {
    const [foods, setFoods] = useState(["apple", "banana", "cherry", "orange"]);
    const foodInputRef = useRef(null);

    function handleAddFood() {
        const newFood = foodInputRef.current.value.trim();
        if (newFood) {
            setFoods((prevFoods) => [...prevFoods, newFood]);
            foodInputRef.current.value = "";
        }
    }

    function handleRemoveFood(indexNumber) {
        setFoods((prevFoods) => prevFoods.filter((_, i) => i !== indexNumber));
    }

    return (
        <div>
            <h1>My Favorite Foods</h1>
            <ul>
                {foods.map((food, index) => (
                    <li key={index} onClick={() => handleRemoveFood(index)}>
                        {food}
                    </li>
                ))}
            </ul>
            <input
                type="text"
                ref={foodInputRef}
                placeholder="Enter food name"
            />
            <button onClick={handleAddFood}>Add a food</button>
        </div>
    );
}

export default MyComponent;
