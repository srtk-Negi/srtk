import { useState } from "react";

export default function Test() {
    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleYearChange(event) {
        setCarYear(event.target.value);
    }

    function handleMakeChange(event) {
        setCarMake(event.target.value);
    }
    function handleModelChange(event) {
        setCarModel(event.target.value);
    }
    function addCar() {
        const newCar = { year: carYear, make: carMake, model: carModel };

        setCars((c) => [...c, newCar]);
        setCarMake("");
        setCarModel("");
        setCarYear(new Date().getFullYear());
    }

    function removeCar(index) {
        setCars(cars.filter((_, i) => i !== index));
    }

    return (
        <div>
            <h2>List of car objects</h2>
            <ul>
                {cars.map((car, index) => (
                    <li key={index} onClick={() => removeCar(index)}>
                        {car.year} {car.make} {car.model}
                    </li>
                ))}
            </ul>
            <input type="number" value={carYear} onChange={handleYearChange} />
            <br />
            <input type="text" value={carMake} onChange={handleMakeChange} />
            <br />
            <input type="text" value={carModel} onChange={handleModelChange} />
            <br />
            <button onClick={addCar}>Add Car</button>
        </div>
    );
}
