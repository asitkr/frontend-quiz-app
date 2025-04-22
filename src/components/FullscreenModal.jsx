import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";

const FullscreenModal = () => {
    const { setShowModal, exitQuiz } = useContext(QuizContext);

    const handleContinue = () => {
        document.documentElement.requestFullscreen();
        setShowModal(false);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="bg-white text-black p-6 rounded-lg max-w-sm text-center shadow-xl">
                <h2 className="text-xl font-semibold mb-4">⚠️ You exited fullscreen!</h2>
                <p className="mb-4">Do you want to continue the quiz?</p>
                <div className="space-x-4">
                    <button
                        onClick={handleContinue}
                        className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
                    >
                        Continue
                    </button>
                    <button
                        onClick={exitQuiz}
                        className="px-4 py-2 border border-black rounded hover:bg-black hover:text-white"
                    >
                        Exit Quiz
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FullscreenModal;