//import React, { useState } from "react";
import { FaMicrophone } from "react-icons/fa";

const Search = () => {
  // const [voiceActive, setVoiceActive] = useState(false);
  // const [voiceText, setVoiceText] = useState("");

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

  return (
    <div className="relative border-black border-1">
      <input
        type="text"
        placeholder="Ask your question..."
        // value={voiceActive ? voiceText : ""}
        // onChange={(event) => setVoiceText(event.target.value)}
        className="w-64 px-4 py-2 text-white rounded-md focus:outline-none"
      />
      <button
        // onClick={toggleSearch}
        className="absolute px-4 py-2 h-10 bg-gray-700 text-white rounded-md"
      >
        <FaMicrophone />
      </button>
     {(
        <button
          //   onClick={handleSearch}
          className="absolute top-0 right-16 px-4 py-2 bg-gray-700 text-white rounded-md"
        >
          Speak
        </button>
     )}
    </div>
  );
};
//voiceActive && 
export default Search;
