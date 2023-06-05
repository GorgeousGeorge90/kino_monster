import useInput from '../../../../utils/useInput';
import {useDispatch} from "react-redux";
import {addComment} from "../../store/commentsSlice";
import styles from './CommentForm.module.scss';


const CommentForm = () => {
    const dispatch = useDispatch()
    const name = useInput()
    const city = useInput()
    const comment = useInput()

    const payload = {
        name:name.value,
        city: city.value,
        comment:comment.value,
    }

    const handleClick = (e) => {
        e.preventDefault()
        dispatch(addComment(payload))
        name.reset()
        city.reset()
        comment.reset()
    }

    return (<form onSubmit={handleClick}
                  className={styles.form}>
        <input type="text" placeholder='name' {...name}/>
        <input type="text" placeholder='city' {...city}/>
        <input type="text" placeholder='comment' {...comment}/>
        <button>
            +
        </button>
    </form>)
}

export default CommentForm
