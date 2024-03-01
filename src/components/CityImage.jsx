import { useState, useEffect } from "react";

/**
 * Component that fetches and displays a random image of a city using the Unsplash API.
 * @param {Object} props - Component props.
 * @param {string} props.city - The name of the city for which to fetch an image.
 * @returns {JSX.Element} - Rendered component with city image.
 */
const CityImage = ({ city }) => {
  // State to hold the URL of the fetched image
  const [imageUrl, setImageUrl] = useState("");

  // Style for the city image
  const imageStyle = {
    width: "100%",
    height: "51.9em",
    objectFit: "cover",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  };

  // Effect hook to fetch the image when the city prop changes
  useEffect(() => {
    /**
     * Function to fetch a random image of the city using the Unsplash API.
     * @returns {void}
     */
    const fetchImage = async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/photos/random?query=${city}&client_id=ojK9CwxzamZTjjzhu_qzC2vkq6-KM1S11dbIsnVFj2A`
        );
        const data = await response.json();
        setImageUrl(data.urls.regular);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    // Call the fetchImage function when the city prop changes
    fetchImage();
  }, [city]);

  // Render the component with the city image if imageUrl is available
  return (
    <div style={{ maxWidth: "100%" }}>
      {imageUrl && <img src="src\components\cairo.png" alt={city} style={imageStyle} />}
    </div>
  );
};

export default CityImage;
