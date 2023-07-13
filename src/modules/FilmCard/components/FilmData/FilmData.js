import styles from './FilmData.module.scss';
import {useDispatch} from "react-redux";
import {clearData} from "../../store/searchSlice";




const FilmData = ({Title,Year,Poster, Metascore,imdbRating,
    Released,Genre,Director,Actors,Plot,
}) => {

    const dispatch = useDispatch()

    return (<div className={styles.container}>
        <div className={styles.film_data_content}>
            <header className={styles.film_data_header}>
                <h3 className={styles.film_data_title}>{Title}</h3>
                <p className={styles.film_data_year}>{Year}</p>
                {/*<div className={styles.film_data_btn}>*/}
                {/*    <button onClick={() => dispatch(clearData)}>Back</button>*/}
                {/*</div>*/}
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
            <main className={styles.film_data_main}>
                <section className={styles.film_data_plot}>
                    <article>
                        <p><b>Plot:</b> {Plot}</p>
                    </article>
                </section>
                <section>
                    <ul>
                        <li><p><b>released:</b> {Released}</p></li>
                        <li><p><b>genre:</b> {Genre}</p></li>
                        <li><p><b>director:</b> {Director}</p></li>
                        <li><p><b>actors:</b> {Actors}</p></li>
                    </ul>
                </section>
            </main>
        </div>
    </div>)
}

export default FilmData