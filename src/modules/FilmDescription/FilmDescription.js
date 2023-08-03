import styles from './FilmDescription.module.scss';
import ListItem from './components/ListItem/ListItem';

const FilmDescription = ({
                             titleOriginal,
                             image,
                             description,
                             release,
                             countries,
                             genres,
                             rating
                         }) => {

    const rate = rating.substring(0, rating.length - 3 )

    return (<div className={styles.film_desc_container}>
        <div className={styles.film_desc_content}>
            <header className={styles.film_desc_header}>
                <h2 className={styles.film_desc_header_title}>{titleOriginal}</h2>
                    <p>{release}</p>
            </header>
        <main className={styles.film_desc_main}>
            <aside className={styles.film_desc_poster}>
                <img src={image} alt="pic1"/>
            </aside>
            <section className={styles.film_desc_info}>
                <p>{description}</p>
                <p><b>rating: </b>{rate}</p>
                <>
                   <ListItem title={'genres'}
                             array={genres}
                   />
                   <ListItem title={'countries'}
                             array={countries}
                   />
                </>
            </section>
        </main>
    </div>
    </div>)
}

export default FilmDescription