#  Mini Mart - nyuc Tech

### Overview

The **Mini Mart** is a full-stack project using React, Node.js, and MongoDB. It allows customers to browse products, add them to a cart, and send queries to the admin. Admins can manage the product catalog by adding or removing products. The app features a user-friendly UI/UX and secure JWT authentication.

## Application Link

[https://minimart-oa4p.onrender.com/](https://minimart-oa4p.onrender.com/)

## Features

### User Features

- **User Friendly Interface** : Provide a very soothing experience with good animations and features.
- **User Authentication**: Secure login and registration with JWT.
- **Browse Products**: Users can explore a variety of products.
- **Add to Cart**: Seamless addition and removal of products from the cart.
- **Send Queries to Admin**: Users can contact the admin for inquiries or support.
- **Cart Management**: View cart items, adjust quantities, and remove products.
- **Toast Notifications**: Real-time feedback on actions like adding to cart, placing orders, etc.
- **Responsive Design**: A mobile-friendly and adaptive interface.

### Admin Features

- **Admin Authentication** : Secure admin login to access the management panel.
- **Product Management**: Add and remove products from the catalog.
- **Browse Products**: Users can explore a variety of products.
- **Email Notifications**: Automated emails for order confirmations and inquiries.



## Setup Instructions

### 1. Clone the repository

```shell
git clone https://github.com/sanketjaswal/MiniMart.git
cd Book-recommendation
```

### 2. Install dependencies

```shell
cd backend
npm install

cd frontend
npm install
```

### 3. Set Up Environment Variables

```shell
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_JWT_secret
ADMIN_EMAIL=your_admin_email
ADMIN_EMAIL_PASSWORD=your_admin_password
```

### 4. Start the application

```shell
cd backend
npm run dev


cd frontend
npm start
```

This will run the app in development mode in http://localhost:5000.


## Dependencies

Below is a list of dependencies used in the project:

Below is a list of dependencies used in the project:

- **[React](https://www.npmjs.com/package/react)**: Frontend library for building user interfaces.
- **[Node](https://nodejs.org/en)**: JavaScript runtime environment that  create servers, web apps.
- **[Colors](https://www.npmjs.com/package/colors)**:A Library for applying color to terminal output.
- **[jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)**: a way of securely transmitting information between two parties.
- **[MongoDB](https://www.mongodb.com/)**: To store and manage large amounts of data in document-oriented applications.
- **[NodeMailer](https://www.npmjs.com/package/nodemailer)**: Provides API for sending emails through JavaScript.
- **[Toastify](https://www.npmjs.com/package/react-toastify)**: Integration of notifications to your app with ease.
- **[BcryptJS](https://www.npmjs.com/package/bcrypt)**: A library to help you hash passwords.
- **[TypeScript](https://www.npmjs.com/package/typescript)**: For static type checking and enhancing code quality.
- **[Axios](https://www.npmjs.com/search?q=axios)**: For making API requests to retrieve Pokemon data.
- **[React Router](https://www.npmjs.com/package/react-router-dom)**: For client-side routing within the application.
- **[Styled-Components](https://www.npmjs.com/package/styled-components)**: For creating styled React components with scoped CSS.
- **[render.com](https://www.render.com)**: For deploying the application.
- **[Eslint](https://www.npmjs.com/package/eslint)**: ESLint tool used to detects and fixes JavaScript code issues.
- **[Prettier](https://www.npmjs.com/package/prettier)**: For code formatterinf with consistent styling.


## Code Structure

```shell
book_recommender/
│-- backend/               # Backend code  
│   ├── src/               # Source files  
│   │   │ 
│   │   ├── models/        # Database schemas  
│   │   │
│   │   ├── controllers/       # Route handlers  
│   │   │
│   │   ├── config/        # Config files  
│   │   │
│   │   ├── middleware/       # Middleware functions  
│   │   │
│   │   ├── routes/        # API routes  
│   │   │
│   │   ├── server.js      # Server entry point  
│   
│
│-- frontend/              # Frontend code  
│   ├── src/               # Source files  
│   │   │
│   │   ├── components/       # UI components  
│   │   │
│   │   ├── services/       # API calls  
│   │   │
│   │   ├── context/        # State management  
│   │   │
│   │   ├── assets/         # Static files  
│   │   │
│   │   ├── pages/          # Page components  
│   │   │
│   │   ├── App.js          # Main app file  
│
│-- README.md              # Project documentation  

```


# Conclusion

Mini Mart provides a seamless shopping experience for customers and good insight to interviewers.

Happy Shopping !!
