import commentsReducer, {
    addComment,
    deleteComment,
} from '../store/commentsSlice';


const initialState = {
    comments: [
        {id: '1', name: 'George', city: 'Moscow', comment: 'Batman Begins is my favorite!'}
    ]
}

describe('commentsReducer tests',()=> {
    it('goal: test with default type',()=> {

        const result = commentsReducer(initialState,({type:''}))
        expect(result).toEqual(initialState)
    })

    it('goal: add new comment',()=> {
        const action = {
            type: addComment.type,
            payload: {
                name:'Kate',
                city:'Moscow',
                comment: 'Hi!'
            }
        }

        const result = commentsReducer(initialState,action)
        expect(result.comments.length).toBe(2)
        expect(result.comments[1].name).toBe('Kate')
    })

    it('goal: delete comment', ()=> {
        const action = {
            type: deleteComment.type,
            payload:'1',
        }

        const result = commentsReducer(initialState,action)
        expect(result.comments.length).toBe(0)
    })
})