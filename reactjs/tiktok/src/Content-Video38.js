// import { tab } from "@testing-library/user-event/dist/tab"
// import { type } from "@testing-library/user-event/dist/type"
import { useEffect, useState } from "react"


// ***** Video 38 *****

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


// function Content() {

//     const [count, setCount] = useState(1)

//     useEffect(() => {
//         console.log(`Mounted or Re-render`)

//         // Cleanup function
//         return () => {
//             console.log(`Cleanup`)
//         }
//     }, [count])

//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={() => setCount(count + 1)}>
//                 Click me!
//             </button>
//         </div>
//     )
// }





// --------------------

const lessons = [
    {
        id: 1,
        name: 'React JS là gì? Tại sao nên học ReactJS?'
    },
    {
        id: 2,
        name: 'SPA/MPA là gì?'
    },
    {
        id: 3,
        name: 'Arrow function'
    }
]
function Content() {

    const [lessonID, setLessonID] = useState(1)

    useEffect(() => {
        const handleComment = ({detail}) => {
            console.log(detail)
        }

        window.addEventListener(`lesson-${lessonID}`, handleComment )
        
        return () => {
            window.removeEventListener(`lesson-${lessonID}`, handleComment )
        }
    }, [lessonID])
        
    return (
        <div>
           <ul>
            {lessons.map(lesson => (
                <li
                    key={lesson.id}
                    style={{
                        color: lessonID === lesson.id ?
                        'red' :
                        '#333'
                    }}
                    onClick={() => setLessonID(lesson.id)}
                >
                    {lesson.name}
                </li>
            ))}
           </ul>
        </div>
    )
}

export default Content