import styles from './FilmCard.module.scss';
import CustomLink from '../../../../UI/CustomLink/CustomLink';
import { useDispatch } from 'react-redux';
import { selectFilm } from '../../store/filmsSlice';

const FilmCard = ({_id,rating,image}) => {
    const dispatch = useDispatch()
    const rate = rating.substring(0,rating.length - 3)


    return (<li className={styles.film_card_container}>
        <CustomLink to={`/${_id}`}>
            <img className={styles.film_card_poster}
                 src={image}
                 alt={'pic'}
                 onClick={()=>dispatch(selectFilm(_id))}
            />
        </CustomLink>
        <p className={styles.film_card_rate}>{rate}</p>
    </li>)
}


export default FilmCard