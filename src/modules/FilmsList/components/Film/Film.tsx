import styles from './Film.module.scss';
import CustomLink from '../../../../UI/CustomLink/CustomLink';
import { FC } from 'react';
import { FilmItemType } from '../../types/types';
import { useAppDispatch } from '../../../../store/hooks';
import SupportServices from './../../../../utils/services/services';
import { selectFilm } from '../../store/filmsSlice';

const Film:FC<FilmItemType> = ({_id,rating,image}) => {
    const dispatch = useAppDispatch()
    const rate = SupportServices.rateTransform(rating)

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


export default Film