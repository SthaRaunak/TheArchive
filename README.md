![FYP-the-archive](https://github.com/SthaRaunak/TheArchive/assets/134532133/cd28243e-8365-45d4-9996-42e6e3c11698)



# The Archive - Ecommerce platform

The Archive is a web-based Ecommerce Book Store platform aimed at providing book enthusiasts with a virtual platform to explore, discover, and purchase a wide range of books. The project focuses on creating an intuitive user experience, making it easy for customers to find and purchase their favorite reads from the comfort of their homes.



## Tech Stack

**Client:** React, Redux, TailwindCSS , Formik , Antd 

**Server:** Node, Express , MongoDB and Mongoose , JWT token , Bcrypt , Multer

# Features

#### User Registration & Authentication:
Users can create accounts, log in securely, and manage their profiles and purchase history.

#### Search & Filtering: 
Effortlessly find books using search and filtering options based on genres, authors, and more.

#### Book Details & Reviews: 
Detailed book pages provide essential information, summaries, and user reviews to help customers make informed decisions.

#### Shopping Cart & Checkout: 
Add books to the shopping cart and complete purchases securely and seamlessly.

#### Wishlist & Bookmarks:
Users can create wishlists and bookmark their favorite books for future reference.


## Roadmap

**Phase 1: Setup and Basic Structure**

1. **Project Setup:**
    - Create a new directory for your project.
    - Initialize a new Git repository.
    - Set up a basic project structure.
2. **Backend Setup:**
    - Initialize a Node.js project using npm or yarn.
    - Set up Express.js for your server.
    - Connect to a MongoDB database using Mongoose.
3. **Frontend Setup:**
    - Create a new React app using Next Js.
    - Set up basic routing .
4. **User Authentication:**
    - Implement user registration and login functionality using JWT (JSON Web Tokens) for authentication.

**Phase 2: Core Functionality**

1. **Book Listings:**
    - Create a MongoDB schema for books with relevant fields (bookName, bookPrice, genre, author, bookDescription, bookImage, etc.).
    - Build an API route to fetch and display books on the frontend.
2. **Product Details:**
    - Implement a route to display detailed information about a selected book.
    - Include related books or recommendations on the same page.
3. **Shopping Cart:**
    - Add functionality to add books to a user's shopping cart.
    - Display the items in the cart with quantities and total prices.
    - Allow users to remove items from the cart.
4. **Checkout Process:**
    - Create a checkout page where users can review their items and proceed to payment.
    - Integrate a payment gateway (e.g., Stripe) for handling payments securely.

**Phase 3: User Experience and Refinement**

1. **User Profiles:**
    - Develop user profile pages where users can view and update their information.
    - Display order history and status.
2. **Search and Filters:**
    - Implement search functionality to find books by title, author, etc.
    - Add filters for genres, prices, and ratings.
3. **Responsive Design:**
    - Ensure your website looks and functions well on different devices and screen sizes.
4. **Optimization:**
    - Optimize database queries and API requests for better performance.
    - Implement caching for frequently accessed data.

**Phase 4: Scaling and Deployment**

1. **Testing:**
    - Write unit tests for critical components and functionality.
    - Perform manual testing to identify and fix any issues.
2. **Deployment:**
    - Deploy your backend to a server (e.g., Heroku, AWS, DigitalOcean).
    - Deploy your frontend to a hosting service (e.g., Netlify, Vercel).
3. **Security:**
    - Implement security best practices, including data validation and protection against common web vulnerabilities.
4. **Analytics and Monitoring:**
    - Integrate analytics tools to track user behavior and website performance.

**Phase 5: Additional Features (Future)**

1. **Wishlist:**
    - Allow users to create and manage wishlists of books they're interested in.
2. **Reviews and Ratings:**
    - Implement a system for users to leave reviews and ratings for books.
3. **Recommendation Engine:**
    - Build a recommendation system that suggests books based on user preferences and browsing history.
4. **Admin Panel:**
    - Create an admin dashboard for managing books, orders, and user data.



## Installation

The Archive Ecommerce Book Store Project leverages the following technologies and tools:



1.Clone this GitHub repository to your local machine using:
```bash
 git clone https://github.com/SthaRaunak/TheArchive.git
```
2.Navigate to the project directory:
```bash
cd the-archive
```

3.Install the required dependencies:
```bash
npm install
```
4.Set up the environment variables for API keys, database connections, and other configurations.

5.Start the development server:
```bash
npm start
```
