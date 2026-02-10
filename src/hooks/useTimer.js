import { useEffect, useState } from "react";

export function useTimer(sec) {
    const [time, setTime] = useState(sec)
    useEffect(() => {
        if (time === 0) return; 
        const interval = setInterval(() => setTime((prev) => prev - 1), 1000)
        return () => clearInterval(interval)
    }, [time])

    return { time, reset: () => setTime(sec) }

}