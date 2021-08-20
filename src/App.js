import { Fragment, useEffect, useState } from "react";
import Countries from "./components/Countries/";

const App = () => {
  const [countriesData, setCountriesData] = useState([]);

  const handleFetch = () => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => setCountriesData(data))
      .catch((err) => console.log("Error:", err.message));
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <Fragment>
      <h1>BAE Systems Recruitment Task</h1>
      <Countries items={countriesData} />
    </Fragment>
  );
};

export default App;
