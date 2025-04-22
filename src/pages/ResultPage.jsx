import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";

const ResultPage = () => {
    const { questions, answers, score, resetQuiz } = useContext(QuizContext);
    return (
        <div className="w-full min-h-screen max-w-4xl bg-black text-white flex items-center justify-center p-6">
            <div className="w-full bg-black rounded-lg shadow-2xl border border-white p-8">
                <h2 className="text-3xl font-bold text-center text-green-400 mb-6">🎉 Congratulations!</h2>
                <p className="text-center text-lg mb-6">
                    Your Score: <span className="font-bold">{score}</span> / {questions?.length}
                </p>

                <ul className="space-y-6">
                    {questions?.map((q, idx) => (
                        <li key={idx} className="border border-white p-4 rounded-lg bg-black">
                            <p className="mb-2"><strong>Q{idx + 1}:</strong> {q?.question}</p>
                            <p className="mb-1">
                                <strong>Your Answer:</strong>{" "}
                                <span className={answers[idx] === q?.answer ? "text-green-400" : "text-red-400"}>
                                    {answers[idx] || 'Not Answered'}
                                </span>
                            </p>
                            <p><strong>Correct Answer:</strong> {q?.answer}</p>
                        </li>
                    ))}
                </ul>

                <div className="text-center mt-10">
                    <button
                        onClick={resetQuiz}
                        className="px-6 py-3 bg-white text-black rounded hover:bg-gray-200 transition"
                    >
                        Restart Quiz
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ResultPage;
