// import { tab } from "@testing-library/user-event/dist/tab"
// import { type } from "@testing-library/user-event/dist/type"
import { useEffect, useState } from "react"


// ***** Video 36 *****

// Events: Add / Remove event listener
// Observer pattern: Subscribe / Unsubscribe
// Closure
// Timers: setInterval, setTimeout, clearInterval, clearTimeout
// useState
// Mounted / unmounted
// ===
// Call API

/**
1. Update DOM
    - F8 blog title
2. Call API
3. Listen DOM events
    - Scroll
    - Resize
4. Cleanup
    - Remove listener / Unsubscribe
    - Clear timer
*/


//----------------
// 1. useEffect(callback): 
    // - Gọi callback mỗi khi component re-render
    // - Gọi callback sau khi component them element vào DOM



//----------------
// 2. useEffect(callback, [])
    // Chỉ gọi callback 1 lần sau khi component mounted


//----------------
// 3. useEffect(callback [deps])
    // - Callback sẽ được gọi lại mỗi khi deps thay đổi

// *** Ghi chú: Cả 3 trường hợp trên:
//  1. Callback luôn được gọi sau khi component mounted
//  2. Cleanup function luôn được gọi trước khi component unmounted
//  3. Cleanup function luôn được gọi trước khi callback được gọi (trừ lần mounted)


function Content() {

    const [countDown, setCountDown] = useState(180)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCountDown(prevState => prevState - 1)
        }, 1000)

        // Cleanup khi component unmount
        return () => clearInterval(intervalId)
    }, [])

    return (
        <div>
            <h1>{countDown}</h1>
        </div>
    )
}

export default Content