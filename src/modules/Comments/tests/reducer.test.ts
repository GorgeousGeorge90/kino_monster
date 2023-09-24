import commentsReducer, {
    getComments, getError, addComment, setCurrent
} from '../store/commentsSlice';
import { CommentsType } from '../types/types';


const initialState:CommentsType = {
    comments: [
        {id:1, comment: 'Batman Begins is my favorite!', film:'Batman'},
        {id:2, comment: 'Lego is nice!', film:'Lego'},
    ],
    status:'pending',
    current:'Batman',
    error:'Error!',
}

describe('commentsReducer tests',()=> {
    it('goal: test with default type',()=> {

        const result = commentsReducer(initialState,({type:''}))
        expect(result).toEqual(initialState)
    })

    it('goal: add new comment with value - Oh! and film:Lego',()=> {
        const action = {
            type: addComment.type,
            payload: {
                id:3,
                comment: 'Oh!',
                film:'Lego',
            }
        }

        const result = commentsReducer(initialState,action)
        expect(result.comments).toHaveLength(3)
        expect(result.comments[2].comment).toBe('Oh!')
        expect(result.comments[2].film).toBe('Lego')
    })

    it('goal:get all comments with length 1',()=> {
        const action = {
            type: getComments.type,
            payload:[{
                id:1, comments:'Nice!',film:'Lego',
            }]
        }

        const result = commentsReducer(initialState,action)
        expect(result.comments).toHaveLength(1)
    })

    it('goal:set current with value Lego', ()=> {
        const action = {
            type: setCurrent.type,
            payload:'Lego',
        }

        const result = commentsReducer(initialState,action)
        expect(result.current).toBe('Lego')
    })

    it('goal: set new error with value Critical!', () => {

        const action = {
            type: getError.type,
            payload:'Critical!',
        }

        const result = commentsReducer(initialState,action)
        expect(result.error).toBe('Critical!')
    })
})