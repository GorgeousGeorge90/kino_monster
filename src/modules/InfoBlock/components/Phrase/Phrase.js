import styles from './Phrase.module.scss';

const Phrase = ({quote,author}) => {

    return (<section className={styles.container}>
            <h3>{quote}</h3>
            <p>{author}</p>
        </section>)
}

export default Phrase