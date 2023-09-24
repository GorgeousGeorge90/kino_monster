import styles from './BaseButton.module.scss';
import { FC, ReactNode } from 'react';

type BaseButtonType = {
    title:string | ReactNode,
    handleClick?:()=>void,
}

const BaseButton:FC<BaseButtonType> = ({title,handleClick}) => {

    return (<button className={styles.btn}
                    onClick={handleClick}>
        {title}
    </button>)
}

export default BaseButton