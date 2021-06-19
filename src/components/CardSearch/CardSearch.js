import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Card from "../Card/Card";
import "./CardSearch.css";

const CardSearch = () => {
  const [cards, setCards] = useState({ results: [] });
  const [search, setSearch] = useState("medium");
  const [url, setUrl] = useState(
    "https://opentdb.com/api.php?amount=10&type=multiple&difficulty=medium"
  );
  
  /* Aleatoriza un array según el algoritmo de Fisher-Yates */
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const loadCards = async () => {
    const response = await fetch(
      `https://opentdb.com/api.php?amount=10&type=multiple&difficulty${search}`
    );
    const data = await response.json();
    data.results.map((item) => { 
      item.answers = [{ "answer": item.correct_answer, "correct": true }]
      item.incorrect_answers.map(incorrect_answer => {
        item.answers = item.answers.concat({ "answer": incorrect_answer, "correct": false });    
      });
      item.answers = shuffle(item.answers);
    });         
    console.log(data);    
    setCards(data);
  };

  useEffect(() => {
    loadCards();
    return () => {
      console.log("limpiando");
    };
  }, [search]);

  if (cards === null) {
    return <></>;
  }
  return (
    <>
      <select name="difficulty">
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
      <input
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button
        type="button"
        onClick={() =>
          setUrl(
            `https://opentdb.com/api.php?amount=10&type=multiple&difficulty${search}`
          )
        }
      >
        Otras 10
      </button>
      <ul className="cards-container">
        {cards.results.map((card) => (          
          <li key={uuidv4()}>
            <Card card={card}></Card>
          </li>
        ))}
      </ul>
    </>
  );
};
export default CardSearch;
