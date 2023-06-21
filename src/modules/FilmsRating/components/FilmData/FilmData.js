import styles from './FilmData.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {getCurrentFilm} from "../../selectors/selectors";
import {clearFilm} from "../../store/searchSlice";




const FilmData = () => {
    const {
        Title,Year,Poster,imdbRating,Genre,Director,
        Actors,Plot,Released,Awards,Metascore

    } = useSelector(getCurrentFilm)
    const dispatch = useDispatch()

    return (<div className={styles.container}>
        <div className={styles.film_data_content}>
            <header className={styles.film_data_header}>
                <h1>{Title}</h1>
                <div className={styles.film_data_year}>
                    {Year}
                </div>
                <div className={styles.film_data_btn}>
                    <button onClick={() => dispatch(clearFilm)}>Back</button>
                </div>
            </header>
            <aside className={styles.film_data_left}>
                <div className={styles.film_data_poster}>
                    <img src={Poster} alt="poster"/>
                </div>
                <ul className={styles.film_data_scores}>
                    <li>metascore:{Metascore}</li>
                    <li>imdb:{imdbRating}</li>
                </ul>
            </aside>
            <section>
                <ul>
                    <li>released:{Released}</li>
                    <li>genre:{Genre}</li>
                    <li>director:{Director}</li>
                    <li>actors:{Actors}</li>
                    <li>awards:{Awards}</li>
                </ul>
            </section>
            <article className={styles.film_data_plot}>
                Plot:{Plot}
            </article>
        </div>
    </div>)
}

export default FilmData