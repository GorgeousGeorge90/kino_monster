import styles from './FilmRatingItem.module.scss';
import {useDispatch} from "react-redux";
import {deleteFilm} from "../../store/ratingSlice";


const FilmRatingItem = ({film,year,rating,id}) => {
    const dispatch = useDispatch()


    return (<li className={styles.container}>
            <span>Film:{film}</span>
            <span>Year:{year}</span>
            <span>Rating:{rating}</span>
            <span className={styles.btn}
                  onClick={()=>dispatch(deleteFilm(id))}
            >X</span>
    </li>)
}

export default FilmRatingItem