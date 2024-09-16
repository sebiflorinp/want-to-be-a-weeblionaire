import {useQuestions} from "./hooks/useQuestions.jsx";
import Question from "./components/Question.jsx";
import {useEffect, useState} from "react";
import {useStages} from "./hooks/useStages.jsx";
import ResultModal from "./components/ResultModal.jsx";
import "./index.css"
import Stages from "./components/Stages.jsx";

function App() {
    const [gameState, setGameState] = useState("onGoing")
    const {currentQuestion, u5050Lifeline, getAQuestion} = useQuestions();
    const {currentStage, nextStage, restartStage, getRewards} = useStages()


    useEffect(() => {
        getAQuestion("easy");
    }, [])

    if (currentQuestion === null) {
        return <p>Loading</p>
    }

    const handleRestart = () => {
        getAQuestion("easy")
        setGameState("onGoing")
        restartStage()
    }

    return(
        <div className="grid h-screen w-screen grid-cols-3 grid-rows-3 gap-8">
            {
                gameState !== "onGoing" &&
                <ResultModal handleRestart={handleRestart} reward={getRewards(gameState)}/>
            }
            {
                currentStage.id > 1 &&
                <div className="col-start-2 row-start-2 flex justify-end items-end">
                    <button onClick={() => setGameState("withdrawn")} className="bg-gradient-to-r from-gray-800 via-gray-400 to-gray-600 p-1.5 rounded-xl">
                        <div className="text-xl px-14 py-2.5 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 rounded-xl text-white">Withdraw</div>
                    </button>
                </div>
            }
            <Question
                question={currentQuestion}
                nextQuestion={getAQuestion}
                setGameState={setGameState}
                currentStage={currentStage}
                nextStage={nextStage}
            />
            <Stages currentStage={currentStage} lifeline5050={u5050Lifeline}/>
        </div>
    )
}

export default App