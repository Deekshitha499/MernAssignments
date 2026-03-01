import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import CountryList from "./components/CountryList";
import CountryCard from "./components/CountryCard";

function App() {
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all countries on load
  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags"
    )
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch countries");
        return res.json();
      })
      .then((data) => {
        setCountries(data);
        setFiltered(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Search handler
  const handleSearch = (query) => {
    const result = countries.filter((c) =>
      c.name.common.toLowerCase().includes(query.toLowerCase())
    );
    setFiltered(result);
  };

  // UI States
  if (loading) return <h2>Loading countries… ⏳</h2>;
  if (error) return <h2>Error: {error} </h2>;

  return (
    <div className="container">
      <h1> Country Explorer</h1>

      <SearchBar onSearch={handleSearch} />

      <CountryList countries={filtered} />
    </div>
  );
}

export default App;