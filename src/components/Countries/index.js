import React from "react";
import CountriesList from "../CountriesList";
import Card from "../UI/Card";

/* 
!! TODO !!
Craete filter countries component with filter option 
and then pass filtered items to <CountriesList items={filteredCountries} /> component  
*/

const Countries = (props) => {
  // console.log(props.items);
  return (
    <Card>
      <CountriesList items={props.items} />
    </Card>
  );
};

export default Countries;
