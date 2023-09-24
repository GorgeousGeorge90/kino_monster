import {
    Link,
    useMatch
} from "react-router-dom";
import styles from './CustomLink.module.scss';
import { FC, ReactNode } from 'react';

type CustomLinkType = {
    children:ReactNode,
    to:string,
}

const CustomLink:FC<CustomLinkType> = ({children, to}) => {
    const match = useMatch(to)

    return (<Link
        to={to}
        style={{color: match ? '#a78bfa':'#e5e5e5'}}
        className={styles.link}
    >
        {children}
    </Link>)
}

export default CustomLink