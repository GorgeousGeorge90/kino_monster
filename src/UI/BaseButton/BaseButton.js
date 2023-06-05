import styles from './BaseButton.module.scss';


const BaseButton = ({value}) => {

    return (<button className={styles.btn}>{value}</button>)
}

export default BaseButton