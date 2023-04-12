
# App with Random Cat Fact

This is a simple React app that fetches a random cat fact from the "catfact.ninja" API and displays it on the page. The app has a button to generate a new random fact on demand.
## Installation

   To run this app on your local machine, follow these steps:

    1. Clone this repository or download the source code as a zip file.
    2. Navigate to the root directory of the project in your terminal.
    3. Run npm install to install the dependencies.
    4. Run npm start to start the development server.
    5. Open your browser and go to http://localhost:3000/ to see the app in action.


 


    
## Usage/Examples

The app uses Axios to make a GET request to the "https://catfact.ninja/fact" endpoint. Once the response is received, the fact is set in the component state using the useState hook. The useEffect hook is used to fetch a random cat fact when the component mounts for the first time.

The app renders a button that triggers the fetchCatFact function when clicked. The function sends a GET request to the API endpoint and sets the new cat fact in the component state. The new fact is automatically rendered on the page.


## Dependencies

This app uses the following dependencies:

Axios
React


## Contributing

Contributions are welcome! Please create an issue or pull request if you want to contribute to this project.


## License

This project is licensed under the MIT License.

