import {SET_JOB, ADD_JOB, DELETE_JOB} from './constants'

// 2. Actions: Up (state + 1) / Down (state - 1)

export const setJob = payload => {
	return {
		type: SET_JOB,
		payload
	}
}

export const addJob = payload => {
	return {
		type: ADD_JOB,
		payload
	}
}

export const deleteJob = payload => {
	return {
		type: DELETE_JOB,
		payload
	}
}