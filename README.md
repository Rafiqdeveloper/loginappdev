# project demo link
https://loginappdev.netlify.app


# Dependencies Used

 * This project is reactjs, hooks and bootstraps.  
 
 This project was bootstrapped with create-react-app (react,react-dom,react-scripts etc;)
 * react-router-dom
 * react-icons
 * bootstrap

# Routes in the Application
  * Login Route (/login): It consists of a dummy login form with form-level-validations
  * HomeRoute (/): It consists of Header, List of Jokes and Footer

# Assumptions Made
 Used javascript regular expression (RegExp) for validation
 username - It must be between 5 to 10 characters and only alphabets are allowed.
 password - It must be between 8 to 15 characters and must include atleast one digit ,one letter,and one special character from these !,@,#,$,%
 (Sample credentials : username - rafiq, password -tests@123) 
 Since this is a dummy login form user can give any username and password that satisfies form level validations.
 (we can change the regular expression as per our requirement)

 # Project Description

 
 In home page, based on API response, different views will be shown (Initially, a shimmer will be displayed when it is in loading state and when response is success list of jokes are displayed and a failure view is also maintained)
 From the API data obtained , jokes are displayed.
 Jokes Card consist of category of joke, flags (if any (true)), if safe value is false then card background color is pinkish(bg-danger-subtitle) and if there are any flags, joke text color is orange(text-warning).

 # Key Concepts Used :

 react18 , react-router v6 , bootstrap V5.3
 Functional components , Hooks
 react : useState, useEffect
 react-router-dom : createBrowserRouter, RouterProvider, Link, Navigate, useNavigate, Outlet
 conditional rendering : if-else , ternary operators , logical && operator
 optional chaining
 shimmer
 rest api - fetch 
 wrapper component (protected route)
 cloudinary image cdn's ,  react-icons
responsive web design with bootstrap grid system
rendering based on api response

 






