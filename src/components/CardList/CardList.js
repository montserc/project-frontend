import React, { useState, useEffect, useContext } from "react";
import { SearchContext } from "../CardContent/CardContent";
import { v4 as uuidv4 } from "uuid";
import Card from "../Card/Card";
import "./CardList.css";

const CardList = () => {
  const [cards, setCards] = useState({ results: [] });
  const { newLevel, toggle } = useContext(SearchContext);

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
      `https://opentdb.com/api.php?amount=10&type=multiple&difficulty=${newLevel}`
    );
    const data = await response.json();
    data.results.map((item) => {
      item.answers = [{ answer: item.correct_answer, correct: true }];
      item.incorrect_answers.map((incorrect_answer) => {
        item.answers = item.answers.concat({
          answer: incorrect_answer,
          correct: false,
        });
      });
      item.answers = shuffle(item.answers);
    });
    setCards(data);
  };

  useEffect(() => {
    loadCards();
  }, [newLevel, toggle]);

  return (
    <div className="cards-container">
      <ul>
        {cards.results.map((card) => (
          <li key={uuidv4()}>
            <Card card={card}></Card>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardList;