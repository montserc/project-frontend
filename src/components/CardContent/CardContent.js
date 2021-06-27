import React, { useState, createContext } from "react";
import CardList from "../CardList/CardList";
import CardSearch from "../CardSearch/CardSearch";

export const SearchContext = createContext();

const CardContent = () => {
  const [newLevel, setNewLevel] = useState('medium');
  const [toggle, setToggle] = useState(false);

  return (
    <SearchContext.Provider value={{newLevel, setNewLevel, toggle, setToggle}}>
      <CardSearch />
      <CardList />
    </SearchContext.Provider>
  );
};

export default CardContent;