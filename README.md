# weather-app

Weather Application

## Table of Contents

- [General Info](#general-info)
- [Technologies](#technologies)
- [Project Takeaways](#project-takeaways)
- [Other Notes](#other-notes)

## General Info

The "Weather App" project brief can be found on
[The Odin Project's website](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/weather-app#assignment)

The repo is hosted [here](https://github.com/danranges/weather-app)

The live demo can be found [here](https://danranges.github.io/weather-app/)

## Technologies

- HTML
- CSS
- Javascript
- ES6 Modules
- async/await
- OpenWeather API
- date-fns
- Webpack

## Project Takeaways

- Using an API to pull data from a remote source
- Using and managing asynchronous javascript

## Other Notes

The OpenWeather API is an excellent source for weather data. It can be a little finicky given that
current weather data is searchable by city name, state, etc and their forecast data can only be
queried by coordinates, but a second API call isn't the end of the world.

I also learned that just because something looks synchronous doesn't make it so, as it might depend
on promises resolving elsewhere in the stack.
