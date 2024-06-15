---
title: Blog Backend

---

# Blog Backend

This project provides the backend API for a simple blogging application.

## Features

- **Authentication**: Uses JWT for user authentication and authorization.
- **CRUD Operations**: Supports Create, Read, Update, and Delete operations for blog posts and comments.
- **Pagination**: APIs support pagination for listing blog posts and comments.
- **Data Validation**: Input data is validated using Joi.
- **Error Handling**: Centralized error handling and consistent error responses.
- **Security**: Uses bcrypt for hashing passwords and preventing common security pitfalls.
- **Database**: MongoDB is used as the database to store blog posts and comments.
- **Logging**: Logs important events and errors using Winston.
- **Testing**: Unit tests are written using Jest and Supertest.

## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB installed and running.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/shubhampatil871/Blog-Backend.git
   cd Blog-Backend

2. Install dependencies:

    ```bash
    Copy code
    npm install

3. Set environment variables:

Create a .env file in the root directory and add the following:

    ```bash 
    Copy code
    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/blog
    JWT_SECRET=mysecretkey
Modify MONGODB_URI and JWT_SECRET as per your configuration.

Run the server:

    ```bash
    Copy code
    npm start
The server should now be running on http://localhost:3000.

## API Documentation
The API documentation can be found in the API Documentation file.

Running Tests
To run tests, use the following command:

    
    Copy code
    npm test
    
This will run all the unit tests using Jest.

### Contributing
Contributions are welcome! Please feel free to fork the repository and submit pull requests.

### License
This project is licensed under the MIT License - see the LICENSE file for details.