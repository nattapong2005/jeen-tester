import React, { useState } from "react";
import vocabList from "./Vocabulary.json";

function App() {
  const [vocab, setVocab] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false); // New state for showing the answer

  // ฟังก์ชันสุ่มคำศัพท์
  const getRandomVocab = () => {
    const randomIndex = Math.floor(Math.random() * vocabList.length);
    setVocab(vocabList[randomIndex]);
    setShowAnswer(false); // Reset answer visibility when new vocab is chosen
  };

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer); // Toggle the answer visibility
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-blue-500">สุ่มคำศัพท์ภาษาจีน</h1>
      <button
        onClick={getRandomVocab}
        className="px-4 py-2 mb-6 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        สุ่มคำศัพท์
      </button>
      {vocab && (
        <div className=" text-center">
          <p className="text-4xl font-bold text-gray-800">{vocab.pinyin}</p>
          
          {/* Show the answer button */}
          <button
            onClick={toggleAnswer}
            className="px-4 py-2 mt-4 text-white  bg-green-500 rounded hover:bg-green-600"
          >
            {showAnswer ? "ซ่อนคำตอบ" : "เฉลย"}
          </button>

          {/* Show the meaning if showAnswer is true */}
          {showAnswer && (
            <p className="text-3xl font-bold text-gray-700 mt-4">{vocab.meaning} ({vocab.pronunciation})</p>
            
          )}
          <p className="font-bold mt-32">Created by Nattapong Nakaom</p>
        </div>
      )}
    </div>
  );
}

export default App;
