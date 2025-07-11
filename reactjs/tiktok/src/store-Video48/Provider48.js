import { useReducer } from 'react'
import Context from './Context48'
import reducer, { initState } from './reducer48'
import logger from './logger48'

function Provider({ children }) {

    const [state, dispatch] = useReducer(logger(reducer), initState)

    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}

export default Provider