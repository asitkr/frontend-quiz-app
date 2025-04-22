import { useContext, useEffect } from "react";
import { QuizContext } from "../context/QuizContext";

const Timer = () => {
    const { timeLeft, setTimeLeft, handleNext } = useContext(QuizContext);

    useEffect(() => {
        if (timeLeft === 0) {
            handleNext();
            return;
        }
        const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
        return () => clearTimeout(timer);
    }, [timeLeft, setTimeLeft, handleNext]);

    return (
        <div className="text-center mt-4 text-white">
            <p className="text-lg">⏳ Time Left: <span className="font-bold">{timeLeft}s</span></p>
        </div>
    )
}

export default Timer;