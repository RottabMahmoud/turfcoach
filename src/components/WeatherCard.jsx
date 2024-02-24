import "../styles.css";

/**
 * Component to display weather information for a specific location.
 * @param {Object} props - Component props.
 * @param {Object} props.weather - Weather data object for the location.
 * @param {string} props.units - Measurement units for temperature and wind speed.
 * @returns {JSX.Element} - Rendered weather card component.
 */
const WeatherCard = ({ weather, units }) => {
  /**
   * Function to capitalize the first letter of a string.
   * @param {string} string - Input string to capitalize.
   * @returns {string} - Capitalized string.
   */
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  /**
   * Function to convert wind speed to the desired units.
   * @param {number} speed - Wind speed to convert.
   * @param {string} units - Measurement units ("imperial" or "metric").
   * @returns {string} - Wind speed in the desired units.
   */
  const convertWindSpeed = (speed, units) => {
    return units === "imperial"
      ? (speed * 2.237).toFixed(1) + " mph"
      : speed.toFixed(1) + " m/s";
  };

  /**
   * Function to convert weather temp from Celsius to FahrenHeit.
   * @param {number} temp - Wind temp to convert.
   * @param {string} units - Measurement units ("imperial" or "metric").
   * @returns {string} - Weather Degree in the desired units.
   */
  const convertCelsiusToFahrenheit = (degree, units) => {
    return units === "imperial"
      ? (degree * 1.8 + 32).toFixed(1) + " °F"
      : degree.toFixed(1) + " °C";
  };

  // Check if there is rain data available
  const hasRain = weather.rain && weather.rain["1h"];

  // Render the weather card component
  return (
    <div className="weather-card">
      <div className="weather-header">
        {/* Display the location name */}
        <h2>{weather.name}</h2>
        {/* Display the weather description */}
        <p>{capitalizeFirstLetter(weather.weather[0].description)}</p>
      </div>
      <div className="weather-details">
        <div>
          {/* Display temperature with units based on selected system */}
          <p className="weather-detail">
            Temperature: {convertCelsiusToFahrenheit(weather.main.temp, units)}{" "}
          </p>
          {/* Display humidity percentage */}
          <p className="weather-detail">Humidity: {weather.main.humidity}%</p>
          {/* Display wind speed with converted units */}
          <p className="weather-detail">
            Wind Speed: {convertWindSpeed(weather.wind.speed, units)}
          </p>
          {/* Display rain amount if available */}
          {hasRain && (
            <p className="weather-detail">Rain: {weather.rain["1h"]} mm</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
