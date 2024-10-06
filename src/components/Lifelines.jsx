import L5050 from "../assets/5050.webp"
import L5050Used from "../assets/5050used.webp"
import ATA from "../assets/ATA.webp"
import ATAUsed from "../assets/ATAused.webp"
import PAF from "../assets/PAF.webp"
import PAFUsed from "../assets/PAFused.webp"
import {useContext, useState} from "react";
import {LifelinesContext} from "../contexts/LifelinesContext.jsx";

function Lifelines({lifeline5050}) {
    const {
        is5050Used,
        isATAUsed,
        isPAFUsed,
        setIs5050Used,
        setIsATAUsed,
        setIsPAFUsed
    } = useContext(LifelinesContext);

    const handle5050Click = () => {
        setIs5050Used(true)
        lifeline5050()
    }
    const handleATAClick = () => setIsATAUsed(true)
    const handlePAFClick = () => setIsPAFUsed(true)

    return (
        <div className="row-start-1 flex pb-5 gap-8">
            {
                !is5050Used ?
                    <img onClick={handle5050Click} className="max-w-28" src={L5050} alt="5050"/> :
                    <img className="max-w-28" src={L5050Used} alt="5050Used"/>
            }
            {
                !isATAUsed ?
                    <img onClick={handleATAClick} className="max-w-28" src={ATA} alt="ATA"/> :
                    <img className="max-w-28" src={ATAUsed} alt="ATAUsed"/>
            }
            {
                !isPAFUsed ?
                    <img onClick={handlePAFClick} className="max-w-28" src={PAF} alt="PFA"/> :
                    <img className="max-w-28" src={PAFUsed} alt="PFAUsed"/>
            }
        </div>
    )
}

export default Lifelines