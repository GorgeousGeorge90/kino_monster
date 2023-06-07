import styles from './BaseButton.module.scss';


const BaseButton = ({children}) => {

    return (<button className={styles.btn}>
        {children}
    </button>)
}

export default BaseButton