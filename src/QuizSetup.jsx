import React, { useState } from "react";
import NumOfQuestionBtn from "./NumOfQustionBtn";

const QuizSetup = (props) => {
  const { topic, setTopic, numOfQuestions, setNumOfQuestions, generateQuiz } =
    props;
  const [inputVal, setInputVal] = useState("");

  function startQuiz(userTopic, userNumOfQuestions) {
    console.log(userTopic);
    console.log(userNumOfQuestions);
  }

  return (
    <div className="w-full max-w-[400px] mt-10 ml-auto mr-auto p-10 text-zinc-700">
      <h1 className="text-indigo-500 font-bold mb-5 text-2xl">
        English Quizler
      </h1>
      <>
        <div className="group">
          <h2 className="font-extrabold text-xl">Step One</h2>
          <p className="text-sm mb-2">Give me a topic for the quiz</p>
          <input
            onChange={(e) => {
              setInputVal(e.target.value), setTopic(e.target.value);
            }}
            value={inputVal}
            type="text"
            className="w-full bg-gray-100 outline-none px-2 py-4 rounded-sm"></input>
        </div>
        <div className="group mt-10">
          <h2 className="font-extrabold text-xl">Step Two</h2>
          <p className="text-sm mb-2">How many questions should I include?</p>
          <div className="group flex justify-between gap-2">
            <NumOfQuestionBtn
              setNumOfQuestions={setNumOfQuestions}
              number={3}
            />
            <NumOfQuestionBtn
              setNumOfQuestions={setNumOfQuestions}
              number={5}
            />
            <NumOfQuestionBtn
              setNumOfQuestions={setNumOfQuestions}
              number={10}
            />
          </div>
          <button
            className="bg-indigo-500 p-3 text-white w-full mt-5 rounded-sm hover:bg-indigo-600 duration-200"
            onClick={() => {
              generateQuiz();
            }}>
            Start English Quiz
          </button>
        </div>
      </>
    </div>
  );
};

export default QuizSetup;
