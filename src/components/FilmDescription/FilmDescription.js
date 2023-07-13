import styles from './FilmDescription.module.scss';




const FilmDescription = ({
                             title,
                             poster_path,
                             release_date,
                             vote_count,
                             vote_average,
                             overview,
                             adult
                         }) => {

    return (<div className={styles.film_desc_container}>
        <div className={styles.film_desc_content}>
        <header className={styles.film_desc_header}>
            <h2 className={styles.film_desc_header_title}>{title}</h2>
            <p>{release_date}</p>
        </header>
        <main className={styles.film_desc_main}>
            <aside className={styles.film_desc_poster}>
                <img src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt="pic1"/>
            </aside>
            <section className={styles.film_desc_info}>
                <p>{overview}</p>
                <p><b>votes: </b>{vote_count}</p>
                <p><b>rating: </b>{vote_average}</p>
                {
                    adult ? <p className={'font-bold text-red-300 text-lg'}>NC-17</p>:
                        <p className={'font-bold text-neutral-300 text-lg'}>PG</p>
                }
            </section>
        </main>
    </div>
    </div>)
}

export default FilmDescription