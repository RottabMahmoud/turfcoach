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
    e.preventDefault(); // Prevents default form submission behavior
    if (!location) {
      // If location is empty, show an alert
      alert("Please Enter a City Name");
    } else {
      // Call the getWeather function with the entered location
      getWeather(location);
      // Reset the input field after form submission
      setLocation("");
    }
  };

  // Render the weather form component
  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center mt-8"
    >
      {/* Input field for location */}
      <input
        type="text"
        placeholder="Enter city"
        value={location}
        onChange={(e) => setLocation(e.target.value)} // Update location state on input change
        className="border border-gray-300 rounded-md px-4 py-2 mr-2 focus:outline-none focus:border-blue-500"
      />
      {/* Button to submit form */}
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Get Weather
      </button>
    </form>
  );
};

export default WeatherForm;
