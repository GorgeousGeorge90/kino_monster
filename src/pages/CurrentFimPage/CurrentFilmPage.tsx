import FilmDescription from '../../components/FilmDescription/FilmDescription';
import Comments from '../../modules/Comments/Comments';
import { getSelected } from '../../modules/FilmsList/selectors/selectors';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import styles from './CurrentFilmPage.module.scss';
import CommentForm from "../../modules/Comments/components/CommentForm/CommentForm";
import {setCurrent} from "../../modules/Comments/store/commentsSlice";
import { getCurrentComments } from "../../modules/Comments/selectors/selectors";



const CurrentFilmPage = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    const film = useAppSelector(getSelected)
    const comments = useAppSelector(getCurrentComments)

    useEffect(() => {
        if (film) {
            dispatch(setCurrent(film.titleOriginal))
        }
    }, [film])

    useEffect(() => {
        if (film === null) {
            navigate('/')
        }
    }, [])



    return (<div className={styles.current_container}>
        <div className={styles.current_content}>
            {
                film ? <>
                    <FilmDescription {...film}/>
                    <CommentForm/>
                    {
                        comments ? <Comments comments={comments}/> : <p>no comments yet</p>
                    }
                </> : null
            }
        </div>
    </div>)
}

export default CurrentFilmPage