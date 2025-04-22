import { useContext, useEffect, useRef, useState } from "react";
import { QuizContext } from "../context/QuizContext";

const WebcamFeed = () => {
    const videoRef = useRef(null);
    const { setWebcamStarted } = useContext(QuizContext);
    const [permissionDenied, setPermissionDenied] = useState(false);
    const [retry, setRetry] = useState(false);

    const startWebcam = () => {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then((stream) => {
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                    setWebcamStarted(true);
                    setPermissionDenied(false);
                }
            })
            .catch((err) => {
                console.error("Webcam access denied:", err);
                setWebcamStarted(false);
                setPermissionDenied(true);
            });
    };

    const checkPermission = () => {
        navigator.permissions.query({ name: "camera" })
            .then((result) => {
                if (result.state === "denied") {
                    setPermissionDenied(true);
                } else {
                    startWebcam();
                }
            })
            .catch((error) => {
                console.error("Error checking permission:", error);
            });
    };

    useEffect(() => {
        if (!permissionDenied && !retry) {
            checkPermission();
        }

        if (retry) {
            startWebcam();
            setRetry(false);
        }
    }, [permissionDenied, retry]);

    return (
        <div className="mt-6 border border-white p-2 rounded">
            <h3 className="text-white mb-2 text-center">📸 Webcam Monitoring</h3>
            <video ref={videoRef} autoPlay className="rounded max-w-xs w-full mx-auto" />
            {permissionDenied && (
                <div className="text-center text-red-500 mt-2">
                    <p>Please enable camera permissions to proceed with the quiz.</p>
                    <button
                        onClick={() => setRetry(true)} // Trigger retry when clicked
                        className="px-6 py-2 bg-white text-black border border-black rounded mt-4"
                    >
                        Retry Camera Access
                    </button>
                </div>
            )}
        </div>
    );
};

export default WebcamFeed;
