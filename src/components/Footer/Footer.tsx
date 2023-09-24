import {ReactComponent as Vk} from './img/vk1.svg';
import {ReactComponent as Gh} from './img/gh.svg';
import {ReactComponent as Tg} from './img/tg.svg';
import styles from './Footer.module.scss';


const Footer = () => {

    return (<footer className={styles.footer_container}>
        <div className={styles.footer_content}>
            <a className={'place-self-center'}
               href='https://github.com/GorgeousGeorge90'>
                <div className={styles.footer_link_icon}>
                    <Gh fill={'white'}/>
                </div>
            </a>
            <p className={styles.footer_info}>
                check my GH for other works
            </p>
        </div>
    </footer>)
}

export default Footer