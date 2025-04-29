# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


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

![image](https://github.com/user-attachments/assets/a56990ef-b9d1-4d7d-9eb2-2c1c40a0f4d1)

![Screenshot (1)](https://github.com/user-attachments/assets/d791f1fe-8c7c-42cd-b687-f0f48c38a34d)

![Screenshot (2)](https://github.com/user-attachments/assets/36a784b2-4f75-4c65-bc51-b8ca460a4e8e)

![Screenshot (3)](https://github.com/user-attachments/assets/3b12a58e-1253-404b-9964-34df2f307a31)


> Make sure the image `app-launch.png` is in the `public/assets` folder or hosted online if using Markdown on GitHub.

## 🚀 Getting Started
### Install Dependencies
``` npm install ```

### Run the Development Server
``` npm run dev ```

The app will run on ``` http://localhost:5173 ``` (Vite default)

### 🧠 Tech Stack

- **React.js** (Vite)
- **Tailwind CSS**
- **React Context API**
- **React Lazy & Suspense**
- **Web APIs**: `getUserMedia`, `fullscreen`, `permissions`


### 📁 Project Structure
```
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
```

### 🔐 Permissions
- **Camera: Required to monitor the user during the quiz.**
- **Fullscreen: Enforced during quiz to simulate exam conditions.**

### 🧪 Future Improvements
- 📷 **Screenshot prevention (where supported)**
- 🎥 **Record webcam during quiz**
- 💾 **Save user responses in a backend**
- 📊 **Admin dashboard to manage quizzes and analytics**

