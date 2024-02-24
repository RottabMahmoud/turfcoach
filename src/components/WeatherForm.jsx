import { useState } from "react";

/**
 * Component for a form to input a location for weather information.
 * @param {Object} props - Component props.
 * @param {Function} props.getWeather - Function to get weather data for the entered location.
 * @returns {JSX.Element} - Rendered weather form component.
 */
const WeatherForm = ({ getWeather }) => {
  // State to hold the input location value
  const [location, setLocation] = useState("");

  /**
   * Function to handle form submission.
   * Calls the getWeather function with the entered location and resets the input field.
   * @param {Object} e - Form submission event.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    getWeather(location);
    setLocation("");
  };

  // Render the weather form component
  return (
    <form onSubmit={handleSubmit} className="weather-form">
      {/* Input field for location */}
      <input
        type="text"
        placeholder="Enter city"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="weather-input"
      />
      {/* Button to submit form */}
      <button type="submit" className="weather-button">
        Get Weather
      </button>
    </form>
  );
};

export default WeatherForm;