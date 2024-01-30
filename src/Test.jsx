import { useState } from "react";

export default function Test() {
    const [foods, setFoods] = useState(["Apple", "orange"]);

    function addFood() {
        const newFood = document.getElementById("foodname").value;
        document.getElementById("foodname").value = "";
        setFoods((f) => [...f, newFood]);
    }

    function removeFood(index) {
        setFoods(foods.filter((_, i) => i !== index));
    }

    return (
        <div>
            <h1>List of foods</h1>
            <ul>
                {foods.map((food, index) => (
                    <li key={index} onClick={() => removeFood(index)}>
                        {food}
                    </li>
                ))}
            </ul>
            <input type="text" id="foodname" />
            <button onClick={addFood}>Submit</button>
        </div>
    );
}
