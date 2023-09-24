import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { getCurrent } from '../../selectors/selectors';
import { setNewComment } from '../../store/commentsSlice';
import styles from './CommentForm.module.scss';
import BaseButton from '../../../../UI/BaseButton/BaseButton';




type CommentFormType = {
    comment:string,
}

const CommentForm = () => {
    const dispatch = useAppDispatch()
    const current = useAppSelector(getCurrent)
    const {register, reset, handleSubmit, formState: {errors}} = useForm<CommentFormType>()
    const handleClick: SubmitHandler<CommentFormType> = data => {
        if (current) {
            const payload = {
                comment: data.comment,
                film: current,
            }
            dispatch(setNewComment(payload))
        }
        reset()
    }

    return (<div className={styles.comment_form_container}>
        <form className={styles.comment_form_content}
              onSubmit={handleSubmit(handleClick)}>
            <input type="text"
                   {...register('comment', {required: true})}/>
            <BaseButton title={'add comment'}/>
        </form>
    </div>)
}

export default CommentForm