## About Project
This project is submitted as part of a senior engineer screening for CloudFactory. The app is a proof of concept 

## Features

-   It shares one WebSocket connection with multiple component instances tabs. No matter how many, there will always be only one connection.
-   It uses at most 2 WebWorkers, one for every currently displayed product.
-   Component updates are throttled no matter the message frequency from the WebSocket
-   Fully responsive

## Performance

**Memory usage in time**
![memory usage](https://i.ibb.co/qjhL4qQ/Screenshot-2021-07-04-at-14-15-51.png)

Absolutely stable

**Firefox Profiler**
![Firefox profiler](https://i.ibb.co/DK87DW7/Screenshot-2021-07-04-at-14-08-36.png)

Very lightweight on the CPU

**React Profiler**
![react profiler](https://i.ibb.co/hcQ4FCc/Screenshot-2021-07-04-at-14-20-05.png)



## Quick start

To run this locally:

1. run `git clone https://github.com/Mindo-Joseph/OrderBook.git`

2. Install all dependencies using `yarn` or `npm install`

3. Start the development server using `yarn start` or `npm run start`

4. Open up [http://localhost:8080](http://localhost:8080)
