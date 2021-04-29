# _WatcherList_ TV Shows Tracker

This application allows users to easily search for and track their TV shows and watched episodes. Detailed information about each show (e.g. status, network, country) can be seen from each show's detailed information page. Episodes information can be overviewed as a list, as well as expanded to show a promotional image and episode summary.

Project is live [here](https://kuosandys.github.io/watcherlist/):zap:

## Features

"Try it Out": Users have the option to try out the app's full functionalities as a guest user. The information is stored in session storage to persist for the current browser session. Their profile will be initialized with a few select TV shows that they can then add/delete as they wish. They can also edit their username to customize the welcome message.

"Sign Up": When users are ready to sign up, they can do so easily using their email. The shows and episodes that they have marked will automatically be stored in their new account, so they will not have to re-add them.

## Built With

- This application is built with React and bootstrapped with create-react-app, with a few extra scripts added to facilitate development and deployment.
- React Router DOM handles the routing on the frontend that is dynamically created as users search for and edit the TV shows they track.
- Session storage is used to store user data while they browse the site as a guest.
- Firebase is used for user sign-up and authentication; Firestore is used to store user data after account creation.
- All information for TV shows are fetched from [TVmaze's](https://www.tvmaze.com/api) database API. All flag icons are fetched from [Country Flags](https://www.countryflags.io/).
- UI is styled with Tailwind CSS and uses PostCSS for pre-processing with the autoprefixer module.

## Installation

The usual commands from create-react-app are used to initialize the app. Run `npm install` after forking to install node modules, then `npm start` to launch the live server. Please note that API keys for Firebase are not supplied with this repository, so you will have to set up your own in a .env file.

Deploying to GitHub pages is supported, and can be accomplished by creating a production build with `npm run build` followed by `npm run deploy`. Please note that this deploys the application to the base URL specified in package.json's homepage key.
