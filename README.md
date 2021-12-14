## About Project
This project is submitted as part of a senior engineer screening for CloudFactory. The app is a proof of concept 

## Features

-   It shares one WebSocket connection with multiple component instances tabs. No matter how many, there will always be only one connection.
-   It uses at most 2 WebWorkers, one for every currently displayed product.
-   Component updates are throttled no matter the message frequency from the WebSocket
-   Fully responsive





## Quick start

To run this locally:

1. run `git clone https://github.com/Mindo-Joseph/OrderBook.git`

2. Install all dependencies using `yarn` or `npm install`

3. Start the development server using `yarn start` or `npm run start`

4. Open up [http://localhost:8080](http://localhost:8080)
