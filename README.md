### TravelScout - Destination Recommendation Platform

## Introduction

With the plethora of travel destinations available, choosing the right place to visit can be overwhelming. Travelers often face challenges in finding destinations that match their interests, budget, and travel style. TravelScout simplifies this process by providing tailored suggestions based on user preferences and previous travel experiences, ultimately enhancing their travel planning and discovery.

## Project Type

Fullstack

## Deployed App

Frontend: https://deployed-site.whatever
Backend:  https://travelscout.onrender.com
Database: https://travelscout.onrender.com

## Directory Structure

travel-scout/
├─ backend/
    ├─ controllers/
    ├─ middlewares/
    ├─ models/  
    ├─ node_modules/  
    └─ server.js
├─ Frontend/
    ├─ Frontend/
        ├─ public/
        ├─ src/
           ├─ assets/
           ├─ components/
           ├─ styles/
           ├─ App.css
           ├─ App.jsx
           ├─ index.css
           ├─ main.jsx
└─ README.md

## Video Walkthrough of the Project

Attach a very short video walkthrough of all the features [1 - 3 minutes]

## Video Walkthrough of the Codebase

Attach a very short video walkthrough of the codebase [1 - 5 minutes]

## Features

- **User Authentication**: Secure registration and login via email/Phone and password.
- **Dynamic Recommendation Engine:** Personalized travel destination suggestions.
- **User Reviews and Ratings:** Users can submit experiences, reviews, and ratings.
- **Interactive Destination Map:** Visual representation of recommended locations.
- **Personalized Itineraries:** Users can plan activities and manage their schedule.
- **Social Sharing Features:** Share favorite destinations and itineraries.
- **Destination Comparison Tool:** Side-by-side comparison of multiple destinations.
- **Trending Destinations Section:** Showcases popular locations based on seasonal trends.
- **Mobile Responsiveness:** Optimized experience across devices.
- **User Profiles and History Tracking:** Saves user preferences and past trips.

## Design Decisions or Assumptions

List your design decisions & assumptions

## Installation & Getting Started

Detailed instructions on how to install, configure, and get the project running.

```bash
npm install travel-scout
cd travel-scout
npm start
```

## Usage

Provide instructions and examples on how to use TravelScout.

```bash
# Example
```

Include screenshots as necessary.

## Credentials

Provide user credentials for authenticated pages

## APIs Used

List of external APIs and references used in the project.

## API Endpoints

### User Authentication

- `POST /auth/register` - Register a new user
- `POST /auth/login` - Authenticate user

### Destination Recommendations

- `POST /recommendations` - Get personalized destination suggestions
- `GET /destinations` - Fetch all available destinations

### User Preferences

- `POST /preferences` - Save user preferences
- `GET /preferences` - Retrieve stored preferences

### Itineraries

- `POST /itineraries` - Create a personalized itinerary
- `GET /itineraries/:userId` - Fetch user’s itineraries

## Technology Stack

- **Frontend:** React.js, socket.io-client
- **Backend:** Node.js, Express.js, socket.io
- **Database:** MongoDB
- **Authentication & Security:** JSON Web Tokens (JWT), Bcrypt
- **Additional Libraries:** Nodemailer, CORS, dotenv

## Contributors

List contributors or team members involved in the project.
