import {useDispatch, useSelector} from 'react-redux';
import {fetchNews} from './store/newsSlice';
import {getNews} from './selectors/selectors';
import NewsItem from './components/NewsItem/NewsItem';
import {useEffect} from 'react';
import styles from './NewsList.module.scss';
import {ReactComponent as Spinner} from './../../assets/img/spinner.svg';


const NewsList = () => {
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(fetchNews())
    },[])
    const {news,status,error} = useSelector(getNews)


    return (<section className={styles.news_list_main}>
        <h2 className={styles.news_list_title}>here the news!</h2>
        {
         news ? status === 'pending' ? <Spinner/> :
            <ul className={styles.news_list_list}>
            {
                news.map(item => <NewsItem key={item.id}
                                           {...item}
                />)
            }
        </ul>: <p className={styles.news_list_error}>{error}</p>
        }
        </section>)
}

export default NewsList