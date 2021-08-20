import React from "react";
import { List, Fallback } from "../CountriesList/CountriesListElements";
import CountryItem from "../CountryItem";

const CountriesList = (props) => {
  if (props.items.length === 0) {
    return <Fallback>Found no countries.</Fallback>;
  }
  // console.log(props.items);
  return (
    <List>
      {props.items.map((country) => (
        <CountryItem
          key={country.numericCode}
          name={country.name}
          population={country.population}
        />
      ))}
    </List>
  );
};

export default CountriesList;
