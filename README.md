# Movies search app

This is the final project of GeekHubs Academy Bootcamp. It's an app that provides a list of popular, top-rated and upcoming films, and allows users to search for movies and save them in a list.

## Technologies

- ReactJS
- SCSS
- Redux Toolkit
- npm
- Axios / Custom API

## Description

![](src/media/animation.gif)

This app has the following functionalities:
  1. Display popular, top-rated and upcoming movies in separate carousels
  2. Search for movies by names
  3. Add movies to list and remove them

When the app loads it sends the ajax request to [The Movie Database](https://www.themoviedb.org/) and so that the above mentioned carousels render. When user types in in the search bar the app sends request on each new entry.

## Problems that I faced during the development

When I implemented the redux I discoved that the lists of carousels were the same. In order to fix this bug, I had to restructure Home and MoviesCarousel components, as well as refactoring the function that was sending the ajax request to the api.
 
