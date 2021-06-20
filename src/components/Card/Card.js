import React, { useState, useEffect } from "react";
import "./Card.css";

const Card = (props) => {
  const [resolve, setResolve] = useState(false);

  useEffect(() => {}, [resolve]);
  
  function handleSubmit(e) {
    e.preventDefault();
    setResolve(true);
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <div>{props.card.category}</div>
      <div dangerouslySetInnerHTML={{ __html: `${props.card.question}`}}></div>
      <div>
        {props.card.answers.map((item) => (
          <label>
            <input type="radio" name="answers" />
            <div dangerouslySetInnerHTML={{ __html: `${item.answer}`}}></div>
            <span style={{ display: resolve ? "inline" : "none", color: item.correct === true ? "#56be8e" : "#ef5350" }}>
              {item.correct === true ? "\u2714" : "\u2718"}
            </span>
          </label>
        ))}
      </div>
      <button type="submit">CHECK ANSWER</button>
    </form>
  );
};
export default Card;
