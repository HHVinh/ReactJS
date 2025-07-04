// import { tab } from "@testing-library/user-event/dist/tab"
// import { type } from "@testing-library/user-event/dist/type"
import { useEffect, useState } from "react"


// ***** Video 35 *****

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

// const tabs = ['posts', 'comments', 'albums']

// function Content() {

//     const [posts, setPosts] = useState([])
//     const [type, setType] = useState('posts')
//     const [showGoToTop, setShowGoToTop] = useState(false)

//     useEffect( () => {
//         fetch(`https://jsonplaceholder.typicode.com/${type}`)
//             .then(res => res.json())
//             .then(posts => {
//                 setPosts(posts);
//             })
//     }, [type])

//     useEffect(() => {

//         const handleScroll = () => {
//             console.log(window.scrollY)
//             if(window.scrollY >= 200) {
//                 // Show
//                 setShowGoToTop(true)
//             } else {
//                 // Hide
//                 setShowGoToTop(false)
//             }
//             // setShowGoToTop(window.scrollY >= 200) thay cho cả đoạn If phía trên
//         }

//         window.addEventListener('scroll', handleScroll)

//         // Cleanup function
//         return () => {
//             window.removeEventListener('scroll', handleScroll)
//         }
//     }, [])

//     return (
//         <div>
//             {tabs.map(tab => (
//                 <button 
//                     key={tab}
//                     style={type === tab ? {
//                         color: '#fff',
//                         backgroundColor: '#333',
//                     } : {}}
//                     onClick={() => setType(tab)}
//                     >
//                     {tab}
//                 </button>
//             ))}
//             {posts.map(post => (
//                 <li key={post.id}>{post.title || post.name}</li>
//             ))}

//             {showGoToTop && (
//                 <button
//                     style={{
//                         position: 'fixed',
//                         right: 20,
//                         bottom: 20,
//                     }}
//                 >
//                     Go to Top
//                 </button>
//             )}
//         </div>
//     )
// }

// export default Content









// -----------------
// Resize
function Content() {

    const [width, setWWidth] = useState(window.innerWidth)

    useEffect(() => {

        const handleResize = () => {
            setWWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        // Cleanuo function
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div>
            <h1>{width}</h1>
        </div>
    )
}

export default Content