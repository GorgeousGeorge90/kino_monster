import styles from './FilmRatingItem.module.scss';
import {useDispatch} from "react-redux";
import {deleteFilm} from "../../store/ratingSlice";
import {ReactComponent as TrashIcon} from '../../../../assets/img/trash1.svg';


const FilmRatingItem = ({Title,Year,Director,Rating,Id}) => {
    const dispatch = useDispatch()


    return (<li className={styles.container}>
            <span>Title:{Title}</span>
            <span>Year:{Year}</span>
            <span>Director:{Director}</span>
            <span>Rating:{Rating}</span>
            <span className={styles.btn}
                  onClick={()=>dispatch(deleteFilm(Id))}
            ><TrashIcon height='20px' width='20px'/></span>
    </li>)
}

export default FilmRatingItem