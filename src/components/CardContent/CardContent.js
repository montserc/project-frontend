import React, { useState, createContext } from "react";
import CardList from "../CardList/CardList";
import CardSearch from "../CardSearch/CardSearch";

export const SearchContext = createContext({ newLevel: 'medium', setNewLevel: () => {} });

const CardContent = () => {
  const [newLevel, setNewLevel] = useState('medium');

  return (
    <SearchContext.Provider value={{newLevel, setNewLevel}}>
      <CardSearch />
      <CardList />
    </SearchContext.Provider>
  );
};

export default CardContent;
