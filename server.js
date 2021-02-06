// Server side code

// Require Express (which we've already installed on the command line) to run server and routes
const express = require('express');

// Instantiate (create) an instance of the app , with express
const app = express();

// Dependencies
const bodyParser = require('body-parser');

/* Middleware */ 
// Connect the packages (that were installed on the command line) to the app in the code with the .use() method:
// Here we are configuring express (with the variable app defined above) to use body-parser as middle-ware so that we can parse our data
app.use(bodyParser.urlencoded({ extended: false })); // Here we tell bodyParser exactly how we want our data to be parsed
app.use(bodyParser.json()); // Here we mostly want JSON

// Cors for cross origin allowance
const cors = require('cors'); // Require Cors (which we've already installed on the command line) which let's the browser and server talk to each other without any security interruptions
app.use(cors());

// Initialize the main project folder
// This code connects our server-side code (the code in this file) to our client-side code (the browser code written in the files scripts folder)
app.use(express.static('scripts')); // We use our 'use' method and this time, we're pointing our app to the folder that we want it to look at

// **************** Setup Server ******************
// Map URL's to functions
const port = 3000; // Set the port

const server = app.listen(port, listening); // Call the listen method and pass it the callback function

function listening() {
	console.log(`server running on local host: ${port}`);
}

// **************** Setup Express route ****************** 
