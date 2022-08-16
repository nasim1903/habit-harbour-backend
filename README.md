# habit-harbour-backend


## Routes

### GET request
- `/` - Welcome message
- `/dashboard` - Returns all users with all information
- `/dashboard/:username` - Returns one user with all information
- `/dashboard/:username/water/target` - Returns one user water intake target as a `string`
- `/dashboard/:username/water/days` - Returns one user's desired frequency for tracking water intake as a `number`

### POST requests
- `/register` - user can register. Accepted format: {
                                       "username": "admin8",
                                       "password" : "password8"
                                   }
- `/login` - user can login. Accepted format same as above
- `/dashboard/:username/water/target` - user can add water intake target. Accepted format: 
```
{
"username": "admin8",
"target" : "3 litres per day"
}
```
- `/dashboard/:username/water/day` - user can update frequency for tracking it Default value is 1. Accepted format: 
```
{
"username": "admin3",
"days" : 5
}
```

# LAP 2 Portfolio Week Project
You will be working in small teams to create a habit tracker.

## Requirements
#### Your website should have the following functionality for users:
- Users should be able to login
- Users should be able to choose a habit they want to track (e.g water, exercise, 8 hours of sleep) and choose the frequency at which they want to track the habit
- Users should be able to track a habit and mark it as complete for the day
- Users should be able to see if they have completed a habit for the day and see their most recent completion streak

#### Your project should meet the following technical requirements:
- Data should be persisted in a database
- Minimum 60% test coverage with an aim of 80%
- Your codebase should primarily feature the technologies we have covered so far on the course

## Presentation
- Prepare a 10 minute presentation covering the following topics:
    - Purpose of App
    - Planning & Delivery
    - Technologies and Code
    - Challenges and Solutions
    - Significant Code / Code you are proud of (include snippets!)
    - Test Coverage
    - Future Features & What We've Learned 
    - Live Demonstration
- There will be a 5 minute opportunity for Q&A after each presentation

***See our [Presentation Guide](https://gist.github.com/getfutureproof-admin/8858ae4a2e9ef624422b0ed502d9332d) for tips*** 

## Timeline
- Monday - Wednesday: Focus on functionality and features.
- Wednesday 6pm: Feature freeze.
This means that no new feature can be started. Existing features can be finished, refactored or fixed.
- Thursday: Designated for debugging, styling, extending test coverage.
- Friday: All code to be halted. Merge to master by midday and prepare for presentations. All teams will have small-group retro with an instructor during the day so make sure to manage your presentation prep time around this.
- Friday 3PM: Presentations

## Code of Conduct
- See our [projects guide](https://gist.github.com/getfutureproof-admin/fbbefeccf62cb3e120adae8d20a2ac56)
