# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# Feautures Included In The Project
* React Hooks were used along with React Router for achieving an SPA (Single Page Application), to dynamically load 2 different pages used in the project.
* Axios used for API fetching to make GET and POST request to imgFlip API (https://imgflip.com/api).
* Material UI for styling.
* New UI techniques applied were:
** Responsive View - homepage utilises responsive grid and edit meme page has the form in responsive view.
** Pagination - to shorten the length of the page and split different memes on 10 different conceptual pages.
** Lazy loading - to lessen the client side loading of resources, npm module 'react-lazyload' is implemented.
** Breadcrumbs - on the top of a meme edit page to navigate back to the homepage.
** Fade - transitioning of the memes on homepage, in respect of the pagination used (one on top and one in bottom of the page).
** Deployed project using Netlify through continuous deployment from GitHub repository's main branch, while securely entering the environment variables.

# Page Routes
* Home Page: / - homepage where all memes are fetched using the GET request on https://api.imgflip.com/get_memes
* Edit Meme Page: /:id/:text_boxes - dynamically rendered url for any meme to be created. text_boxes param is used to dynamically render the number of text fields required for a particular meme. On submission of the form POST request on https://api.imgflip.com/caption_image returns the meme desired with the changes applied.

## Screenshots
