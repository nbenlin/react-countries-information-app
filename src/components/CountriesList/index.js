import React, { useState } from "react";
import { List, Fallback } from "../CountriesList/CountriesListElements";
import CountryItem from "../CountryItem";

const CountriesList = (props) => {
  if (props.items.length === 0) {
    return <Fallback>Found no countries.</Fallback>;
  }

  return (
    <List>
      {props.items.map((country) => (
        <CountryItem
          id={country.callingCodes}
          key={country.numericCode}
          name={country.name}
          population={country.population}
          capital={country.capital}
          region={country.region}
          subregion={country.subregion}
          area={country.area}
          flag={country.flag}
        />
      ))}
    </List>
  );
};

export default CountriesList;
