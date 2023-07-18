import styles from './FilmCard.module.scss';
import CustomLink from "../../../../UI/CustomLink/CustomLink";
import {useDispatch} from "react-redux";
import {selectFilm} from "../../store/filmsSlice";
import pic from './img/null.png';


const FilmCard = ({id, title, poster_path, vote_average}) => {
    const dispatch = useDispatch()


    return (<li className={styles.film_card_container}>
        <CustomLink to={`/${id}`}>
            <img className={styles.film_card_poster}
                 src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                 alt={`${pic}`}
                 onClick={()=>dispatch(selectFilm(id))}
            />
        </CustomLink>
        <p className={styles.film_card_rate}>{vote_average}</p>
    </li>)
}


export default FilmCard