import styles from './Phrase.module.scss';
import { FC } from 'react';
import { PhraseItemType } from '../../types/types';
import {useAppSelector} from "../../../../store/hooks";
import {getPhrase} from "../../selectors/selectors";


const Phrase = () => {
    const phrase = useAppSelector(getPhrase)

    return (<section className={styles.phrase_container}>
            <h2 className={styles.phrase_title}>{phrase?.quote}</h2>
            <p className={styles.phrase_author}>{phrase?.author}</p>
    </section>)
}

export default Phrase