import styles from './Navbar.module.scss';
import CustomLink from '../../../UI/CustomLink/CustomLink';


const Navbar = () => {

    return (<nav className={styles.navbar_container}>
            <ul className={styles.navbar_list}>
                <li className={styles.navbar_list_item}><CustomLink to='/'>Films</CustomLink></li>
                <li className={styles.navbar_list_item}><CustomLink to='news'>News</CustomLink></li>
                <li className={styles.navbar_list_item}><CustomLink to='info'>Info</CustomLink></li>
            </ul>
        </nav>)
}

export default Navbar