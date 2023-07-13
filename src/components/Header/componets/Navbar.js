import styles from './Navbar.module.scss';
import CustomLink from "../../../UI/CustomLink/CustomLink";


const Navbar = () => {


    return (<nav className={styles.navbar}>
            <ul>
                <li><CustomLink to='/'>Films</CustomLink></li>
                <li><CustomLink to='news'>News</CustomLink></li>
                <li><CustomLink to='info'>Info</CustomLink></li>
            </ul>
        </nav>)
}

export default Navbar