import STAGES from "../data/stages.json";
import Lifelines from "./Lifelines.jsx";

function Stages({
  currentStage,
  displayConfirmation,
  lifeline5050,
  setConfirmation,
}) {
  const currentStageBackground =
    "bg-gradient-to-r from-amber-800 via-amber-600 to-amber-800 border-solid border-2 border-gray-400 rounded-xl";
  const checkpointStyle =
    "flex justify-between items-center max-w-96 p-1 font-bold text-2xl text-white";
  const nonCheckpointStyle =
    "flex justify-between items-center p-1 max-w-96 font-bold text-2xl text-amber-500";

  const handleClick = () => {
    setConfirmation(true);
  };

  return (
    <div className="col-start-3 row-span-3 row-start-1 bg-gradient-to-b from-gray-800 via-gray-400 to-gray-600 pl-2">
      <div className="grid grid-rows-8 p-4 pt-24 gap-2 bg-gradient-to-bl from-slate-900 to-blue-950 h-full w-full">
        <Lifelines lifeline5050={lifeline5050} />
        <div className="flex flex-col gap-2 row-start-2 row-span-6">
          {STAGES.map((stage) => {
            return (
              <div
                key={stage.id}
                className={
                  stage.checkpoint
                    ? stage.id !== currentStage.id
                      ? checkpointStyle
                      : checkpointStyle + " " + currentStageBackground
                    : stage.id !== currentStage.id
                      ? nonCheckpointStyle
                      : nonCheckpointStyle + " " + currentStageBackground
                }
              >
                <p>{stage.id}</p>
                <p>{stage.reward}</p>
              </div>
            );
          })}
        </div>
        {displayConfirmation && (
          <div className="row-start-8 flex items-center pl-5">
            <button className="bg-gradient-to-r from-gray-800 via-gray-400 to-gray-600 p-1 rounded-xl">
              <div
                onClick={handleClick}
                className="rounded-xl py-2 px-6 text-white font-bold text-xl bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 "
              >
                Confirmation
              </div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Stages;
