import { Fragment, useEffect, useState } from "react";
import Countries from "./components/Countries/";
import CountryDetails from "./components/CountryDetails";

const App = () => {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => setCountriesData(data))
      .catch((err) => console.log("Error:", err.message));
  }, []);

  return (
    <Fragment>
      <h1>BAE Systems Recruitment Task</h1>
      <Countries items={countriesData} />
    </Fragment>
  );
};

export default App;
