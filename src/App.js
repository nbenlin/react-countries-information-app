import { useEffect, useState } from "react";
import Countries from "./components/Countries/";

const App = () => {
  const [countriesData, setCountriesData] = useState({});
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => data.map((item) => initialize(item)))
      .catch((err) => console.log("Error:", err.message));

    // A little destructuring...
    function initialize({
      name,
      capital,
      callingCodes,
      population,
      currencies,
      region,
    }) {
      // console.log({
      //   name,
      //   capital,
      //   callingCodes,
      //   population,
      //   currencies,
      //   region,
      // });
      setCountriesData({
        name,
        capital,
        callingCodes,
        population,
        currencies,
        region,
      });
    }
  }, []);

  // console.log(countriesData);
  return (
    <>
      <h1>BAE Recruitment Task</h1>
      <Countries items={countriesData} />
    </>
  );
};

export default App;
