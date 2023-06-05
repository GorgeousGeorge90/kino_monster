import {Connect, useSelector} from 'react-redux';
import {getComments} from "./selectors/selectors";
import CommentItem from "./components/CommentItem /CommentItem";
import styles from './Comments.module.scss';
import CommentForm from "./components/CommentForm/CommentForm";


const Comments = () => {
    const comments = useSelector(state=>getComments(state))


    return (<div className={styles.container}>
        <CommentForm/>
        <ul>
            {
                comments.map(comment => <CommentItem key={comment.id}
                                                         {...comment}
                />)
            }
        </ul>
    </div>)
}

export default Comments