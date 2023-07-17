import styles from './Header.module.scss';
import logo from './img/logo.png';
import Navbar from "./componets/Navbar";
import Switcher from "../Switcher/Switcher";

const Header = () => {

    return (<div className={styles.container}>
        <header className={styles.header}>
            <div className={styles.header_logo}>
                <img src={logo} alt="logo"/>
            </div>
            <div className={styles.header_info}>
                <h1 className={styles.header_info_title}>MovieMonster</h1>
                <p className={styles.header_info_text}>SPA about films</p>
            </div>
            <div className={styles.header_nav}>
                <Navbar/>
            </div>
            <div className={styles.header_btn}>
                <Switcher/>
            </div>
        </header>
    </div>)
}

export default Header