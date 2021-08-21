import { Fragment, useEffect, useState } from "react";
import Countries from "./components/Countries/";
import InfoSection from "./components/Info";

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
      <InfoSection />
      <Countries items={countriesData} />
    </Fragment>
  );
};

export default App;
