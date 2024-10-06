import {useContext, useEffect, useState} from "react";
import { useQuestions } from "../hooks/useQuestions.jsx";
import { useStages } from "../hooks/useStages.jsx";
import ResultModal from "../components/ResultModal.jsx";
import Question from "../components/Question.jsx";
import Stages from "../components/Stages.jsx";
import {LifelinesContext} from "../contexts/LifelinesContext.jsx";

function GamePage() {
  const [gameState, setGameState] = useState("onGoing");
  const [confirmation, setConfirmation] = useState(false);
  const [displayConfirmation, setDisplayConfirmation] = useState(false);
  const { currentQuestion, u5050Lifeline, getAQuestion } = useQuestions();
  const { currentStage, nextStage, restartStage, getRewards } = useStages();
  const { setIs5050Used, setIsATAUsed, setIsPAFUsed } = useContext(LifelinesContext)

  useEffect(() => {
    getAQuestion("easy");
  }, []);

  if (currentQuestion === null) {
    return <p>Loading</p>;
  }

  const handleRestart = () => {
    getAQuestion("easy");
    setGameState("onGoing");
    restartStage();
    setConfirmation(false);
    setDisplayConfirmation(false);
    setIs5050Used(false);
    setIsATAUsed(false);
    setIsPAFUsed(false);
  };

  return (
    <div className="grid h-screen w-screen grid-cols-3 grid-rows-3 gap-8 bg-game-image-small 2xl:bg-game-image-big bg-no-repeat bg-contain">
      {gameState !== "onGoing" && (
        <ResultModal
          handleRestart={handleRestart}
          reward={getRewards(gameState)}
        />
      )}
      {currentStage.id > 1 && (
        <div className="col-start-2 row-start-2 flex justify-end items-end">
          <button
            onClick={() => setGameState("withdrawn")}
            className="bg-gradient-to-r from-gray-800 via-gray-400 to-gray-600 p-1.5 rounded-xl"
          >
            <div className="text-xl px-14 py-2.5 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 rounded-xl text-white">
              Withdraw
            </div>
          </button>
        </div>
      )}
      <Question
        question={currentQuestion}
        nextQuestion={getAQuestion}
        setGameState={setGameState}
        currentStage={currentStage}
        nextStage={nextStage}
        confirmation={confirmation}
        setConfirmation={setConfirmation}
        setDisplayConfirmation={setDisplayConfirmation}
      />
      <Stages
        setConfirmation={setConfirmation}
        currentStage={currentStage}
        lifeline5050={u5050Lifeline}
        displayConfirmation={displayConfirmation}
      />
    </div>
  );
}

export default GamePage;
