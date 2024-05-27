**Photo Website - Backend API**
This is the backend API repository for a photo website built with Node.js and Express.

**Description**:

This API provides the foundation for the photo website, handling user authentication for now but more functionalities will be added such as, album management, photo management, authorization and routes protection as the project evolves.

**Features**:

**The API leverages several key libraries**:

**Express**: A popular Node.js framework for building web applications and APIs.
**Mongoose**: An ODM (Object Data Modeling) library that simplifies interaction with MongoDB databases.
**bcryptjs**: For secure password hashing and comparison.
**jsonwebtoken (JWT)**: For issuing and verifying tokens for user authentication.
**cors**: For enabling Cross-Origin Resource Sharing (CORS) to allow communication between frontend and backend running on different origins (e.g., ports).
**dotenv**: For managing environment variables securely (not included in code, but likely used for configuration).

**Getting Started**:

**Clone the repository**:  Clone this repository to your local machine.

**Install dependencies**:  Run npm install in the project directory to install all required dependencies.

**Environment Variables**:  Create a .env file in the project root directory to store sensitive information like database connection strings or secret keys (not included in version control).  Refer to the documentation of dotenv for configuration details.

**Start the Server**:  Run npm run start to launch the backend API server.  This will typically start the server on port 5000.

**Development Mode (Optional)**:  Run npm run dev to start the server with Nodemon, which automatically restarts the server whenever you make changes to the codebase
