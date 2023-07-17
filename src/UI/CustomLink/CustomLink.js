import {
    Link,
    useMatch
} from "react-router-dom";
import styles from './CustomLink.module.scss';

const CustomLink = ({children, to, ...props}) => {
    const match = useMatch(to)

    return (<Link
        to={to}
        props={props}
        style={{color: match ? '#a78bfa':'#e5e5e5'}}
        className={styles.link}
    >
        {children}
    </Link>)
}

export default CustomLink