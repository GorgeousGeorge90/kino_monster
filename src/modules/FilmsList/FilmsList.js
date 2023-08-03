import {useSelector,useDispatch} from 'react-redux';
import {useEffect, useState} from 'react';
import {fetchFilms, sortedFilms} from './store/filmsSlice';
import filmsSelectors from "./selectors/selectors";
import FilmCard from "./components/FilmCard/FilmCard";
import styles from './FilmsList.module.scss';
import {ReactComponent as Loader} from '../../assets/img/spinner.svg';
import BaseButton from "../../UI/BaseButton/BaseButton";


const FilmsList = () => {
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(fetchFilms())
    },[])
    const { films,status } = useSelector(filmsSelectors.getState)


    const sortByRating = () => {
        dispatch(sortedFilms('rating'))
    }

    const sortByDate = () => {
        dispatch(sortedFilms('release'))
    }

    return (<main className={styles.films_list_container}>
        <h2 className={styles.films_list_title}><i>popular films</i></h2>
        <div className={'flex gap-2 py-2'}>
            <BaseButton handleClick={sortByRating}>sort by rating</BaseButton>
            <BaseButton handleClick={sortByDate}>sort by release</BaseButton>
        </div>
        {
            status === 'pending' ? <Loader fill={'white'}/> :
                <ul className={styles.films_list_list}>
                    {
                        films.map(film =><FilmCard key={film.id}
                                                    {...film}
                        />)
                    }
                </ul>
        }
    </main>)
}

export default FilmsList