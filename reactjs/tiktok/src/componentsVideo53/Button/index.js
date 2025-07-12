import clsx from 'clsx'
import styles from './Button.module.scss'

function Button( {primary, onClick} ) {

    const classes = clsx(
        styles.btn,
        styles[primary]
    )
    
    return (
        <button className={classes} onClick={onClick}>
            Click me
        </button>
    )
}

export default Button