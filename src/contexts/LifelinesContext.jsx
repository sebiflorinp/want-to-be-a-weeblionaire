import {createContext, useState} from "react";

export const LifelinesContext = createContext({
    is5050Used: false,
    setIs5050Used: () => {},
    isATAUsed: false,
    setIsATAUsed: () => {},
    isPAFUsed: false,
    setIsPAFUsed: () => {},

});

export default function LifelinesContextProvider({ children }) {
    const [is5050Used, setIs5050Used] = useState(false)
    const [isATAUsed, setIsATAUsed] = useState(false)
    const [isPAFUsed, setIsPAFUsed] = useState(false)

    const contextValue = {
        is5050Used,
        setIs5050Used,
        isATAUsed,
        setIsATAUsed,
        isPAFUsed,
        setIsPAFUsed
    }

    return (
        <LifelinesContext.Provider value={contextValue}>
            {children}
        </LifelinesContext.Provider>
    )
}