import styles from './Header.module.scss';
import logo from './img/logo.png';

const Header = () => {

    return (<div className={styles.container}>
        <header>
            <div className={styles.logo}>
                <img src={logo} alt="logo"/>
            </div>
            <div className={styles.title}>
                <h3>MovieMonster</h3>
                <p>SPA about films</p>
            </div>
            <nav>

            </nav>
        </header>
    </div>)
}

export default Header