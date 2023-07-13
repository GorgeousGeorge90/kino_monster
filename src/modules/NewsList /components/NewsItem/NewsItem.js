import styles from './NewsItem.module.scss';
import {ReactComponent as Logo} from './../../img/logo.svg';



const NewsItem = ({title,url,source}) => {

    return (<li className={styles.container}>
        <section className={styles.item_content}>
            <Logo/>
            <div className={styles.item_info}>
                <h3 className={styles.item_title}>{title}</h3>
                <p className={styles.item_link}><a href={url}>{url}</a></p>
                <p className={styles.item_source}>source:{source}</p>
            </div>
        </section>
    </li>)
}

export default NewsItem