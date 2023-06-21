import styles from './Header.module.scss';
import logo from './img/logo.png';
import Navbar from "./componets/Navbar";
import Switcher from "../Switcher/Switcher";

const Header = () => {

    return (<div className={styles.container}>
        <header className={styles.app_header}>
            <div className={styles.header_logo}>
                <img src={logo} alt="logo"/>
            </div>
            <div className={styles.header_title}>
                <h1>MovieMonster</h1>
                <p>SPA about films</p>
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