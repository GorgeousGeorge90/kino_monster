import {useSelector} from 'react-redux';
import {getSearch} from './selectors/selectors';
import styles from './FilmCard.module.scss';
import FilmSearchForm from "./components/FilmSearchForm/FilmSearchForm";
import {ReactComponent as Loader} from '../../assets/img/spinner.svg';
import FilmData from "./components/FilmData/FilmData";


const FilmCard = () => {
    const {film,status,error} = useSelector(getSearch)


    return (<section className={styles.container}>
        <h2>get new film</h2>
        <FilmSearchForm/>
        {
            error ? <span className={styles.rating_error}>{error}</span> : null
        }
        <h3>film info</h3>
        {
            !film ? <p>don't have any results</p>: status === 'pending' ? <Loader/>: <FilmData {...film}/>
        }
    </section>)
}

export default FilmCard