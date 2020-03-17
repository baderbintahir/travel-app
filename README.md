# Project Instructions

This project is based on three different third party APIs. First we user Geoname API for getting coordinates of a place, then we use Dark Sky API to get weather information and at the end we use Pixabay API to get the picture of the place.

Our project is a Travel App. The user enters the destination, departure date and returning date. Then this project shows a box in which the picture of the destination, departure date, return date, duration of the trip, the number of days the trip is going to start, High/Low temperature and weather summary of the destination.

## Getting started

`cd` into your project folder and run:
- `npm install`

Now you can use 'np run build-dev' to start the development server and 'npm run build.prod' to build the production version of the app to run from 'npm run start' command.
Now after the production, a new folder named 'dist' would be created and the server will open the html file present in it to show you the output.

## Setting up and using the API

We used the links along with the peremeters to get the result from the APIs. From the input field, we get the destinationand from the date fileds we get the departure and return date from the user. After that we put the destination as a perimeter to the endpoint we are going to send as a request. Then the Geoname API is gonna send a lot of data. Then we collect the latitude and longitude from the response and send them into the endpoint of the Dark Sky API. 

Now what Dark Sky API is going to do is to get the parameters and return the weather data of the destination. Then we manipulate the DOM and put the High/Low temperature and weather summary from the response of the Dark Sky API.

Now what we are going to do is use Pixabay API to get the picture of the destination and put that along with the other information.

As a result, your trip is ready to go.

## Additional functionalities
- Added end date and displayed length of the trip
- Allowed user to remove the trip
- It allows user to add mulitiple trips