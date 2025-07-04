// import { tab } from "@testing-library/user-event/dist/tab"
// import { type } from "@testing-library/user-event/dist/type"
import { useEffect, useState } from "react"


// ***** Video 33 & 34 *****

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
// // 1. useEffect(callback): 
//     // - Gọi callback mỗi khi component re-render
//     // - Gọi callback sau khi component them element vào DOM

// function Content() {

//     const [title, setTitle] = useState('')

//     useEffect( () => {
//         document.title = title
//     })

//     return (
//         <input 
//             value={title}
//             onChange={e => setTitle(e.target.value)}
//         />
//     )
// }


//----------------
// // 2. useEffect(callback, [])
//     // Chỉ gọi callback 1 lần sau khi component mounted

// function Content() {

//     const [title, setTitle] = useState('')
//     const [posts, setPosts] = useState([])

//     useEffect( () => {
//         fetch('https://jsonplaceholder.typicode.com/posts')
//             .then(res => res.json())
//             .then(posts => {
//                 setPosts(posts);
//             })
//     }, [])

//     return (
//         <div>
//             <input 
//                 value={title}
//                 onChange={e => setTitle(e.target.value)}
//             />
            
//             <ul>
//                 {posts.map(post => (
//                     <li key={post.id}>{post.title}</li>
//                 ))}
//             </ul>
//         </div>
//     )
// }


//----------------
// // 3. useEffect(callback [deps])
//     // - Callback sẽ được gọi lại mỗi khi deps thay đổi
// const tabs = ['posts', 'comments', 'albums']

// function Content() {

//     const [title, setTitle] = useState('')
//     const [posts, setPosts] = useState([])
//     const [type, setType] = useState('posts')

//     useEffect( () => {
//         fetch(`https://jsonplaceholder.typicode.com/${type}`)
//             .then(res => res.json())
//             .then(posts => {
//                 setPosts(posts);
//             })
//     }, [type])

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

//             <input 
//                 value={title}
//                 onChange={e => setTitle(e.target.value)}
//             />

//             <ul>
//                 {posts.map(post => (
//                     <li key={post.id}>{post.title || post.name}</li>
//                 ))}
//             </ul>
//         </div>
//     )
// }

// *** Ghi chú
// Cả 3 trường hợp trên thì callback luôn được gọi sau khi component mounted

const tabs = ['posts', 'comments', 'albums']

function Content() {

    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')

    useEffect( () => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts);
            })
    }, [type])

    return (
        <div>
            {tabs.map(tab => (
                <button 
                    key={tab}
                    style={type === tab ? {
                        color: '#fff',
                        backgroundColor: '#333',
                    } : {}}
                    onClick={() => setType(tab)}
                    >
                    {tab}
                </button>
            ))}

            <input 
                value={title}
                onChange={e => setTitle(e.target.value)}
            />

            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title || post.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Content