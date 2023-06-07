import styles from './FilmRatingItem.module.scss';
import {useDispatch} from "react-redux";
import {deleteFilm, getFilm} from "../../store/ratingSlice";
import {ReactComponent as TrashIcon} from '../../../../assets/img/trash1.svg';


const FilmRatingItem = ({title,year,director,rating,id,poster}) => {
    const dispatch = useDispatch()


    return (<li className={styles.container}>
            <span className={styles.logo}>
                <img src={poster}
                     alt="logo"
                     onClick={()=>dispatch(getFilm(id))}
                />
            </span>
            <span>Title:{title}</span>
            <span>Year:{year}</span>
            <span>Director:{director}</span>
            <span>Rating:{rating}</span>
            <span className={styles.btn}
                  onClick={()=>dispatch(deleteFilm(id))}
            ><TrashIcon height='20px' width='20px'/></span>
    </li>)
}

export default FilmRatingItem