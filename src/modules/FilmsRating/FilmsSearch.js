import {useSelector} from 'react-redux';
import {getFilms, getSearch} from './selectors/selectors';
import FilmItem from './components/FilmItem/FilmItem';
import styles from './FilmsSearch.module.scss';
import FilmSearchForm from "./components/FilmSearchForm/FilmSearchForm";
import {ReactComponent as Loader} from '../../assets/img/spinner.svg';
import FilmData from "./components/FilmData/FilmData";


const FilmsSearch = () => {
    const {currentFilm, error, status} = useSelector(getSearch)
    const films = useSelector(getFilms)


    if (currentFilm) {
        return <section className={styles.container}>
            <FilmData/>
        </section>
    }

    return (<section className={styles.container}>
        <h2>get new film</h2>
        <FilmSearchForm/>
        {
            error ? <span className={styles.rating_error}>{error}</span> : null
        }
        <h3>Top Films</h3>
        {
            status === 'pending' ? <Loader/>:
                <ul>
                    {
                        films.map(film => <FilmItem key={film.id}
                                                        {...film}
                        />)
                    }
                </ul>
        }
    </section>)
}

export default FilmsSearch