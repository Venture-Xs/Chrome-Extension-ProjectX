import React, { useState, useRef } from "react";
// import { FaMicrophone } from "react-icons/fa";
import axios from "axios";
import { PiMicrophoneFill, PiMicrophoneSlashFill } from "react-icons/pi";
import { MdOutlineFileUpload } from "react-icons/md";

const Search = () => {
  //   const [voiceActive, setVoiceActive] = useState(false);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [question, setQuestion] = useState("");

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setQuestion(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log("Submitted question:", question);
    setQuestion(""); // Clear the input after submission
  };

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
    <div className="flex flex-col gap-4">
      <input
        type="text"
        value={question}
        onChange={handleChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSubmit(e);
          }
        }}
        placeholder="Ask a question"
        className="w-64 px-4 py-2 text-black rounded-md outline outline-2 outline-offset-2"
      />

      <div className="flex justify-between">
        <button
          className="px-4 py-2 h-10 bg-gray-700 text-white rounded-md"
          onClick={startRecording}
          disabled={isRecording}
        >
          <PiMicrophoneFill />
        </button>
        <button
          className="px-4 py-2 h-10 bg-gray-700 text-white rounded-md"
          onClick={stopRecording}
          disabled={!isRecording}
        >
          <PiMicrophoneSlashFill />
        </button>
        <button
          className="px-4 py-2 h-10 bg-gray-700 text-white rounded-md"
          onClick={uploadRecording}
          disabled={!audioBlob}
        >
          <MdOutlineFileUpload />
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
//voiceActive &&
export default Search;
