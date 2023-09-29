# StockScreener
Stock screener project for Nifty 500 stock realtime prices and other details<br></br>
To use this project locally, you'll need to follow these steps. This project appears to be a web application built using Express.js for the server-side and React for the client-side. It fetches stock price and news data from external APIs and displays them on different routes. Here's how you can set it up and run it locally:

Prerequisites:

Node.js installed on your machine.
A code editor (e.g., Visual Studio Code).
Instructions:

1. Clone the Project:

Open your terminal or command prompt.
Navigate to the directory where you want to store the project.
Run the following command to clone the project from GitHub:
git clone <repository-url>

2. Install Dependencies:

Navigate to the project directory using your terminal:
cd project-directory
Inside the project directory, you'll find two folders: client and server. You'll need to install dependencies separately for both the client and server.

Server:

Navigate to the server directory:
cd server

Install server dependencies by running:
npm install

Client:

Navigate to the client directory:
cd client

Install client dependencies by running:
npm install

3. Configure API Keys:

In the server code (server.js), you'll notice that it's using external APIs that require API keys. Replace the placeholder API keys with your own API keys:
Replace 'X-RapidAPI-Key': 'YOUR-RAPIDAPI-KEY' with your RapidAPI key.
Replace 'apiKey=YOUR-NEWSAPI-KEY' with your NewsAPI key.
4. Start the Server:

Go back to the server directory:
cd ../server

Start the Express.js server by running:
npm start

The server will start on port 3000, and you should see the message "Server started on port 3000" in your terminal.

5. Start the Client:

Open a new terminal window (keeping the server running in the previous terminal).
Navigate to the client directory:
cd ../client

Start the React client by running:
npm start

This will start the development server for the React app, and it should open a new browser window with your app running. If not, you can access it at http://localhost:3000.
6. Explore the App:

You can now explore the application by visiting different routes:
Home: http://localhost:3000/
Single Stock: http://localhost:3000/ss
Explore: http://localhost:3000/explore
Top Ten: http://localhost:3000/topten
Help: http://localhost:3000/help
7. Interact with the App:

Depending on the functionality of the app, you can use it to view stock prices, explore stock data, read top news articles, and more.
That's it! You've successfully set up and run this project locally. You can now use and interact with the web application on your local machine. If you encounter any issues, double-check your API keys and make sure all dependencies are installed correctly.
