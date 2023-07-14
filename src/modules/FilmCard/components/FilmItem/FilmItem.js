import styles from './FilmItem.module.scss';
import {useDispatch} from 'react-redux';
import {
        deleteFilm,
        getFilm
} from '../../store/searchSlice';
import {ReactComponent as TrashIcon} from '../../../../assets/img/trash1.svg';




const FilmItem = ({title,year,rating,id,poster}) => {
    const dispatch = useDispatch()

    return (<li className={styles.film_item_container}>
            <aside className={styles.film_item_logo}>
                <img src={poster}
                     alt="logo"
                     onClick={()=>dispatch(getFilm(id))}
                />
            </aside>
            <section className={styles.film_title_info}>
                <h3 className={styles.film_title_year}>{title}</h3>
                <p><span className={'font-bold'}>released:</span>{year}</p>
                <p>
                    <span className={'font-bold'}>imdb:</span>
                    <span>{rating}</span>
                    <span className={styles.film_title_btn}
                          onClick={() => dispatch(deleteFilm(id))}>
                          <TrashIcon height='15px' width='15px'/>
                    </span>
                </p>
            </section>
    </li>)
}

export default FilmItem