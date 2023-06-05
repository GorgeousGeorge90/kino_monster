import styles from './Navbar.module.scss';
import CustomLink from "../../../UI/CustomLink/CustomLink";


const Navbar = () => {


    return (<nav className={styles.navbar}>
            <ul>
                <li><CustomLink to='/'>Film</CustomLink></li>
                <li><CustomLink to='rating'>Rating</CustomLink></li>
            </ul>
        </nav>)
}

export default Navbar