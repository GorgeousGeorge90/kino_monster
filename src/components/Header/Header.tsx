import styles from './Header.module.scss';
import logo from '../../assets/img/logo.png';
import Navbar from "./componets/Navbar";
import Switcher from "../Switcher/Switcher";

const Header = () => {

    return (<header className={styles.header_container}>
        <div className={styles.header_content}>
            <section className={styles.header_logo}>
                <img src={logo} alt="logo"/>
            </section>
            <section className={styles.header_info}>
                <h1 className={styles.header_info_title}>MovieMonster</h1>
                <p className={styles.header_info_text}>the world of cinema</p>
            </section>
            <Navbar/>
            <section className={styles.header_btn}>
                <Switcher/>
            </section>
        </div>
    </header>)
}

export default Header