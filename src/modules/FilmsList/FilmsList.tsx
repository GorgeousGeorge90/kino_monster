import { FC } from 'react';
import styles from './FilmsList.module.scss';
import Film from './components/Film/Film';
import { FilmType } from "./types/types";



export type FilmsListType = {
    films:FilmType[],
}

const FilmsList:FC<FilmsListType> = ({films}) => {

    return (<main className={styles.films_list_container}>
            <ul className={styles.films_list_content}>
                {
                    films.map(film => <Film key={film._id}
                                                {...film}
                    />)
                }
            </ul>
    </main>)
}

export default FilmsList