import { useContext } from 'react'
import Context from './Context48'

export const useStore = () => {
    const [state, dispatch] = useContext(Context)

    return [state, dispatch]
}