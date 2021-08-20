import React, { useState } from "react";
import CountriesFilter from "../CountriesFilter";
import CountriesList from "../CountriesList";
import Card from "../UI/Card";

/* 
!! TODO !!
Craete filter countries component with filter option 
and then pass filtered items to <CountriesList items={filteredCountries} /> component  
*/

const Countries = (props) => {
  const [filteredRegion, setFilteredName] = useState("Europe");

  const filterChangeHandler = (selectedName) => {
    setFilteredName(selectedName);
  };

  const filteredCountries = props.items.filter((country) => {
    return country.region === filteredRegion;
  });

  return (
    <Card>
      <CountriesFilter
        selected={filteredRegion}
        onChangeFilter={filterChangeHandler}
        items={props.items}
      />
      <CountriesList items={filteredCountries} />
    </Card>
  );
};

export default Countries;
