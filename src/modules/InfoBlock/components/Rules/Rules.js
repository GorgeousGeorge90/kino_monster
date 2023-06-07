import styles from './Rules.module.scss';


const Rules = () => {

    return (<section className={styles.container}>
        <h2>Rules</h2>
        <ul className={styles.rules_list}>
            <li>1.Don't be rude in comments!</li>
            <li>2.Fill films inputs with correct data!</li>
            <li>3.Have a nice day!</li>
        </ul>
    </section>)
}

export default Rules