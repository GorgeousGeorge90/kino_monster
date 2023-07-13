import styles from './CommentItem.module.scss';
import {useDispatch} from "react-redux";
import {deleteComment, updateComment} from "../../store/commentsSlice";
import man from './../../img/man.png';
import {ReactComponent as Trash} from './img/trash1.svg';
import {ReactComponent as Edit} from './img/edit.svg';
import useInput from "../../../../utils/useInput";
import {useState} from "react";

const CommentItem = ({name,comment,id}) => {
    const dispatch = useDispatch()
    const text = useInput()
    const [editMode,setEditMode] = useState(false)

    const payload = {
        id,
        text:text.value,
    }


    const onBlur = () => {
        dispatch(updateComment(payload))
        setEditMode(false)
    }

    return (<li className={styles.comment_item_container}>
        <p className={styles.comment_item_avatar}>
            <img src={man} alt="avatar"/>
        </p>
        <p className={styles.comment_item_name}>{name}:</p>
        {
            editMode ? <input type="text"
                              autoFocus={true}
                              onBlur={onBlur}
                              {...text}
                              className={styles.comment_item_input}
            />:<p className={styles.comment_item_content}>{comment}</p>
        }
        <Edit className={styles.comment_item_btn}
              onClick={()=>setEditMode(true)}
        />
        <Trash className={styles.comment_item_btn}
               onClick={()=>dispatch(deleteComment(id))}
        />
    </li>)
}

export default CommentItem