import React, { useState } from "react";
import CountriesFilter from "../CountriesFilter";
import CountriesList from "../CountriesList";
import Card from "../UI/Card";

const Countries = (props) => {
  const [filteredRegion, setFilteredRegion] = useState("Europe");
  const [filteredName, setFilteredName] = useState("");

  const filterChangeHandler = (selectedName) => {
    setFilteredRegion(selectedName);
  };

  const inputChangeHandler = (enteredName) => {
    setFilteredName(enteredName);
  };

  const filteredCountries = props.items.filter((country) => {
    return country.region === filteredRegion;
  });

  const filteredByNames = props.items.filter((country) => {
    return country.name.toLowerCase() === filteredName;
  });

  let isEnteredName = false;
  if (filteredName !== "") {
    isEnteredName = true;
  }

  return (
    <Card>
      <CountriesFilter
        selected={filteredRegion}
        onChangeFilter={filterChangeHandler}
        onChangeInputFilter={inputChangeHandler}
        items={props.items}
      />
      <CountriesList
        items={isEnteredName ? filteredByNames : filteredCountries}
      />
    </Card>
  );
};

export default Countries;
