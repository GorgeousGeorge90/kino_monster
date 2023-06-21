import styles from './Phrase.module.scss';

const Phrase = ({quote,author}) => {

    return (<section className={styles.container}>
            <h2>{quote}</h2>
            <p className={ 'font-bold'}>{author}</p>
        </section>)
}

export default Phrase