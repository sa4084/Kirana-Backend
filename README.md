# Kirana
## This is Kirana-Backend.
## Kirana Backend is here [https://github.com/sa4084/Kirana-Frontend](https://github.com/sa4084/Kirana-Frontend)
Kirana is a fully functional ecommerce web application built with the MERN stack <b>(MongoDB, Express.js, React.js, Node.js) + Firebase Authentication + Stripe for Payments </b>. It offers a wide range of food items and grocery products for sale. The application utilizes Firebase Authentication for user login and registration, ensuring a secure and seamless user experience. The frontend is developed using React.js and Material UI, providing an appealing and user-friendly interface. The backend is powered by Node.js, enabling efficient server-side processing and handling API requests. MongoDB is chosen as the database for its flexibility and scalability, offering a NoSQL approach to data storage. Stripe is integrated into the application to handle secure payment transactions, ensuring a smooth checkout process.

## Demo

Check out the [demo video](https://www.youtube.com/watch?v=JmcUtjzPaSQ) to get a visual overview of the Kirana web app.

## Prerequisites

Before running the application locally, make sure you have the following dependencies installed:

- Node.js: v14.x or higher
- MongoDB: Make sure you have MongoDB set up locally or have a MongoDB Atlas account

## Running the React.js Frontend Locally

To run the React.js frontend of the Kirana application locally, follow these steps:

1. Clone the repository:

   ```
   git clone <repository-url>
Navigate to the frontend directory:


cd frontend
Install the dependencies:


npm install
Set up environment variables:

Create a .env file in the root of the frontend directory.

Add the following environment variables and provide their respective values:

makefile

REACT_APP_FIREBASE_API_KEY=<your-firebase-api-key>
REACT_APP_FIREBASE_AUTH_DOMAIN=<your-firebase-auth-domain>
REACT_APP_FIREBASE_PROJECT_ID=<your-firebase-project-id>
REACT_APP_FIREBASE_STORAGE_BUCKET=<your-firebase-storage-bucket>
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=<your-firebase-messaging-sender-id>
REACT_APP_FIREBASE_APP_ID=<your-firebase-app-id>
REACT_APP_STRIPE_PUBLIC_KEY=<your-stripe-public-key>
REACT_APP_BACKEND_URL=<your-backend-url>
Start the local development server:



npm start
Open your web browser and visit http://localhost:3000 to see the Kirana application running locally.

## Running the Node.js Backend Locally
To run the Node.js backend of the Kirana application locally, follow these steps:

Clone the repository:



git clone <repository-url>
Navigate to the backend directory:



cd backend
Install the dependencies:



npm install
Set up environment variables:

Create a .env file in the root of the backend directory.

Add the following environment variables and provide their respective values:

makefile

PORT=<port-number>
MONGODB_URI=<mongodb-uri>
STRIPE_SECRET_KEY=<your-stripe-secret-key>
Start the Node.js server:



npm start
The backend server will start running on the specified port.

Congratulations! You have successfully set up and launched the Kirana web application locally. Enjoy exploring its features and functionalities.

## Why MongoDB over Traditional SQL?
Here are the reasons why I chose MongoDB as the database for the Kirana application over traditional SQL databases:

Flexible Schema: MongoDB offers a flexible schema design, allowing easy modification of the data structure without downtime or migrations. This is particularly useful in ecommerce applications where product catalogs may change frequently.

Scalability: MongoDB is horizontally scalable, meaning it can handle large amounts of data and traffic by distributing it across multiple servers. This scalability is crucial for accommodating the potential growth of an ecommerce application.

Performance: MongoDB's document-based model provides fast read and write operations, making it suitable for high-throughput applications like ecommerce. It also supports indexing and aggregation, further enhancing performance.

Developer Productivity: MongoDB's JSON-like documents align well with JavaScript, making it a natural choice for Node.js development. The document-oriented nature of MongoDB allows developers to work with data in a way that is familiar and comfortable.

### Please note that you may need to replace `<repository-url>` and fill in the appropriate values for environment variables, such as `<your-firebase-api-key>`, `<your-stripe-public-key>`, `<your-backend-url>`, `<port-number>`, `<mongodb-uri>`, and `<your-stripe-secret-key>` based on your specific configuration.
