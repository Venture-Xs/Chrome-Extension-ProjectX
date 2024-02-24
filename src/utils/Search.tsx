import React, { useState, useRef } from "react";
// import { FaMicrophone } from "react-icons/fa";
import axios from "axios";

const Search = () => {
  const [voiceActive, setVoiceActive] = useState(false);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [isRecording, setIsRecording] = useState(false);

  //   const toggleSearch = () => {
  //     setVoiceActive(!voiceActive);
  //   };

  //   const handleSearch = () => {
  //     if ('SpeechRecognition' in window) {
  //       const recognition = new window.SpeechRecognition();
  //       recognition.continuous = false;

  //       recognition.onresult = (event) => {
  //         const transcript = event.results[0][0].transcript;
  //         setVoiceText(transcript);
  //       };

  //       recognition.onerror = (event) => {
  //         console.log('Error', event.error);
  //       };

  //       recognition.onend = () => {
  //         setVoiceActive(false);
  //       };

  //       recognition.start();
  //     } else {
  //       console.error('SpeechRecognition not supported by this browser');
  //     }
  //   };

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);

  const startRecording = async () => {
    setIsRecording(true);

    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream);

    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        setAudioBlob(event.data);
      }
    };

    mediaRecorder.onstop = () => {
      setIsRecording(false);
    };

    mediaRecorder.start();
    mediaRecorderRef.current = mediaRecorder;
  };

  const stopRecording = () => {
    const mediaRecorder = mediaRecorderRef.current;
    if (mediaRecorder && mediaRecorder.state !== "inactive") {
      mediaRecorder.stop();
    }
  };

  const uploadRecording = async () => {
    if (!audioBlob) {
      console.error("No audio to upload");
      return;
    }

    const formData = new FormData();
    formData.append("audio", audioBlob);

    try {
      const response = await axios.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Upload response:", response.data);
    } catch (error) {
      console.error("Upload error:", error);
    }
  };

  return (
    <div className="relative border-black border-1">
      <input
        type="text"
        placeholder="Ask your question..."
        value={voiceActive ? voiceText : ""}
        onChange={(event) => setVoiceText(event.target.value)}
        className="w-64 px-4 py-2 text-white rounded-md focus:outline-none"
      />
      {/* <button
        onClick={toggleRecording}
        className="absolute px-4 py-2 h-10 bg-gray-700 text-white rounded-md"
      >
        <FaMicrophone />
      </button> */}
      <div>
        <button
          className="px-4 py-2 h-10 bg-gray-700 text-white rounded-md"
          onClick={startRecording}
          disabled={isRecording}
        >
          Start Recording
        </button>
        <button
          className="px-4 py-2 h-10 bg-gray-700 text-white rounded-md"
          onClick={stopRecording}
          disabled={!isRecording}
        >
          Stop Recording
        </button>
        <button
          className="px-4 py-2 h-10 bg-gray-700 text-white rounded-md"
          onClick={uploadRecording}
          disabled={!audioBlob}
        >
          Upload Recording
        </button>
      </div>
      {/* {voiceActive && (
        <button
          //   onClick={handleSearch}
          className="absolute top-0 right-16 px-4 py-2 bg-gray-700 text-white rounded-md"
        >
          Speak
        </button>
      )} */}
    </div>
  );
};

export default Search;
