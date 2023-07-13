import styles from './Phrase.module.scss';

const Phrase = ({quote,author}) => {

    return (<section className={styles.phrase_container}>
            <h2 className={styles.phrase_title}>{quote}</h2>
            <p className={styles.phrase_author}>{author}</p>
    </section>)
}

export default Phrase