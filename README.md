# Express JSON DB

This is a Node.js application that demonstrates a simple JSON-based database using Express.

## Installation

To install and run the application locally, follow these steps:

1. Navigate to the project directory:

2. Clone the repository using the following command:

        git clone https://github.com/lucasfrmr/expressJsonDB.git

4. Install the dependencies using npm:

        npm i

The default port is 9000. Ajust as needed.

API Endpoints
 
    POST /api/data: Sends a POST request to increment a counter in the JSON file.
    GET /api/data: Sends a GET request to retrieve the data from the JSON file.



The main files and directories in this project are:

    ├── app.mjs
    
    ├── data.json
    
    ├── index.html
    
    ├── package.json
    
    ├── package-lock.json
    
    └── public/
    
      └── styles.css

- app.mjs: The main file containing the Express application logic.

- data.json: The JSON file acting as a simple database.

- index.html: An example HTML file served by the application.

- public/: A directory containing static files such as CSS stylesheets.

Feel free to modify and extend this application as needed.

License
This project is licensed under the ISC License. See the LICENSE file for more information.
