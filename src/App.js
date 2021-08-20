import { useEffect, useState } from "react";
import Countries from "./components/Countries/";

const App = () => {
  const [countriesData, setCountriesData] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => setCountriesData(data))
      .catch((err) => console.log("Error:", err.message));
  }, []);

  return (
    <>
      <h1>BAE Recruitment Task</h1>
      <Countries items={countriesData} />
    </>
  );
};

export default App;
