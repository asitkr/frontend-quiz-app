# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# 🎓 Quiz App

A modern, responsive, and secure quiz application built with **React.js**, **Tailwind CSS**, and **Context API**. This app offers a full-screen quiz experience, includes webcam monitoring, a countdown timer, fullscreen enforcement, and permission handling for a proctor-like environment.

## 🌟 Features

- 📸 **Webcam Feed** — Requires camera access to start the quiz, detects permission revocation
- 🕒 **Countdown Timer** — Each question has a timer, and questions auto-progress on timeout
- 🖥️ **Fullscreen Mode** — Quiz starts in fullscreen, with detection for exit and re-entry
- 🔐 **Security Modal** — Warns users when they try to exit fullscreen
- ✅ **Review & Result Pages** — Review all answers before submission and see results at the end
- ⚡ **Lazy Loading** — Components like timer, questions, results, and webcam are lazy-loaded for performance
- 💡 **Permission Handling** — Smart handling of camera permission revokes and retries

## 🖼️ App Launch Screenshot
![image](https://github.com/user-attachments/assets/1088ae71-57a4-4388-ae7a-b7ea4a1a3062)

> Make sure the image `app-launch.png` is in the `public/assets` folder or hosted online if using Markdown on GitHub.

## 🚀 Getting Started
### Install Dependencies
npm install

### Run the Development Server
npm run dev

The app will run on http://localhost:5173 (Vite default)

### 🧠 Tech Stack

- **React.js** (Vite)
- **Tailwind CSS**
- **React Context API**
- **React Lazy & Suspense**
- **Web APIs**: `getUserMedia`, `fullscreen`, `permissions`


### 📁 Project Structure
src/
├── components/
│   ├── Timer.jsx
│   ├── Question.jsx
│   ├── WebcamFeed.jsx
│   └── FullscreenModal.jsx
├── context/
│   └── QuizContext.jsx
├── pages/
│   ├── QuizPage.jsx
│   ├── ReviewPage.jsx
│   └── ResultPage.jsx
├── App.jsx
└── main.jsx


### 🔐 Permissions
- ** Camera: Required to monitor the user during the quiz.
- ** Fullscreen: Enforced during quiz to simulate exam conditions.

