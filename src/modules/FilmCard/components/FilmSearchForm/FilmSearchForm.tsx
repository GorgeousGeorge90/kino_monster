import styles from './FilmSearchForm.module.scss';
import BaseButton from '../../../../UI/BaseButton/BaseButton';
import {ReactComponent as Search} from '../../img/search.svg';
import { useAppDispatch } from '../../../../store/hooks';
import { useForm,SubmitHandler } from 'react-hook-form';
import {fetchFilm} from "../../store/searchSlice";


export type FilmSearchType = {
    title:string,
    year:string,
}

const FilmSearchForm = () => {
    const dispatch = useAppDispatch()

    const {register,reset,handleSubmit,formState:{errors}} = useForm<FilmSearchType>()
    const handleClick:SubmitHandler<FilmSearchType> = data => {
        if (data) {
            dispatch(fetchFilm(data))
        }
        reset()
    }

    return (<div className={styles.search_form_container}>
        <form className={styles.search_form_content}
              onSubmit={handleSubmit(handleClick)}>
            <input className={styles.search_form_input}
                   type='search'
                   placeholder={'title'}
                   {...register('title', {required: true})}
            />
            <input className={styles.search_form_input}
                   type='search'
                   placeholder={'year'}
                   {...register('year', {required: true})}
            />
            <BaseButton title={<Search height={'20px'} width={'20px'}/>}/>
        </form>
    </div>)
}

export default FilmSearchForm
