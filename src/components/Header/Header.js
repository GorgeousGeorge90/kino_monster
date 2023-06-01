import styles from './Header.module.scss';
import logo from './img/logo.png';
import Navbar from "./componets/Navbar";
import Switcher from "../Switcher/Switcher";

const Header = () => {

    return (<div className={styles.container}>
        <header>
            <div className={styles.logo}>
                <img src={logo} alt="logo"/>
            </div>
            <div className={styles.title}>
                <h3><i>MovieMonster</i></h3>
                <p>SPA about films</p>
            </div>
            <div className={styles.nav}>
                <Navbar/>
            </div>
            <div className={styles.btn}>
                <Switcher/>
            </div>
        </header>
    </div>)
}

export default Header