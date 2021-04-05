# Getting Started with Create React App

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

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

Question 1.

Aequilibrium is in the business of building castles (we really aren’t, but let’s pretend). Now, we also
believe in quality aesthetics, so we only want to build castles in two types of places:
a. Peaks
b. Valleys
Let’s say you have an array of integers that describes a stretch of land, where each integer represents the
current height of the land. Can you write a function that reads that array and returns the number of
castles that Aequilibrium should build on that stretch of land? You can write this solution in whatever
language you like and provide a way to test it.
You can make the following assumptions:
● You can always build a castle at the start of the array, provided it is non-empty
● You can always build a castle at the end of the array, provided it is non-empty
● We only want to build one castle per peak or valley.
● A peak is an integer or series of integers that is above the immediately preceding and following
ints. For example, in the sequence [2,6,6,6,3] the sequence of three 6s is a peak.
● A valley is an integer or series of integers that is below the immediately preceding and
following ints. For example, in the sequence [6,1,4] the "1" would be a valley.

Question 2.

Aequilibrium does love transforming… people, lives, teams, companies. And there’s no better
representation of transformation than Hasbro’s Transformers, the classic television series featuring
heroic Autobots raging their battle to destroy the evil forces of the Deceptions.
Please watch this video: https://www.youtube.com/watch?v=nLS2N9mHWaw
The Transformers are at war and you are in charge of settling the score! For this part of the assignment
please build a web application that evaluates who wins a fight between the Autobots and the
Decepticons. You have the option to use any modern web framework. The input data can be static, there
is no need to persist any data or provide any back-end services. However, we will be testing the solution
against multiple use cases besides the basic example. Please include instructions on how to run and use
your solution.
Here are the rules of a battle:
Each Transformer has the following criteria on their tech spec (see this for an example):
● Strength
● Intelligence
● Speed
● Endurance
● Rank
● Courage
● Firepower
● Skill
All of these criteria are ranked from 1 to 10.
The “Overall Rating” of a Transformer is the following formula:
Strength + Intelligence + Speed + Endurance + Firepower
Each Transformer must either be an Autobot or a Deception.
Your program should take the input that describes a group of Transformers and based on that group
displays:
a. The number of battles
b. The winning team
c. The surviving members of the losing team
The basic rules of the battle are:
● The teams should be sorted by rank and faced off one on one against each other in order to
determine a victor, the loser is eliminated
● A battle between opponents uses the following rules:
○ If any fighter is down 4 or more points of courage and 3 or more points of strength
compared to their opponent, the opponent automatically wins the face-off regardless of
overall rating (opponent has run away)
○ Otherwise, if one of the fighters is 3 or more points of skill above their opponent, they win
the fight regardless of the overall rating
○ The winner is the Transformer with the highest overall rating
● In the event of a tie, both Transformers are considered destroyed
● Any Transformers who don’t have a fight are skipped (i.e. if it’s a team of 2 vs. a team of 1, there’s
only going to be one battle)
● The team who eliminated the largest number of the opposing team is the winner
Special rules:
● Any Transformer named Optimus Prime or Predaking wins his fight automatically regardless of
any other criteria
● In the event, either of the above face each other, or a duplicate of each other, the game
immediately ends with all competitors destroyed
Example:
Given the following input: The output should be:
Soundwave, D, 8,9,2,6,7,5,6,10
Bluestreak, A, 6,6,7,9,5,2,9,7
Hubcap: A, 4,4,4,4,4,4,4,4
O/P
1 battle
Winning team (Decepticons): Soundwave
Survivors from the losing team (Autobots):
Hubcap
