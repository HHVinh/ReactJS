import {memo} from "react"



// --------------------
// ***** Video 41 *****


// function Content() {
//     console.log('re-render')
//     return (
//        <h2>HELLO ANH EM F8</h2>
//     )
// }

// export default memo(Content)






// --------------------
// ***** Video 42 *****


function Content({onIncrease}) {
    console.log('re-render')
    return (
       <>
            <h2>HELLO ANH EM F8</h2>
            <button onClick={onIncrease}>Click me!</button>
       </>

    )
}

export default memo(Content)