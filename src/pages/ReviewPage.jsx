import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";

const ReviewPage = () => {
    const { questions, answers, setQuizCompleted } = useContext(QuizContext);

    const handleSubmit = () => {
        setQuizCompleted(true);
        document.exitFullscreen();
    };

    return (
        <div className="w-full max-w-4xl flex items-center justify-center bg-black min-h-screen text-white p-6">
            <div className="bg-white text-black shadow-2xl p-8 rounded-lg w-full max-w-3xl">
                <h2 className="text-2xl font-bold mb-6 text-center">Review Your Answers</h2>
                <ul className="space-y-4">
                    {questions?.map((q, idx) => (
                        <li key={idx} className="border border-black p-4 rounded">
                            <p><strong>Q{idx + 1}:</strong> {q?.question}</p>
                            <p><strong>Your Answer:</strong> {answers[idx] || 'Not Answered'}</p>
                        </li>
                    ))}
                </ul>
                <div className="text-center mt-6">
                    <button onClick={handleSubmit} className="px-6 py-2 bg-black text-white border border-black rounded hover:bg-white hover:text-black transition-all hover:shadow-xl">Submit Quiz</button>
                </div>
            </div>
        </div>
    );
}

export default ReviewPage;
