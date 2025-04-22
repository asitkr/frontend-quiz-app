import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";

const Question = () => {

    const { questions, currentQuestion, handleNext, handleAnswer, answers } = useContext(QuizContext);
    const data = questions[currentQuestion];
    const isValid = data?.options?.length === 4;

    return (
        <div className="bg-white text-black p-6 rounded shadow-xl w-full">
            <h2 className="text-2xl font-semibold mb-4">{data.question}</h2>
            {isValid ? (
                <ul className="space-y-2">
                    {data.options.map((opt, idx) => (
                        <li key={idx}>
                            <button
                                onClick={() => handleAnswer(opt)}
                                className={`border px-4 py-2 w-full text-left rounded ${answers[currentQuestion] === opt
                                        ? 'bg-black text-white'
                                        : 'bg-white text-black'
                                    } border-black hover:bg-black hover:text-white transition`}
                            >
                                {opt}
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-red-600">Error: Question must have exactly 4 options.</p>
            )}
            <button
                onClick={handleNext}
                className="mt-4 px-6 py-2 bg-black text-white border border-black rounded hover:bg-white hover:text-black transition"
            >
                Next / Skip
            </button>
        </div>
    )
}

export default Question;