import styles from './FilmData.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {getCurrentFilm} from "../../selectors/selectors";
import {clearFilm} from "../../store/ratingSlice";




const FilmData = () => {
    const {
        Title,Year,Poster,imdbRating,Genre,Director,
        Actors,Plot,Released,Awards,Metascore

    } = useSelector(state=> getCurrentFilm(state))
    const dispatch = useDispatch()

    return (<div className={styles.container}>
        <header className={styles.page_header}>
            <h1>{Title}</h1>
            <div className={styles.year}>
                {Year}
            </div>
            <div className={styles.btn}>
                <button onClick={()=>dispatch(clearFilm)}>Back</button>
            </div>
        </header>
        <aside className={styles.page_left}>
            <div>
                <img src={Poster} alt="poster"/>
            </div>
            <ul className={styles.page_list}>
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
        <article className={styles.page_content}>
            Plot:{Plot}
        </article>
    </div>)
}

export default FilmData