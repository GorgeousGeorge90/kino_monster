import {useSelector} from 'react-redux';
import {getSearch} from './selectors/selectors';
import styles from './FilmCard.module.scss';
import FilmSearchForm from "./components/FilmSearchForm/FilmSearchForm";
import {ReactComponent as Loader} from '../../assets/img/spinner.svg';
import FilmData from "./components/FilmData/FilmData";


const FilmCard = () => {
    const {film,status,error} = useSelector(getSearch)


    return (<section className={styles.film_card_container}>
        <FilmSearchForm/>
        {
            error ? <span className={styles.rating_error}>{error}</span> : null
        }
        {
            !film ? <p className={styles.film_card_text}>don't have any requests</p>: status === 'pending' ? <Loader/>: <FilmData {...film}/>
        }
    </section>)
}

export default FilmCard