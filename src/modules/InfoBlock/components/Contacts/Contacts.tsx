import styles from './Contacts.module.scss';


const Contacts = () => {

    return (<section className={styles.container}>
            <h2>Contacts</h2>
            <ul>
                <li>
                    <span className={styles.contacts_info}>Email:</span>
                    <span className={styles.contacts_data}>Gambit47@yandex.ru</span>
                </li>
                <li>
                    <span className={styles.contacts_info}>GitHub:</span>
                    <span className={styles.contacts_data}><a href='https://github.com/GorgeousGeorge90'>https://github.com/GorgeousGeorge90</a></span>
                </li>
            </ul>
        </section>)
}

export default Contacts