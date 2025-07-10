import { useReducer, useRef } from "react"


// --------------------
// ***** Video 45 *****
// useReducer
// 1. Init state: 0
// 2. Actions: Up (state + 1) / Down (state - 1)
// 3. Reducer
// 4. Dispatch


// 1. Init state: 
const initState = {
	job: '',
	jobs: []
}

// 2. Actions: Up (state + 1) / Down (state - 1)
const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete_job'

const setJob = payload => {
	return {
		type: SET_JOB,
		payload
	}
}

const addJob = payload => {
	return {
		type: ADD_JOB,
		payload
	}
}

const deleteJob = payload => {
	return {
		type: DELETE_JOB,
		payload
	}
}

// 3. Reducer
const reduce = (state, action) => {

	let newState

	switch(action.type) {
		case SET_JOB:
			newState = {
				...state,
				job: action.payload
			}
			break
		case ADD_JOB:
			newState = {
				...state,
				jobs: [...state.jobs, action.payload]
			}
			break	
		case DELETE_JOB:
			const newJob = [...state.jobs]

			newJob.splice(action.payload,1)

			newState = {
				...state,
				jobs: newJob
			}
			break
		default:
			throw new Error('Invalid action')
	}

	return newState
}

// 4. Dispatch

function App() {

	const [state, dispatch] = useReducer(reduce, initState)

	const {job, jobs} = state

	const inputRef = useRef()

	const handleSubmit = () => {
		dispatch(addJob(job))
		dispatch(setJob(''))

		inputRef.current.focus()
	}

	return(
		<div style={{padding: ' 0 20px'}}>
			<h3>Todo</h3>
			<input
				ref={inputRef}
				value={job}
				placeholder="Enter todo..."
				onChange={e => {
					dispatch(setJob(e.target.value))
				}}
			/>

			<button onClick={handleSubmit}>Add</button>
			<ul>
				{jobs.map((job, index) => (
					<li key={index}>
						{job}
						{' '}
						<span onClick={() => dispatch(deleteJob(index))}>
							 &times;
						</span>
						</li>
				))}
			</ul>
		</div>
	)
}

export default App