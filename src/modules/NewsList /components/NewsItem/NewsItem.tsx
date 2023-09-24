import styles from './NewsItem.module.scss';
import logo from './../../img/logo.svg';
import { FC } from 'react';
import { NewsType } from '../../types/types';



const NewsItem:FC<NewsType> = ({title,abstract,web_url,source,image,byline}) => {

    return (<li className={styles.news_item_container}>
        <div className={styles.news_item_content}>
            <a className={styles.news_item_link}
               href={web_url}
               target={'_blank'}>
                <img className={styles.news_item_link_pic}
                     src={`https://www.nytimes.com/${image}`} alt={logo}/>
            </a>
            <section className={styles.news_item_info}>
                <h3 className={styles.news_item_info_title}>
                    {title}
                    <span className={styles.news_item_title_writer}>{byline}</span>
                </h3>
                <p className={styles.news_item_info_info}>{abstract}</p>
                <p className={styles.news_item_info_source}>{source}</p>
            </section>
        </div>
    </li>)
}

export default NewsItem