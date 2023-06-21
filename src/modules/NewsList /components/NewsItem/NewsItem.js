import styles from './NewsItem.module.scss';



const NewsItem = ({title,url,source}) => {

    return (<li className={styles.container}>
        <section className={styles.item_content}>
            <h3 className={styles.item_title}>{title}</h3>
            <p className={styles.item_link}><a href={url}>{url}</a></p>
            <p className={styles.item_source}>source:{source}</p>
        </section>
    </li>)
}

export default NewsItem