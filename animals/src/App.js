import "./styles.css";
import { useState } from "react";
import AnimalShow from "./AnimalShow";

function getRandomAnimal() {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];

  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  const renderedAnimals = animals.map((animal, index) => (
    <AnimalShow key={index} type={animal} />
  ));

  console.log(animals);
  return (
    <div>
      <button onClick={handleClick}>Add animal</button>
      <div className="animals">{renderedAnimals}</div>
    </div>
  );
}

export default App;
