import {useSelector,useDispatch} from 'react-redux';
import {useEffect, useState} from 'react';
import {fetchFilms} from './store/filmsSlice';
import filmsSelectors from "./selectors/selectors";
import FilmCard from "./components/FilmCard/FilmCard";
import styles from './FilmsList.module.scss';
import {ReactComponent as Loader} from '../../assets/img/spinner.svg';
import CustomLink from "../../UI/CustomLink/CustomLink";

const FilmsList = () => {
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(fetchFilms())
    },[])
    const {films,status} = useSelector(filmsSelectors.getState)

    return (<main className={styles.films_list_container}>
        <h2 className={styles.films_list_title}><i>popular films</i></h2>
        {/*<p><button onClick={()=>setCurrent(sortedByRate)}>sortByRate</button></p>*/}
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