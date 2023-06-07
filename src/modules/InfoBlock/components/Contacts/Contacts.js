import styles from './Contacts.module.scss';


const Contacts = () => {

    return (<section className={styles.container}>
            <h3><i>Contacts</i></h3>
            <ul>
                <li>
                    <span><b>Email:</b></span>
                    <span>Gambit47@yandex.ru</span>
                </li>
                <li>
                    <span><b>GitHub:</b></span>
                    <span><a href='https://github.com/GorgeousGeorge90'>https://github.com/GorgeousGeorge90</a></span>
                </li>
            </ul>
        </section>)
}

export default Contacts