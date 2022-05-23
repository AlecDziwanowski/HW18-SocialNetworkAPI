# 18 NoSQL: Social Network API
## Your Task
Your homework is to build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. You’ll use Express.js for routing, a MongoDB database, and the Mongoose ODM. In addition to using the [Express.js](https://www.npmjs.com/package/express) and [Mongoose](https://www.npmjs.com/package/mongoose) packages, you may also optionally use a JavaScript date library of your choice or the native JavaScript `Date` object to format timestamps.

## User Story
```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria
```md
GIVEN a social network API

WHEN I enter the command to invoke the application
  THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
  THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
  THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
  THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

### Walkthrough Video: 37%
* A walkthrough video that demonstrates the functionality of the social media API must be submitted, and a link to the video should be included in your README file.
  * The walkthrough video must show all of the technical acceptance criteria being met.
  * The walkthrough video must demonstrate how to start the application’s server.
  * The walkthrough video must demonstrate GET routes for all users and all thoughts being tested in Insomnia.
  * The walkthrough video must demonstrate GET routes for a single user and a single thought being tested in Insomnia.
  * The walkthrough video must demonstrate POST, PUT, and DELETE routes for users and thoughts being tested in Insomnia.
  * Walkthrough video must demonstrate POST and DELETE routes for a user’s friend list being tested in Insomnia.
  * Walkthrough video must demonstrate POST and DELETE routes for reactions to thoughts being tested in Insomnia.

## Review
* A walkthrough video demonstrating the functionality of the application and all of the acceptance criteria being met.
* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

## Questions
* use commented code in connection.js instead bc we are not using heroku?
* need a setter in virtual for thoughtSchema and userSchema?
* change format of time in thought and reaction models?
* need `.select('-__v')` or `.lean()` in getSingleUser?
* How to do this?:
  **`/api/thoughts`**
  * `POST` to create a new thought (don't forget to push the created thought's `_id` to the associated user's `thoughts` array field)
* Did I do this?
  **`/api/users`**
  * `GET` a single user by its `_id` and populated thought and friend data
