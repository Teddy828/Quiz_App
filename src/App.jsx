import axios from "axios";
import { useRef, useState } from "react";
import QuizSetup from "./QuizSetup";

const App = () => {
  const [topic, setTopic] = useState("");
  const [startQuiz, setStartQuiz] = useState(false);
  const [numOfQuestions, setNumOfQuestions] = useState(3);
  const questions = useRef([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  async function generateQuiz() {
    try {
      const res = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          max_tokens: 1000,
          model: "gpt-3.5-turbo-1106",
          response_format: { type: "json_object" },
          messages: [
            {
              role: "user",
              content: `I want you to return a JSON object of an array named 'questions' of random trivia questions based on the topic: ${topic}. Generate ${numOfQuestions} amount of questions. with 3 possible answers for each question. also include a 'correctAnswer' property with the correct answer as the value.`,
            },
          ],
        },
        {
          headers: {
            Authorization: "Bearer " + import.meta.env.VITE_OPENAI_KEY,
          },
        }
      );
      questions.current = JSON.parse(res.data.choices[0].message.content);
      setStartQuiz(true);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      {!startQuiz ? (
        <QuizSetup
          topic={topic}
          setTopic={setTopic}
          numOfQuestions={numOfQuestions}
          setNumOfQuestions={setNumOfQuestions}
          generateQuiz={generateQuiz}
        />
      ) : (
        console.log("No quiz")
      )}
    </div>
  );
};

export default App;
