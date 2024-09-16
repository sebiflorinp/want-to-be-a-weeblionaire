function AnswerButton({correctAnswer, selectedAnswer, letter, answer, handleClick}) {
    let buttonBackgroundClass = "bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900"
    let letterColor = "text-amber-700"
    let answerColor = "text-white"

    if (selectedAnswer === letter) {
        buttonBackgroundClass = "bg-gradient-to-r from-amber-800 via-yellow-500 to-amber-800"
        letterColor = "text-white"
        answerColor = "text-black"
    }

    if (correctAnswer === letter) {
        buttonBackgroundClass = "bg-gradient-to-r from-green-900 via-green-400 to-green-900 animate-pulse"
        letterColor = "text-black"
        answerColor = "text-white"
    }

    return (
        <button value={letter} onClick={() => handleClick(letter)} className="rounded-xl bg-gradient-to-r from-gray-800 via-gray-400 to-gray-600 p-1.5">
            <div className={"flex justify-center items-center h-full w-full rounded-xl p-2 text-xl " + buttonBackgroundClass}>
                {answer !== "" && <span className={letterColor}>{letter}.</span>}
                {answer !== "" && <span className={answerColor}> {answer}</span>}
            </div>
        </button>
    )
}

export default AnswerButton;