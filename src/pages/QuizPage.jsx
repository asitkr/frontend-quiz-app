import { lazy, useContext, useEffect, useState } from "react";
import { QuizContext } from "../context/QuizContext";

// components
const Timer = lazy(() => import("../components/Timer"));
const Question = lazy(() => import("../components/Question"));
const WebcamFeed = lazy(() => import("../components/WebcamFeed"));
const FullscreenModal = lazy(() => import("../components/FullscreenModal"));

// pages
const ResultPage = lazy(() => import("./ResultPage"));
const ReviewPage = lazy(() => import("./ReviewPage"));

const QuizPage = () => {
    const { quizStarted, startQuiz, showModal, setShowModal, quizCompleted, currentQuestion, questions, webcamStarted } = useContext(QuizContext);

    const [cameraPermissionRequested, setCameraPermissionRequested] = useState(false);

    useEffect(() => {
        const handleFullscreenChange = () => {
            if (!document.fullscreenElement) setShowModal(true);
        };
        document.addEventListener('fullscreenchange', handleFullscreenChange);
        return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
    }, [setShowModal]);

    const handleStartQuiz = () => {
        navigator.permissions.query({ name: "camera" }).then((result) => {
            if (result.state === "granted") {
                startQuiz();
            } else if (result.state === "prompt") {
                setCameraPermissionRequested(true);
            } else {
                alert("Camera permission denied. Please enable it to continue.");
            }
        });
    };


    return (
        <div className="bg-black min-h-screen text-white flex flex-col items-center justify-center p-6 relative">
          {!quizStarted ? (
            <div className="bg-white shadow-2xl p-8 rounded-lg text-center max-w-md w-full">
              <h1 className="text-3xl text-gray-950 font-bold mb-4">Welcome to the Quiz App 🎉</h1>
              <p className="text-gray-600 mb-6">Test your knowledge with fun and challenging questions!</p>
              <button
                onClick={handleStartQuiz }
                className="px-6 py-3 bg-white text-black border border-black rounded hover:bg-black hover:text-white transition-all hover:shadow-2xl"
              >
                Start Quiz
              </button>
              {cameraPermissionRequested && (
                        <div className="text-red-500 mt-4">
                            <p>Camera permission is required to start the quiz. Please enable it in your browser settings.</p>
                        </div>
                    )}
            </div>
          ) : quizCompleted ? (
            <ResultPage />
          ) : currentQuestion === questions.length ? (
            <ReviewPage />
          ) : (
            <div className="w-full max-w-4xl flex flex-col lg:flex-row gap-4">
              <div className="absolute right-4 top-4 w-64">
                <WebcamFeed />
              </div>
              <div className="flex-1 flex flex-col gap-4 justify-center items-center">
                {webcamStarted && <Question />}
                {webcamStarted && <Timer />}
              </div>
              {showModal && <FullscreenModal />}
            </div>
          )}
        </div>
    );
}

export default QuizPage;
