import styles from './CommentItem.module.scss';
import {useDispatch} from "react-redux";
import {deleteComment} from "../../store/commentsSlice";
import man from './../../img/man.png';

const CommentItem = ({name,comment,id}) => {
    const dispatch = useDispatch()

    return (<li className={styles.container}>
        <span className={styles.avatar}>
            <img src={man} alt="avatar"/>
        </span>
        <span>{name}:</span>
        <span>{comment}</span>
        <span className={styles.btn}
              onClick={()=>dispatch(deleteComment(id))}>X</span>
    </li>)
}

export default CommentItem