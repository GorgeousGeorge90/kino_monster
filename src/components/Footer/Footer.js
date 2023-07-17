import {ReactComponent as Vk} from './img/vk1.svg';
import {ReactComponent as Gh} from './img/gh.svg';
import {ReactComponent as Tg} from './img/tg.svg';
import styles from './Footer.module.scss';


const Footer = () => {

    return (<div className={styles.footer_container}>
        <footer className={styles.footer}>
        <a  className={'self-center place-self-center'}
            href='https://vk.com/gorgeous_george90'>
            <Vk width={'2em'} className={styles.footer_icon}/>
        </a>
        <a  className={'place-self-center'}
            href='https://t.me/MrStandart90'>
            <Tg width={'2.8em'} className={styles.footer_icon}/>
        </a>
        <a className={'place-self-center'}
            href='https://github.com/GorgeousGeorge90'>
            <Gh className={styles.footer_icon_it}/>
        </a>
        <p className={'text-neutral-100 place-self-center'}><i>check my GH for other works</i></p>
    </footer>
</div>)
}

export default Footer