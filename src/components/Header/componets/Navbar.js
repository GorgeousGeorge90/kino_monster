import styles from './Navbar.module.scss';
import CustomLink from "../../../UI/CustomLink";


const Navbar = () => {


    return (<nav className={styles.navbar}>
            <ul>
                <li><CustomLink to='/'>Film</CustomLink></li>
                <li><CustomLink to='contacts'>Contacts</CustomLink></li>
            </ul>
        </nav>)
}

export default Navbar