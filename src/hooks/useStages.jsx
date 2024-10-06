import STAGES from "../data/stages.json"
import {useState} from "react";

export function useStages() {
    const [stages, setStages] = useState(STAGES)
    const [currentStage, setCurrentStage] = useState(stages[9])

    const nextStage = () => {
        console.log(currentStage)
        if (currentStage.id < stages.length) {
            setCurrentStage(stages[9 - currentStage.id])
        }
    }

    const restartStage = () => {
        setCurrentStage(stages[9])
    }


    const getRewards = (gameState) => {
        switch (gameState) {
            case "finished":
                return stages[0].reward
            case "withdrawn":
                return stages[11 - currentStage.id].reward
            default:
                if (currentStage.id > 5) {
                    return stages[5].reward
                } else {
                    return stages[9].reward
                }
        }
    }

    return {
        currentStage,
        nextStage,
        restartStage,
        getRewards
    }
}