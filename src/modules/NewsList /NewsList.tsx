import { fetchNews } from './store/newsSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getNews, getNewsStatus} from './selectors/selectors';
import NewsItem from './components/NewsItem/NewsItem';
import { useEffect } from 'react';
import styles from './NewsList.module.scss';
import { ReactComponent as Spinner } from './../../assets/img/spinner.svg';


const NewsList = () => {
    const dispatch = useAppDispatch()
    useEffect(()=> {
        dispatch(fetchNews())
    },[])

    const news = useAppSelector(getNews)
    const status = useAppSelector(getNewsStatus)


    return (<div className={styles.news_list_container}>
        <div className={styles.news_list_content}>
        <h2 className={styles.news_list_title}>here the news!</h2>
        {
         news ? status === 'pending' ? <Spinner/> :
            <ul className={styles.news_list_list}>
            {
                news.map((item,i) => <NewsItem key={i}
                                               {...item}
                />)
            }
        </ul>:null
        }
        </div>
        </div>)
}

export default NewsList