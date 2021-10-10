# Weather App

This application was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). 
Please scroll to [Go to Getting Started section](#getting-started-with-create-react-app) 
for setup tutorial or run:
```
yarn install
yarn start
```

### Application Structure
`app` - application constants, configuration, styles

`components` - components used throughout the app

`features` - main application features,
separated by folders (candidates for routes)

`hooks` - hooks used throughout the app

### React Global State

This application doesn't use a global state management like `redux`, instead it uses [React Query](https://react-query.tanstack.com) 
for caching and requesting api responses. 

### HTTP Proxy 
Application proxies the api requests through a Heroku Express server. 
Should you experience any problems with connectivity, 
check if the proxy is working.
```
https://weather-proxy-api.herokuapp.com/home
```

### CI/CD

For now, the application is deployed using
[gh-pages](https://pages.github.com/). 

```
yarn run deploy
```


## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
