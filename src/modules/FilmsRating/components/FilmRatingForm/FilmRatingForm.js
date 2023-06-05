import useInput from "../../../../utils/useInput";
import {useDispatch} from "react-redux";
import {addFilm} from "../../store/ratingSlice";
import styles from './FilmRatingForm.module.scss';
import BaseButton from "../../../../UI/BaseButton/BaseButton";


const FilmRatingForm = () => {
    const dispatch = useDispatch()
    const film = useInput('')
    const year = useInput('')
    const rating = useInput('')


    const payload = {
        film: film.value,
        year: year.value,
        rating: rating.value,
    }

    const handleClick = (e) => {
        e.preventDefault()
        dispatch(addFilm(payload))
        film.reset()
        year.reset()
        rating.reset()
    }


    return (<form className={styles.form}
                  onSubmit={handleClick}>
        <input type="text" placeholder='film' {...film}/>
        <input type="text" placeholder='year' {...year}/>
        <input type="text" placeholder='rating' {...rating}/>
        <BaseButton value={'add new film'}/>
    </form>)
}

export default FilmRatingForm
