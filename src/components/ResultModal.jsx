function ResultModal({handleRestart, reward}) {
    return (
        <div className="fixed flex justify-center items-center h-screen w-screen bg-black bg-opacity-35">
            <div className="p-1.5 bg-gradient-to-r from-gray-800 via-gray-400 to-gray-600 rounded-xl">
                <div className="flex flex-col py-10 px-20 justify-center items-center gap-10 rounded-xl font-bold text-3xl bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950 ">
                    <div className="flex gap-2">
                        <p className="text-white ">You have won</p>
                        <p className="text-amber-600">{reward}</p>
                    </div>
                    <button onClick={handleRestart} className="p-1.5 bg-gradient-to-r from-gray-800 via-gray-400 to-gray-600 rounded-xl">
                        <div className="text-black bg-gradient-to-r from-amber-800 via-amber-600 to-amber-800 rounded-xl px-20 py-2">
                            Restart
                        </div>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default ResultModal;