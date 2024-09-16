import {Link} from "react-router-dom";

function MainPage() {
    return (
        <div className="flex h-screen w-screen justify-center items-center">
            <Link to="/game" className="rounded-xl bg-gradient-to-r from-gray-800 via-gray-400 to-gray-600 p-1.5">
                <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 rounded-xl px-20 py-4">
                    <p className="font-bold text-xl text-white">Play</p>
                </div>
            </Link>
        </div>
    )
}

export default MainPage