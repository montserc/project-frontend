import React, { useState, useContext } from "react";
import { SearchContext } from "../CardContent/CardContent";
import { v4 as uuidv4 } from "uuid";
import "./CardSearch.css";

const CardSearch = () => {
  const [level, setLevel] = useState("medium");
  const { setNewLevel, toggle, setToggle } = useContext(SearchContext);
  const levels = ["easy", "medium", "hard"];

  function handleClick() {
    setNewLevel(level);
    setToggle( !toggle );
  }

  return (
    <div className="search-container">
      {levels.map((item) => (
        <label>
          <input
            key={uuidv4()}
            type="radio"
            name="levels"
            value={item}
            checked={item === level}
            onChange={(event) => setLevel(event.currentTarget.value)}
          />
          <div>{item}</div>
        </label>
      ))}
      <div>
        <button className="ask-ten-more" onClick={handleClick}>Ask 10 more</button>
      </div>
    </div>
  );
};

export default CardSearch;