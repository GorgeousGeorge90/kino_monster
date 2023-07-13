import {ReactComponent as Vk} from './img/vk1.svg';
import {ReactComponent as Gh} from './img/gh.svg';
import {ReactComponent as Tg} from './img/tg.svg';
import styles from './Footer.module.scss';


const Footer = () => {

    return (<div className={styles.footer_container}>
        <footer className={styles.footer}>
        <a  className={'self-center place-self-center'}
            href='https://vk.com/gorgeous_george90'>
            <Vk width={'2em'} className={'cursor-pointer hover:fill-neutral-400 fill-neutral-200'}/>
        </a>
        <a  className={'place-self-center'}
            href='https://t.me/MrStandart90'>
            <Tg width={'2.8em'} className={'cursor-pointer hover:fill-neutral-400 fill-neutral-200'}/>
        </a>
        <a className={'place-self-center'}
            href='https://github.com/GorgeousGeorge90'>
            <Gh className={'cursor-pointer hover:fill-neutral-400 fill-neutral-200 scale-125'}/>
        </a>
        <p className={'text-neutral-200 font-bold place-self-center'}>check my GH for other works</p>
    </footer>
</div>)
}

export default Footer