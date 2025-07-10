import { useReducer } from "react"


// --------------------
// ***** Video 44 *****
// useReducer
// 1. Init state: 0
// 2. Actions: Up (state + 1) / Down (state - 1)
// 3. Reducer
// 4. Dispatch


// 1. Init state: 0
const initState = 0

// 2. Actions: Up (state + 1) / Down (state - 1)
const UP_ACTION = 'up'
const DOWN_ACTION = 'down'

// 3. Reducer
const reduce = (state, action) => {
	switch(action){
		case UP_ACTION:
			return state + 1
		case DOWN_ACTION:
			return state - 1
		default:
			throw new Error('Invalid action')
	}
}

// 4. Dispatch

function App() {

	const [count, dispatch] = useReducer(reduce, initState)

	return(
		<div style={{padding: ' 0 20px'}}>
			<h1>{count}</h1>
			<button 
				onClick={() => dispatch(DOWN_ACTION)}
			>
				Down
			</button>

			<button 
				onClick={() => dispatch(UP_ACTION)}
			>
				Up
			</button>
		</div>
	)
}

export default App