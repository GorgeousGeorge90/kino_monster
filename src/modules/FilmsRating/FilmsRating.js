import {useSelector} from 'react-redux';
import {getFilms} from './selectors/selectors';
import FilmRatingItem from './components/FilmRatingItem/FilmRatingItem';
import styles from './FilmsRating.module.scss';
import FilmRatingForm from "./components/FilmRatingForm/FilmRatingForm";



const FilmsRating = () => {
    const films = useSelector(state=>getFilms(state))


    return ( <div className={styles.container}>
            <h2>Add New Film to Favourite</h2>
            <FilmRatingForm/>
            <h3>Top Films</h3>
            <ul>
                {
                    films.map(film => <FilmRatingItem key={film.id}
                                                          {...film}
                    />)
                }
            </ul>
        </div>)
}

export default FilmsRating