# Pneumonia Classifier with Next.js

---
 
Welcome to the Pneumonia Classifier project! This application is designed to predict the likelihood of pneumonia from chest X-ray images using a machine learning model. The frontend is built with Next.js, and the app utilizes Clerk for user authentication, providing a secure and user-friendly interface for interacting with the model.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Overview

The Pneumonia Classifier is a web application that leverages a pre-trained deep learning model to analyze chest X-ray images and classify them as either "Pneumonia" or "Normal". The application uses Next.js for the frontend, Clerk for user authentication, and TensorFlow.js for image classification.

## Features

- **Image Upload:** Users can upload chest X-ray images for classification.
- **Classification Results:** Users receive a prediction result along with a confidence score.
- **User Authentication:** Clerk integration allows for secure user sign-up, sign-in, and management.
- **Responsive Design:** The application works well on both desktop and mobile devices.
- **Intuitive Interface:** Easy-to-use interface for users to interact with the model.

## Technologies Used

- **Frontend:** Next.js, React
- **Backend:** Node.js (with Express)
- **Machine Learning Model:** TensorFlow.js (pre-trained model for image classification)
- **User Authentication:** Clerk
- **Image Processing:** HTML5 Canvas, JavaScript

## Installation

To get started with the Pneumonia Classifier project, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Aliabdo6/Pneumonia-Classifier-nextjs.git
   cd Pneumonia-Classifier-nextjs
   ```

2. **Install dependencies:**

   Make sure you have [Node.js](https://nodejs.org/) installed. Then, run:

   ```bash
   npm install
   ```

3. **Set up Clerk:**

   - Sign up for a Clerk account at [Clerk](https://clerk.dev).
   - Create a new application in the Clerk dashboard and get your **Frontend API Key**.
   - Add your Clerk **Frontend API Key** to your `.env.local` file:

     ```plaintext
     CLERK_FRONTEND_API=<your-clerk-frontend-api-key>
     ```

4. **Start the development server:**

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000`.

## Usage

1. Open the application in your web browser.
2. **Sign Up or Sign In:** Use Clerk to create a new account or log in.
3. **Upload Image:** Use the file upload button to select a chest X-ray image from your computer.
4. **Classify Image:** Click on the "Classify" button to submit the image for analysis.
5. **View Results:** See the classification result and confidence score displayed on the screen.

## API

The backend API endpoints are used to handle image uploads and return classification results. Here are the main endpoints:

- **POST** `/api/classify`
  - **Description:** Upload an image and receive a classification result.
  - **Request Body:** `FormData` containing the image file.
  - **Response:** JSON object with classification result and confidence score.

## Clerk Integration

Clerk is used for user authentication in this project. It provides a secure and straightforward way to manage user accounts. The main components of Clerk used in this project include:

- **ClerkProvider:** Wraps the Next.js app to provide Clerk context and authentication state.
- **SignUp and SignIn Components:** Built-in components for user sign-up, sign-in, and account management.
- **Authentication Hooks:** React hooks for managing authentication state and user session.

For more information on using Clerk, refer to the [Clerk Documentation](https://clerk.dev/docs).

## Contributing

We welcome contributions to improve the Pneumonia Classifier project! If you have suggestions, bug reports, or feature requests, please follow these steps:

1. Fork the repository.
2. Create a new branch for your changes.
3. Make your modifications and test them thoroughly.
4. Submit a pull request with a clear description of your changes.

For detailed guidelines, please refer to the [CONTRIBUTING.md](CONTRIBUTING.md) file.

k you for checking out the Pneumonia Classifier project!

---

Feel free to make any modifications based on your preferences or additional project details.
