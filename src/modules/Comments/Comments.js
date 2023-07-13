import {Connect, useSelector} from 'react-redux';
import {getComments} from "./selectors/selectors";
import CommentItem from "./components/CommentItem /CommentItem";
import styles from './Comments.module.scss';
import CommentForm from "./components/CommentForm/CommentForm";


const Comments = () => {
    const comments = useSelector(getComments)


    return (<div className={styles.comments_container}>
        <h3 className={styles.comments_title}>leave your opinion</h3>
        <CommentForm length={comments.length}/>
        {
            comments.length === 0 ? <p className={styles.comments_null}
                                       data-hover={`enter your opinion and name!`}
                ><i>be the first!</i></p>:
                <ul className={styles.comments_list}>
                {
                    comments.map(comment => <CommentItem key={comment.id}
                                                         {...comment}
                    />)
                }
            </ul>
        }
        {
            comments.length >= 5 ? <p className={styles.comments_limit}>limit for comments is reached!</p>:null
        }
    </div>)
}

export default Comments