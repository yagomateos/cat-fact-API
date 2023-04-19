// Import the CSS styles and necessary libraries
import './App.css';
import Axios from "axios";
import { useEffect, useState } from 'react';

// Define the functional component "App"
function App() {
  // Initialize the state variable "catFact"
  const [catFact, setCatFact] = useState("");

  // Define the function that will fetch the cat fact from the API
  const fetchCatFact = () => {
    // Use Axios to send a GET request to the catfact.ninja API
    Axios.get("https://catfact.ninja/fact").then((res) => {
      // Update the "catFact" state variable with the fetched cat fact
      setCatFact(res.data.fact);
    });
  }

  // Use the useEffect hook to fetch a cat fact on component mount
  useEffect(() => {
    fetchCatFact();
  }, []);

  // Render the component's UI
  return (
    <div className="App">
      {/* Add a button that triggers the "fetchCatFact" function when clicked */}
      <button onClick={fetchCatFact}> Generate Cat Fact</button>
      {/* Display the fetched "catFact" state variable */}
      <p>{catFact}</p>
    </div>
  );
}

// Export the "App" component as the default export of this module
export default App;
