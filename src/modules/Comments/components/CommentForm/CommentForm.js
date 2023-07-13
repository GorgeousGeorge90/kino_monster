import useInput from '../../../../utils/useInput';
import {useDispatch} from 'react-redux';
import {addComment} from '../../store/commentsSlice';


const CommentForm = ({length}) => {
    const dispatch = useDispatch()
    const name = useInput()
    const comment = useInput()

    const payload = {
        name:name.value,
        comment:comment.value,
    }

    const handleClick = (e) => {
        e.preventDefault()
        dispatch(addComment(payload))
        name.reset()
        comment.reset()
    }

    return (<form className={'flex flex-col gap-0.5 p-4 text-sm'}
                  onSubmit={handleClick}>
        <input className={'h-6 rounded-t-md'}
               type="text"
               placeholder='comment'
               {...comment}/>
        {
            comment.value ? <div className={'grid grid-cols-2 gap-0.5'}><input className={'rounded-bl-md'}
                                    type="text"
                                    placeholder='name'
                                    {...name}/>
                <button className={'first-letter:uppercase bg-neutral-500 text-neutral-200 ' +
                    'rounded-br-md disabled:bg-red-600'}
                        disabled={ length >= 5 || !name.value}
                >
                    leave comment
                </button>
            </div> :null
        }
    </form>)
}

export default CommentForm
