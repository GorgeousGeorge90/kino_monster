import styles from './Comments.module.scss';
import { CommentType } from './types/types';
import man from './img/man.png';
import { FC } from 'react';


export type CommentsProps = {
    comments:CommentType[],
}

const Comments:FC<CommentsProps> =({comments}) => {

    return (<div className={styles.comments_container}>
        <div className={styles.comments_content}>
            {
                <ul className={styles.comments_list}>
                    {
                        comments.map(comment => <li className={styles.comments_list_item}
                                                    key={comment.id}>
                            <img className={styles.comments_list_item_logo}
                                src={man} alt={'pic'}/>
                            <p>{comment.comment}</p>
                        </li>)
                    }
                </ul>
            }
        </div>
    </div>)
}

export default Comments