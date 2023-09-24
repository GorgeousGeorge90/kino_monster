import FilmsList from '../../modules/FilmsList/FilmsList';
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {useEffect, useState} from "react";
import { fetchFilms } from "../../modules/FilmsList/store/filmsSlice";
import styles from './FilmsPage.module.scss';
import {getAll, getStatus, selectByRating, selectByRelease} from "../../modules/FilmsList/selectors/selectors";
import { FilmType} from "../../modules/FilmsList/types/types";
import BaseButton from "../../UI/BaseButton/BaseButton";
import { ReactComponent as Spinner } from './../../../src/assets/img/spinner.svg';
import {fetchComments} from "../../modules/Comments/store/commentsSlice";


const FilmsPage = () => {
    const dispatch = useAppDispatch()
    const status = useAppSelector(getStatus)
    const films = useAppSelector(getAll)
    const release = useAppSelector(selectByRelease)
    const rating = useAppSelector(selectByRating)

    useEffect(()=> {
        dispatch(fetchFilms())
        dispatch(fetchComments())
    },[])

    useEffect(()=> {
        if (status === 'fulfilled') {
            setState(films)
        }
    },[status])

    const [state,setState] = useState<FilmType[]>([])


    return (<div className={styles.films_page_container}>
        <div className={styles.films_page_content}>
            <h2 className={styles.films_page_title}>popular films</h2>
            <section className={styles.films_page_buttons}>
                <BaseButton title={'sort by rating'}
                            handleClick={()=>setState(rating)}
                />
                <BaseButton title={'sort by release'}
                            handleClick={()=>setState(release)}
                />
            </section>
            {
                status === 'pending' ?  <Spinner/>: <FilmsList films={state}/>
            }
        </div>
    </div>)
}

export default FilmsPage