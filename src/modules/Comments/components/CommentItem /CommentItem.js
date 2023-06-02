import styles from './CommentItem.module.scss';
import {useDispatch} from "react-redux";
import {deleteComment} from "../../store/commentsSlice";

const CommentItem = ({name,comment,id}) => {
    const dispatch = useDispatch()

    return (<li className={styles.container}>
        <span>{name}</span>
        <span>{comment}</span>
        <span onClick={()=>dispatch(deleteComment(id))}>X</span>
    </li>)
}

export default CommentItem