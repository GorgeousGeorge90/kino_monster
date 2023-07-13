import styles from './BaseButton.module.scss';


const BaseButton = ({children,handleClick}) => {

    return (<button className={styles.btn}
                    onClick={handleClick}>
        {children}
    </button>)
}

export default BaseButton