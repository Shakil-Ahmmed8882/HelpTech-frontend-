# HelpTech

## Table of Contents
1. [Project Overview](#project-overview)
2. [Project Objectives](#project-objectives)
3. [Tech Stack](#tech-stack)
4. [Installation & Setup](#installation--setup)
5. [Functional Requirements](#functional-requirements)
6. [User Interface Design](#user-interface-design)
7. [Bonus Features](#bonus-features)
8. [Security Features](#security-features)

---

## Project Overview

**HelpTech** is a full-stack web application designed to empower tech enthusiasts by providing expert advice, personal experiences, and user-generated content. It serves as a platform for discovering and sharing practical tech solutions, tutorials, and product recommendations. Users can register, create personalized content, upvote or downvote insights, and access premium content through payment integration.

---


![Logo](https://raw.githubusercontent.com/Shakil-Ahmmed8882/HelpTech-frontend-/refs/heads/main/src/assets/images/git/Screenshot%20(26).png)




## Project Objectives

- Added a secure, fully functional web application with both frontend and backend components.
- Added user authentication and authorization using JWT for secure access control.
- Designed and integrated a non-relational database (MongoDB) for efficient data storage and retrieval.
- Added a responsive user interface that adapts to various screen sizes and devices for better user experience.
- Implemented a rich text editor for content creation, allowing users to share detailed tech tips and guides.
- Integrated payment gateway (AAMARPAY / STRIPE) for premium content access.
- Enabled social interactions such as upvoting, commenting, and following other users.
- Added advanced search and filtering options to help users find relevant content easily.


---


## Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (NoSQL)
- **Authentication**: JSON Web Token (JWT)
- **Rich Text Editor**: Joddit
- **Payment Integration**: SSL


---

## Installation & Setup

### Prerequisites
- Node.js
- MongoDB
- Stripe / AAMARPAY account for payment integration

### Steps to Install
1. Clone the repository:
    ```bash
    git clone https://github.com/Shakil-Ahmmed8882/HelpTech-frontend-.git
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    Create a `.env` file and add the following:
    ```
    

NEXT_PUBLIC_BASE_API =...

NEXT_PUBLIC_BASE_API = .. 

GOOGLE_CLIENT_ID = ...

GOOGLE_CLIENT_SECRET = ..

GITHUB_ID=...
GITHUB_SECRET=..
NEXTAUTH_URL=http://localhost:3000
IMGBB_API_KEY= ..


NEXTAUTH_SECRET = secret

    ```

4. Run the application:
    ```bash
    npm run dev
    ```

---

![Logo](https://raw.githubusercontent.com/Shakil-Ahmmed8882/HelpTech-frontend-/refs/heads/main/src/assets/images/git/Screenshot%20(27).png)

## Functional Requirements

### User Authentication
- Users can register with email and password.
- Secure login/logout using JWT authentication.
- Password recovery and change password features.
  
### User Profile Management
- Users can update personal information, including profile pictures.
- "My Profile" page displaying posts, followers, and following.
- Verified users get a badge.

### Post Creation & Sharing
- Use a rich text editor (Quill.js, Draft.js, or TinyMCE) for creating and editing posts.
- Users can attach images to posts and categorize them under predefined categories.
- Premium posts will only be accessible to verified users.

### Upvote & Downvote System
- Users can upvote or downvote posts and comments based on quality and relevance.

### Commenting System
- Users can comment on posts and have the ability to edit or delete their own comments.

### Payment Integration
- Integrated with SSL for users to pay $20/month for premium content access.


### News Feed
- Post creation at the top of the news feed.
- Infinite scroll to dynamically load more content.
- Sort and filter posts by categories and upvotes.

### Following System
- Users can follow others to stay updated with their content.



---

## User Interface Design

### Required Pages
1. **Login/Registration Page**: User sign-up and login forms.
2. **User Dashboard**: Manage profile, posts, and payments.
3. **Admin Dashboard**: Manage users, posts, payments, and system logs.
4. **Profile Page**: Display user profile information and posts.
5. **News Feed**: Display the latest posts and filter by categories.
6. **Post Details Page**: Detailed view of a post with comments, upvotes, and content.

---

### Thanks 
Appreciate your presence here. 
