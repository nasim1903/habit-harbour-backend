# Habit Harbour - backend

## Installation & Usage

### Installation

Installation is not required as this app has been deployed. If you'd like to use this app, please click [here](https://habit-harbour.netlify.app/).
If you want to have a closer look at the backend structure, please follow the next steps:

- Clone the repo and enter the root directory `cd habit-harbour-backend`

### Usage

Please note that you cannot use the app on your local machine as it needs environment variables.

## Routes

All routes starting with `/dashboard` are accessible for logged-in users only.

### GET requests

- `/` - Welcome message

- `/dashboard` - Returns all users with all information (For testing purposes only)

- `/dashboard/:username` - Returns one user with all information

- `/dashboard/:username/habits` - Returns one user's habits information

### POST requests
- `/register` - The user can register.
<!-- Accepted `req.body` format: 
```
{
    "username" : "admin8",
    "password" : "password8"
}
``` -->
- `/login` - The user can log in. 
<!-- Accepted format same as above -->
- `/dashboard/:username/habits` - The user can add and update habits.
<!-- Accepted format: 
```
{
    "username" : "admin3",
    "habit" : "exercise",
    "target" : "60 minutes per day",
    "days" : 4
}
``` -->
- `/dashboard/:username/habits/increment-streak` - When the user clicks on the "Target completed!" button, the actual habit streak gets incremented by one and the "Completed" button becomes disabled.
<!-- Accepted format: 
```
{
    "username" : "admin3",
    "habit" : "exercise",
    "completed": true
}
``` -->

## Tests

- [Jest](https://jestjs.io/) and [Supertest](https://www.npmjs.com/package/supertest) used for testing
- Run `npm run test` 
- Run `npm run cov` for coverage

## Wins and Challenges

### Wins

- Fully functional app
- Smooth data flow from frontend to database and vice versa
- Decent test coverage
- Deployed to [Heroku](https://heroku.com)
- Database stored at [MongoDB Atlas](https://www.mongodb.com/atlas/database)

### Challenges

- Setup MongoDB Atlas
- Handling NoSQL data format  
- Make 'Target completed!' button work appropriately.
- Match the flowing data format between frontend and backend
