import styles from './Contacts.module.scss';


const Contacts = () => {

    return (<section className={styles.container}>
            <h3>Contacts</h3>
            <ul>
                <li>
                    <span>Email:</span>
                    <span>Gambit47@yandex.ru</span>
                </li>
                <li>
                    <span>GitHub:</span>
                    <span><a href='https://github.com/GorgeousGeorge90'>https://github.com/GorgeousGeorge90</a></span>
                </li>
            </ul>
        </section>)
}

export default Contacts