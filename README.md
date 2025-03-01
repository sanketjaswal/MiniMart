#  Mini Mart

### Overview

The **Mini Mart** is a full-stack project using React, Node.js, and MongoDB. It allows customers to browse products, add them to a cart, and send queries to the admin. Admins can manage the product catalog by adding or removing products. The app features a user-friendly UI/UX and secure JWT authentication.

## Application Link

<!-- [https://book-surf.onrender.com/](https://book-surf.onrender.com/) -->

## Features

<!-- - **Recommendations**: Users receive book suggestions based on genres, authors.
- **RESTful API**: Endpoints for handling book data and recommendations.
- **MongoDB Database**: Stores book details and optionally user preferences.
- **Genre DropDown**: Search books based on genre.
- **Author Search**: Search Books based on Authors.
- **Responsive Design**: The layout adapts seamlessly to different screen sizes.
- **Animations**: Soothing Animations for Application using Javascript. -->

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
MONGO_URI=your_mongo_connection_string
PORT=5000
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

- **Frontend** : React.js
- **Backend** : Node.js, Express.js, MongoDB
- **Database** : MongoDB
<!-- - **Hosting** : Render -->

## Code Structure

```shell
book_recommender/
│-- backend/
│   ├── src/
│   │   ├── models/
│   │   │  
│   │   ├── controllers/
│   │   │   
│   │   ├── routes/
│   │   │  
│   │   ├── server.js
│
│-- frontend/
│   ├── src/
│   │   ├── components/
│   │   │ 
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   ├── App.js
│
│-- README.md
```


# Conclusion

Mini Mart provides a seamless shopping experience for customers and good insight to interviewers.

Happy Shopping !!
