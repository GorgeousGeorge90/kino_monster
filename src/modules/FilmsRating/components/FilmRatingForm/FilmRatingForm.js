import useInput from "../../../../utils/useInput";
import {useDispatch} from "react-redux";
import {fetchFilm} from "../../store/ratingSlice";
import styles from './FilmRatingForm.module.scss';
import BaseButton from "../../../../UI/BaseButton/BaseButton";
import {ReactComponent as AddIcon} from "../../../../assets/img/add.svg";


const FilmRatingForm = () => {
    const dispatch = useDispatch()
    const title = useInput('')
    const year = useInput('')


    const payload = {
        title: title.value,
        year: year.value,
    }

    const handleClick = (e) => {
        e.preventDefault()
        dispatch(fetchFilm(payload))
        title.reset()
        year.reset()
    }


    return (<form className={styles.form}
                  onSubmit={handleClick}>
        <input type="text" placeholder='Film' {...title}/>
        <input type="text" placeholder='Year' {...year}/>
        <BaseButton children={<AddIcon height='20px' width='20px'/>}/>
    </form>)
}

export default FilmRatingForm
