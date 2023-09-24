import styles from './FilmDescription.module.scss';
import ListItem from './components/ListItem/ListItem';
import { FC } from 'react';
import { FilmType } from '../../modules/FilmsList/types/types';
import SupportServices from '../../utils/services/services';

const FilmDescription: FC<FilmType> = ({
                                           titleOriginal,
                                           image,
                                           description,
                                           release,
                                           genres,
                                           rating,
                                           countries
                                       }) => {

    const rate = SupportServices.rateTransform(rating)

    return (<div className={styles.film_desc_container}>
        <div className={styles.film_desc_content}>
            <header className={styles.film_desc_header}>
                <h2 className={styles.film_desc_header_title}>{titleOriginal}</h2>
                <p className={styles.film_desc_header_release}>{release}</p>
            </header>
            <main className={styles.film_desc_main}>
                <img className={styles.film_desc_main_poster}
                         src={image} alt="pic1"/>
                <section className={styles.film_desc_main_info}>
                    <p className={styles.film_desc_main_info_desc}>{description}</p>
                    <p className={styles.film_desc_main_info_rating}>rating:{rate}</p>
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