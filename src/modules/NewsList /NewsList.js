import {useDispatch, useSelector} from "react-redux";
import {fetchNews} from "./store/newsSlice";
import {getNews} from "./selectors/selectors";
import NewsItem from "./components/NewsItem/NewsItem";
import {useEffect} from "react";


const NewsList = () => {
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(fetchNews())
    },[])
    const news = useSelector(getNews)


    return (<>
        <ul>
            {
                news.map(item => <NewsItem key={item.id}
                                               {...item}
                />)
            }
        </ul>
        </>)
}

export default NewsList