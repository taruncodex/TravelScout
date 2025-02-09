### TravelScout - Destination Recommendation Platform

## About TravelScout

TravelScout is a powerful destination recommendation platform designed to simplify travel planning. With the overwhelming number of destinations available, travelers often struggle to find places that align with their interests, budgets, and travel styles. TravelScout makes this process seamless by offering personalized suggestions based on user preferences and past travel experiences.

By analyzing user preferences and travel history, TravelScout helps users discover ideal travel spots that match their unique style. Whether planning an adventurous getaway, a cultural expedition, or a relaxing retreat, our platform ensures a hassle-free and enjoyable travel discovery experience.

With the plethora of travel destinations available, choosing the right place to visit can be overwhelming. Travelers often face challenges finding destinations matching their interests, budgets, and travel styles. A personalized recommendation platform can simplify this process by providing tailored suggestions based on user preferences and previous travel experiences, ultimately enhancing their travel planning and discovery.


## Project Type

**Fullstack Application**

## Deployed Application

- **Frontend:** [Live Site](https://deployed-site.whatever)
- **Backend:** [API Server](https://travelscout.onrender.com)
- **Database:** Hosted on MongoDB Atlas

## Directory Structure

```
travel-scout/
├─ backend/
│   ├─ controllers/
│   ├─ middlewares/
│   ├─ models/
│   ├─ node_modules/
│   ├─ config/
│   ├─ routes/
│   ├─ utils/
│   └─ index.js
├─ frontend/
│   ├─ public/
│   ├─ src/
│   │   ├─ assets/
│   │   ├─ components/
│   │   ├─ App.css
│   │   ├─ App.jsx
│   │   ├─ index.css
│   │   └─ main.jsx
└─ README.md
```

## Video Walkthroughs

### Project Overview

Attach a short video walkthrough of all the features **(1 - 3 minutes)**.

### Codebase Overview

Attach a short video walkthrough of the codebase **(1 - 5 minutes)**.

## Features

✅ **User Authentication:** Secure email/phone registration and login with password.

✅ **User Reviews & Ratings:** Users can share experiences, reviews, and ratings..

✅ **Custom Itineraries:** Users can plan activities and manage their schedules.

✅ **Social Sharing:** Share favorite destinations and itineraries.

✅ **Trending Destinations:** Showcases popular locations based on seasonal trends.

✅ **Mobile-Friendly UI:** Optimized experience across all devices.

✅ **User Profiles & History Tracking:** Saves user preferences and past trips




## Design Decisions & Assumptions

- User-friendly and intuitive UI/UX for seamless navigation.
- Secure authentication and data storage for enhanced security.
- Scalability considerations to accommodate future enhancements.

## Installation & Getting Started

Follow the steps below to install and run the project locally:

```bash
# Clone the repository
git clone https://github.com/your-repo/travel-scout.git
cd travel-scout

# Install dependencies
npm install

# Start the backend
cd backend
node index.js

# Start the frontend
cd ../frontend
npm install
npm run dev
```

## Usage

Personalized Travel Planning: Get tailored destination recommendations based on your interests and past travel history.
User Profiles & History Tracking: Save past trips and preferences for better recommendations.
Social Sharing & Reviews: Share your travel experiences, read reviews, and get insights from other travelers.

```bash
# Example command to fetch recommended destinations
curl -X POST https://travelscout.onrender.com/recommendations \
     -H "Content-Type: application/json" \
     -d '{ "interests": ["adventure", "beach"] }'
```

Include relevant screenshots to demonstrate key features.

## Demo Credentials

Use the following test credentials to explore the app's authenticated features:

- **Email:** tarunrathore200@gmail.com
- **Password:** 12345

## API Endpoints

### User Authentication

- `POST /signup` - Register a new user
- `POST /login` - Authenticate user

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

- **Frontend:** React.js, Vite
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **Authentication & Security:** JSON Web Tokens (JWT), Bcrypt
- **Additional Libraries:** Nodemailer, CORS, dotenv, Axios

## Contributors

- [Tarun Rathore](https://github.com/taruncodex)
- [Abhishek Joshi](https://github.com/abhishekjoshi1998)
- [Abhishek Nalawade](https://github.com/AbhiNalawade09)
- [Biman](https://github.com/Biman721443)

List contributors or team members involved in the project. If applicable, include links to their GitHub profiles.
