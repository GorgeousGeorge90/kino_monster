import useInput from "../../../../utils/useInput";
import {useDispatch} from "react-redux";
import {fetchFilm,clearData} from "../../store/searchSlice";
import styles from './FilmSearchForm.module.scss';
import BaseButton from '../../../../UI/BaseButton/BaseButton';
import {ReactComponent as Search} from '../../img/search.svg';
import {ReactComponent as Cancel} from '../../img/cancel.svg';


const FilmSearchForm = () => {
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
        dispatch(clearData())
        title.reset()
        year.reset()
    }

    const handleCancel = (e) => {
        e.preventDefault()
        dispatch(clearData())
        title.reset()
        year.reset()
    }


    return (<form className={styles.search_form}
                  onSubmit={handleClick}>
        <input type="text" placeholder='Film' {...title}/>
        <input type="text" placeholder='Year' {...year}/>
        <BaseButton children={<Search height='20px' width='20px' stroke={'white'}/>}/>
        <BaseButton children={<Cancel height='20px' width='20px' fill={'white'}/>}
                    handleClick={handleCancel}
        />
    </form>)
}

export default FilmSearchForm
