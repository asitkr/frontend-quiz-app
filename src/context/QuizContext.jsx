import { createContext, useState } from 'react';
import { questions } from '../data';

const QuizContext = createContext();

const QuizProvider = ({ children }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [timeLeft, setTimeLeft] = useState(30);
    const [quizStarted, setQuizStarted] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [answers, setAnswers] = useState(Array(questions?.length).fill(null));
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [webcamStarted, setWebcamStarted] = useState(false);

    const handleAnswer = (answer) => {
        const updatedAnswers = [...answers];
        updatedAnswers[currentQuestion] = answer;
        setAnswers(updatedAnswers);
    };

    const handleNext = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(prev => prev + 1);
            setTimeLeft(30);
        } else {
            setCurrentQuestion(prev => prev + 1); // Move to review page
        }
    };

    const startQuiz = () => {
        document.documentElement.requestFullscreen();
        setQuizStarted(true);
    };

    const exitQuiz = () => {
        document.exitFullscreen();
        window.location.reload();
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setTimeLeft(30);
        setAnswers(Array(questions.length).fill(null));
        setQuizCompleted(false);
        setQuizStarted(false);
        setWebcamStarted(false);
    };

    const score = answers.reduce((acc, ans, idx) => ans === questions[idx].answer ? acc + 1 : acc, 0);

    return (
        <QuizContext.Provider
            value={{
                questions,
                currentQuestion,
                setCurrentQuestion,
                timeLeft,
                setTimeLeft,
                quizStarted,
                startQuiz,
                showModal,
                setShowModal,
                answers,
                setAnswers,
                quizCompleted,
                setQuizCompleted,
                exitQuiz,
                resetQuiz,
                score,
                handleAnswer,
                handleNext,
                webcamStarted,
                setWebcamStarted
            }}
        >
            {children}
        </QuizContext.Provider>
    );
};

export { QuizContext, QuizProvider };
