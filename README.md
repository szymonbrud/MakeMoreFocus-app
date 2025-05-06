# 🍅 Pomodoro Timer App (React + Firebase)

This project is a web application implementing the popular **Pomodoro Technique**, a time management method.

It offers user-specific features powered by Firebase, allowing users to **log in, set custom timers, track their progress, and persist their Pomodoro sessions.**

## ✨ Project Context: Learning React and Firebase

This application was a core project in my journey to learn and build with **React** and **Firebase**. It served as a comprehensive exercise to understand:

*   **React Fundamentals:** Building a dynamic user interface.
*   **Firebase Integration:** Connecting a front-end application to a back-end-as-a-service.
*   **Authentication:** Implementing secure user login using **Firebase Authentication (specifically Google Auth)**.
*   **Database Interaction:** Storing and retrieving user data (Pomodoro sessions, active timers) using **Firebase Realtime Database / Firestore**.
*   **State Management:** Managing application state, likely using **Redux**.

It was a significant step in building full-stack capabilities by leveraging modern front-end libraries and cloud services.

## 🚀 Key Features

*   **User Accounts & Google Login:** Secure authentication via Firebase Auth.
*   **Customizable Timer:** Set durations for Pomodoro sessions and breaks.
*   **Session Tracking:** Records completed Pomodoro sessions.
*   **Active Timer Persistence:** Aims to save the state of active timers (depending on implementation details).
*   **Component Development with Storybook:** UI components documented and developed in isolation.

## 🛠️ Technologies Used

*   **React:** The core library for the user interface.
*   **Redux:** For managing application state.
*   **Styled Components:** For component-scoped styling.
*   **Firebase:**
    *   **Firebase Authentication:** For user login (Google Auth).
    *   **Firebase Realtime Database / Firestore:** For storing user data and sessions.
*   **Storybook:** For UI component development and documentation.
*   **Axios:** A Promise-based HTTP client (likely used for interactions outside of pure Firebase SDK calls, if any, or within Cloud Functions).

## ⚠️ Important Note on Project Status

Please be aware that this project was developed **some time ago** and relies on **older versions of its dependencies** (Gatsby framework, various libraries).

As a result, the code in its current state **will likely require significant work to update dependencies** and resolve compatibility issues before it can be successfully built or run.

This repository is kept as a **historical record of my learning and work** at that time, demonstrating the original architecture, styling choices, and the technologies I was exploring.
