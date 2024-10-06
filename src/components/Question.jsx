import AnswerButton from "./AnswerButton.jsx";
import { useEffect, useState } from "react";

function Question({
  question,
  confirmation,
  nextQuestion,
  setGameState,
  nextStage,
  currentStage,
  setConfirmation,
  setDisplayConfirmation,
}) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);

  const handleClick = (letter) => {
    setSelectedAnswer(letter);
    setDisplayConfirmation(true);
  };

  useEffect(() => {
    if (confirmation) {
      setCorrectAnswer(question.correctAnswer);
      setTimeout(() => {
        if (selectedAnswer === question.correctAnswer) {
          if (currentStage.id !== 10) {
            nextStage();
            nextQuestion(currentStage.difficulty);
          } else {
            setGameState("finished");
          }
        } else {
          setGameState("lost");
        }
        setSelectedAnswer(null);
        setCorrectAnswer(null);
        setConfirmation(false);
        setDisplayConfirmation(false);
      }, 2000);
    }
  }, [confirmation]);

  return (
    <div className="col-span-2 row-start-3 grid grid-cols-2 grid-rows-4 gap-2 pb-2 pl-3">
      <div className="bg-gradient-to-r from-gray-800 via-gray-400 to-gray-600 p-1.5 rounded-xl col-span-2 row-span-2 row-start-1">
        <div className="text-2xl font-semibold h-full w-full bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white rounded-xl flex justify-center items-center">
          <p>
            {question.question}
          </p>
        </div>
      </div>
      <div className="w-full col-span-2 row-span-2 row-start-3 grid grid-cols-2 grid-rows-2 gap-4">
        <AnswerButton
          correctAnswer={correctAnswer}
          selectedAnswer={selectedAnswer}
          letter={"A"}
          answer={question.answers.A}
          handleClick={handleClick}
        />
        <AnswerButton
          correctAnswer={correctAnswer}
          selectedAnswer={selectedAnswer}
          letter={"B"}
          answer={question.answers.B}
          handleClick={handleClick}
        />
        <AnswerButton
          correctAnswer={correctAnswer}
          selectedAnswer={selectedAnswer}
          letter={"C"}
          answer={question.answers.C}
          handleClick={handleClick}
        />
        <AnswerButton
          correctAnswer={correctAnswer}
          selectedAnswer={selectedAnswer}
          letter={"D"}
          answer={question.answers.D}
          handleClick={handleClick}
        />
      </div>
    </div>
  );
}

export default Question;
