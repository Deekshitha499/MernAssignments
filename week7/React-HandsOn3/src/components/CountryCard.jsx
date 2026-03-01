function CountryCard({ country }) {
  return (
    <div className="card">
      <img
        src={country.flags.png}
        alt={country.name.common}
        className="flag"
      />

      <h3>{country.name.common}</h3>

      <p>
        <strong>Capital:</strong> {country.capital?.[0] || "N/A"}
      </p>

      <p>
        <strong>Population:</strong>{" "}
        {country.population.toLocaleString()}
      </p>

      <p>
        <strong>Region:</strong> {country.region}
      </p>
    </div>
  );
}

export default CountryCard;