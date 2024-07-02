# Tourio - Tour Guide Website of Bangladesh

Welcome to Tourio, a comprehensive tour guide website designed to enhance the tourism experience in Bangladesh. This platform offers a multitude of functionalities to cater to tourists, tour guides, and admins.

**Live Demo:** [Tourio Live Demo](https://tourio-a04d8.web.app/)
**Server Side Repo:** [ Server Github Ripo](https://github.com/anasahammad/Tourio-server)

## Features

### User Authentication
- **Firebase Authentication**: Secure and reliable user authentication using Firebase.

### User Roles and Dashboards
- **Three Roles**: Tourist, Tour Guide, Admin.
- **Role-specific Routes**:
  - **Tourist**: View and book packages, see available tour guides, send direct messages, view wishlist, bookings, and profile.
  - **Tour Guide**: View assigned tours, accept/reject tours, manage tours.
  - **Admin**: Add packages, manage users, approve tour guide requests, manage user roles.

### Booking and Package Management
- **Tourist Functionality**:
  - View all packages.
  - Book packages through a detailed form.
  - View tour guide details and send direct messages using Web3form.
  - Save packages to wishlist using a heart icon.
  - View bookings and wishlist.
  - Receive discounts for booking more than three packages.
- **Tour Guide Functionality**:
  - View assigned tours.
  - Accept or reject tour requests.
  - Once accepted, tourists can proceed with payment.
- **Admin Functionality**:
  - Add new packages.
  - Manage user roles (tourist, tour guide, admin).

### Payments and Discounts
- **Stripe Integration**: Secure payment processing for package bookings.
- **Discount System**: Tourists receive discounts for booking multiple packages.

### Ratings and Reviews
- **Tour Guide Reviews**: Tourists can rate and review tour guides (login required).

### Security
- **JWT Authentication**: Secure backend and user pages with JWT.

### Pagination
Implemented pagination for:
- My Bookings page
- My Wishlist page
- Assign Tours page
- Manage Users page

### Admin Management
- **User Filtering and Search**: Admins can filter users by role and search users by name and email.

## Technology Stack

### Frontend Packages
- `@headlessui/react`
- `@stripe/react-stripe-js`
- `@stripe/stripe-js`
- `@tanstack/react-query`
- `axios`
- `firebase`
- `framer-motion`
- `localforage`
- `lottie-react`
- `match-sorter`
- `react`
- `react-confetti`
- `react-datepicker`
- `react-dom`
- `react-hook-form`
- `react-hot-toast`
- `react-icons`
- `react-router-dom`
- `react-select`
- `react-share`
- `react-slick`
- `react-spinners`
- `react-spring`
- `react-star-ratings`
- `react-tabs`
- `react-use`
- `slick-carousel`
- `sort-by`
- `sweetalert2`
- `swiper`

## Installation Instructions

To get Tourio up and running on your local machine, follow these steps:

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher) or yarn (v1.22 or higher)
- Firebase account
- Stripe account

### Backend Setup

1. **Clone the repository:**
    ```sh
    git clone https://github.com/yourusername/tourio.git
    cd tourio
    ```

2. **Install backend dependencies:**
    ```sh
    cd backend
    npm install
    ```

3. **Set up environment variables:**
    Create a `.env` file in the `backend` directory and add your environment variables:
    ```env
    PORT=5000
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    STRIPE_SECRET_KEY=your_stripe_secret_key
    ```

4. **Run the backend server:**
    ```sh
    npm start
    ```

### Frontend Setup

1. **Navigate to the frontend directory:**
    ```sh
    cd ../frontend
    ```

2. **Install frontend dependencies:**
    ```sh
    npm install
    ```

3. **Set up environment variables:**
    Create a `.env` file in the `frontend` directory and add your environment variables:
    ```env
    REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
    REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
    REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
    REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_public_key
    ```

4. **Run the frontend development server:**
    ```sh
    npm start
    ```

### Deployment

For deployment, follow the standard practices for deploying Node.js backend and React frontend applications. You can use services like Heroku, Vercel, Netlify, or Firebase Hosting.

---

Now, you should have Tourio running locally on your machine. Enjoy exploring the comprehensive tour guide features of Bangladesh!
