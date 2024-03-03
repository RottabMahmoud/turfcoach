import { useState } from "react";
import WeatherCard from "./WeatherCard";
import WeatherForm from "./WeatherForm";
import CityImage from "./CityImage";

/**
 * Component to display weather information, weather form, favorites, and city image.
 * @returns {JSX.Element} - Rendered weather information component.
 */
const WeatherInfo = () => {
  // State to hold weather data, units, and favorites
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState("metric");
  const [favorites, setFavorites] = useState([]);

  /**
   * Function to fetch weather data for a given location.
   * @param {string} location - Location for which to fetch weather data.
   * @returns {void}
   */
  const getWeather = async (location) => {
    try {
      const apiKey = "c62a7dba163c217fd53098f3b5730c72";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=${units}`;
      const response = await fetch(url);
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      console.log("Error fetching weather:", error);
    }
  };

  /**
   * Function to handle unit change.
   * @param {string} selectedUnit - Selected unit ("metric" or "imperial").
   * @returns {void}
   */
  const handleUnitChange = (selectedUnit) => {
    setUnits(selectedUnit);
  };

  /**
   * Function to add the current location to favorites.
   * @returns {void}
   */
  const addToFavorites = () => {
    if (weather && !favorites.includes(weather.name)) {
      setFavorites([...favorites, weather.name]);
    }
  };

  /**
   * Function to remove a city from favorites.
   * @param {string} city - City name to remove from favorites.
   * @returns {void}
   */
  const removeFromFavorites = (city) => {
    const updatedFavorites = favorites.filter((fav) => fav !== city);
    setFavorites(updatedFavorites);
  };

  // Render the weather information component
  return (
    <div className="flex">
      <div className="weather-info w-1/4">
        {/* WeatherForm component for inputting location */}
        <WeatherForm getWeather={getWeather} />

        {/* Display current weather information if available */}
        {weather && (
          <div className="current-weather">
            {/* WeatherCard component to display current weather */}
            <WeatherCard weather={weather} units={units} />

            {/* Weather actions section */}
            <div className="weather-actions">
              {/* Button to add current location to favorites */}
              <button onClick={addToFavorites} className="add-favorite-btn bg-blue-500 hover:bg-blue-700 text-white">
                Add to Favorites
              </button>

              {/* Unit selector for temperature units */}
              <select
                value={units}
                onChange={(e) => handleUnitChange(e.target.value)}
                className="m-3"
              >
                <option value="metric">Metric (Celsius)</option>
                <option value="imperial">Imperial (Fahrenheit)</option>
              </select>
            </div>
          </div>
        )}

        {/* Favorites section */}
        <div className="favorites text-white">
          <h3>Your Favorites:</h3>
          <ul>
            {/* Display list of favorite cities with remove button */}
            {favorites.length === 0 ? (
              <li>No favorites added yet.</li>
            ) : (
              favorites.map((city) => (
                <li
                  className="hover:cursor-pointer hover:font-bold hover:text-blue-500"
                  onClick={() => getWeather(city)}
                  key={city}
                >
                  {city}
                  <button
                    onClick={() => removeFromFavorites(city)}
                    className="remove-favorite-btn"
                  >
                    Remove
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
      {/* Display city image using CityImage component */}
      <div className="w-3/4 hidden sm:block">
        {weather && <CityImage city={weather.name} />}
      </div>
    </div>
  );
};

export default WeatherInfo;
