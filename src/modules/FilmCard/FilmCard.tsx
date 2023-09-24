import { getSearchError, getSearchFilm, getSearchStatus } from './selectors/selectors';
import styles from './FilmCard.module.scss';
import FilmSearchForm from "./components/FilmSearchForm/FilmSearchForm";
import { ReactComponent as Spinner } from '../../assets/img/spinner.svg';
import FilmItem from "./components/FilmItem/FilmItem";
import { useAppSelector } from '../../store/hooks';


const FilmCard = () => {
    const film = useAppSelector(getSearchFilm)
    const status = useAppSelector(getSearchStatus)
    const error = useAppSelector(getSearchError)

    return (<div className={styles.film_card_container}>
        <div className={styles.film_card_content}>
            <FilmSearchForm/>
            {
                error ? <span className={styles.rating_error}>{error}</span> : null
            }
            {
                !film ? <p className={styles.film_card_text}>don't have any requests</p> : status === 'pending' ?
                    <Spinner/> : <FilmItem {...film}/>
            }
        </div>
    </div>)
}

export default FilmCard