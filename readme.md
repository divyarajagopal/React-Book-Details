This code retrieves book details data from remote url and parses json to display information on the page.
[URL](https://my-json-server.typicode.com/0plus1/CodingChallenge-react/books) which returns the JSON defined in the db.json file at the root of this project.
A Get is used retrieve the data and render the result on the page .
Unit testing in [enzyme].
[axios] for API call.


Using Redux and React router, a new url is created (_/book/{id}_) which will render a single book view.

Clone and run:

npm install
npm start


Run the provided unit tests.

npm run test

