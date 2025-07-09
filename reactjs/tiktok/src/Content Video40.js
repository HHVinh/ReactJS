import { useRef, useState, useEffect } from "react"

// Lưu các giá trị qua một tham chiếu bên ngoài
// Function component

// ***** Video 40 *****


// --------------------



function Content() {

    const [count, setCount] = useState(60)

    const timerID = useRef()
    const prevCount = useRef()
    const h1Ref = useRef()

    useEffect(() => {
        prevCount.current = count
    }, [count])
    
    useEffect(() => {
        const rect = h1Ref.current.getBoundingClientRect()
        console.log(rect)
        console.log(h1Ref.current)
    })

    const handleStart = () => {
        if (timerID.current) return

        timerID.current = setInterval(() => {
            setCount(prevCount => prevCount - 1)
        }, 1000)
    }

    const handleStop = () => {
        clearInterval(timerID.current)
        timerID.current = null
    }
        
    return (
        <div style={{padding: 20}}>
           <h1 ref={h1Ref}>{count}</h1>
           <button onClick={handleStart}>Start</button>
           <button onClick={handleStop}>Stop</button>
        </div>
    )
}

export default Content