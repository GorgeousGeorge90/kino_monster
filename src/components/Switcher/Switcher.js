import {ReactComponent as LightIcon} from './img/icon-sun.svg';
import {ReactComponent as DarkIcon} from './img/icon-moon.svg';
import {useLayoutEffect, useState} from "react";
import styles from './Switcher.module.scss';


const Switcher = () => {
    const [theme, setTheme] = useState('dark')

    useLayoutEffect(()=> {
        const app = document.querySelector('#app')
        app.setAttribute('theme',`${theme}`)
    })


    const ThemeIcon = theme === 'light' ? <>
        <span>light</span>
        <LightIcon/>
    </>: <>
        <span>dark</span>
        <DarkIcon/>
    </>

    const onClick = ()=> {
         theme === 'light' ? setTheme('dark'): setTheme('light')
    }


    return (<div className={styles.btn}
                 onClick={onClick}>
        {ThemeIcon}
    </div>)
}

export default Switcher