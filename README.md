##Proposal

- What problem does your app solve?

Our app, UNBOUND, seeks to connect currently incarcerated individuals in prison workforce development programs, to employers seeking to leverage their skills both in a remote capacity and onsite.  

- Be as specific as possible; how does your app solve the problem?
Our app provides prisons with the ability to post talent profiles and for employers to search them and make hiring offers--it is very much a niche job board.

- What is the mission statement?
Connecting talented inmates with hiring companies.

##Features

- What features are required for your minimum viable product?
  ## MVP Features Breakdown:

###Two User Stories:
1. Prison Admin
..Can log in
2.Employer or Other General User
..Can view posted profiles by prison

###Pages:
1)Home Page 
..No need to log in. 
..Contains a list of prisons who have posted prisoner profiles. 
..Each prison is laid out in a grid format, name of the prison, number of people available to work (total number of entries a given prison admin has submitted), location of the prison
..Clicking on a prison takes you to the prisoner profile page

2) Prisoner Profile Page
..Accessed from the home page
..non-logged in users can view the list of profiles created by the prison they clicked on

3) Single Profile Page
..Users can click on a single post to read more of the description

4) Prison Admin Home Page 
..Prison Log-In
..Directed to a page where they can see the people’s profiles they’ve created in a list view, and have options to create a new one
..Allow a prison to create a profile 
..Should include 
..Name
..availability (permissions to work in prison only or able to have work leave)
..List of skills and/or previous work experience. 
..The profile can be edited and deleted after creation.
..and add it to the list of prisons on the general home page. 


5) Navigation
Navigation is present on all pages
Users should know what page is active by clicking on a nav link and activating their tab

- What features may you wish to put in a future release?
The ability for employers to post roles or the ability for employers to give an anonymous job performance score. A 'logout' feature and a hiring notification.

- What do the top 3 similar apps do for their users?
https://www.jailstojobs.org/
https://www.careeronestop.org/ExOffender/default.aspx
various state, county and private initiatives

##Frameworks - Libraries

- What 3rd party frameworks/libraries are you considering using?
React, Google Fonts, Semantic UI React, Formik 
- Do APIs require you to contact its maintainer to gain access?
No.
- Are you required to pay to use the API?
Np.
- Have you considered using Apple Frameworks? (MapKit, Healthkit, ARKit?)
No.

##Target Audience

- Who is your target audience? Be specific.
Employers and prison workforce development programs 

- What feedback have you gotten from potential users?
N/A
- Have you validated the problem and your solution with your target audience? How?
Through published research documents such as: https://www.naco.org/resources/second-chances-safer-counties-workforce-development-and-reentry



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

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

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
