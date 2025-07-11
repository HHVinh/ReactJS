import { useContext } from "react"
import { ThemeContext } from "./ThemeContext-Video47"

function Paragraph() {

    const context = useContext(ThemeContext)

    return (
        <p className={context.theme}>
            Module not found: Error: Can't resolve './Paragraph' in '/Users/vinh/Documents/ReactJS/reactjs/tiktok/src' RROR in ./src/Content.js 4:0-36 Module not found: Error: Can't resolve './Paragraph' in '/Users/vinh/Documents/ReactJS/reactjs/tiktok/src'
        </p>
    )
}

export default Paragraph