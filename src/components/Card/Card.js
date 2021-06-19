import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from "uuid";
import "./Card.css";

const Card = (props) => {    
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {

  }, [visible]);


  return(
    <form className="card-container">
      <div className="header">{props.card.category}</div>
      <div className="content" dangerouslySetInnerHTML={{ __html: `${props.card.question}` }}></div>
      <div>
        {props.card.answers.map((item) => (          
          <label><input type="radio" name="answers" />{item.answer}<span style={{display: visible ? "inline" : "none"}}>{item.correct === true ? '\u2714' : '\u2718' }</span></label>
          ))}
      </div>
      <button>CHECK ANSWER</button>
    </form>
  );
};
export default Card;