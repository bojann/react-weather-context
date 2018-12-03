This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## IMPORTANT NOTES:

### `API key for requests will be canceled in a few days`

App is missing next:
- Error handling by Error Boundaries , check on next link about it  https://reactjs.org/docs/error-boundaries.html
- Routing that would make selected elements open in next "page" with more detailed description<br>
 Planned to implement Reach-router, link https://reach.tech/router
- App not fully responsive 
- button hourrly not working
- clicking on the any of the offered days will not do anything

### `Thought process`
I wanted that App uses context for communitation between components such as main parent component and children containing detailed hourly information about the weather. By using router I would devide screen into MAIN(Dashboard) and HOURLY. As my future private plan for this APP I will add requests for few other popular weather portals that have API and will sum their result and show the most common weathercast. Also I wanted that user doesn't get too much of information of first sight because at the end, a common user wants to know 2 most important things about the day:  temperature and if it will be Sunny or not. In case of travelers they will can see graphic with some plan week changes.
For CSS coding style I was directed more into BEM methodoligy. Even though this is a small project, I think that good habbits are good if used all of the time, or at least the most of the time.
In case of tests I would add in future Unit test and possible Integration test. All with Jest and Enzyme.

## Available Scripts

In the project directory, you can run:

### `npm format`
App uses from package "prettier" that formats whole app.

### `npm lint`

App uses es-lint and if you want to run it manually use 'nom lint'


### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
Test's are not yet implemented to this project.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
