import STAGES from "../data/stages.json"
import Lifelines from "./Lifelines.jsx";

function Stages({currentStage, lifeline5050}) {
    const currentStageBackground = "bg-gradient-to-r from-amber-800 via-amber-600 to-amber-800 border-solid border-2 border-gray-400 rounded-xl"
    const checkpointStyle = "flex justify-between items-center max-w-96 p-1 font-bold text-2xl text-white"
    const nonCheckpointStyle = "flex justify-between items-center p-1 max-w-96 font-bold text-2xl text-amber-500"

    return (
        <div className="col-start-3 row-span-3 row-start-1 bg-gradient-to-b from-gray-800 via-gray-400 to-gray-600 pl-2">
            <div className="flex flex-col p-4 pt-24 gap-2 bg-gradient-to-bl from-slate-900 to-blue-950 h-full w-full">
                <Lifelines lifeline5050={lifeline5050}/>
                {STAGES.map((stage) => {
                    return (
                        <div key={stage.id}
                             className={stage.checkpoint ?
                                 stage.id !== currentStage.id ? checkpointStyle : checkpointStyle + " " + currentStageBackground :
                                 stage.id !== currentStage.id? nonCheckpointStyle : nonCheckpointStyle + " " + currentStageBackground
                        }>
                            <p>{stage.id}</p>
                            <p>{stage.reward}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Stages