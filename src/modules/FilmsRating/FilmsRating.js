import {useSelector} from 'react-redux';
import {getFilms} from './selectors/selectors';
import FilmRatingItem from './components/FilmRatingItem/FilmRatingItem';
import styles from './FilmsRating.module.scss';


const FilmsRating = () => {
    const films = useSelector(state=>getFilms(state))

    return ( <div className={styles.container}>
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