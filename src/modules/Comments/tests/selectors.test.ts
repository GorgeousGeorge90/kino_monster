import {getComments, getCurrent, getCurrentComments, getError, getStatus} from '../selectors/selectors';
import { CommentsType } from '../types/types';
import { RootState } from '../../../store/store';



const comments:CommentsType = {
    comments: [
        { id:1, comment: 'Batman Begins is my favorite!', film: 'Batman'},
        { id:2, comment: 'Lego is nice!', film: 'Lego'},
        { id:3, comment: 'Batman is simple the best', film: 'Batman'},
    ],
    status:'pending',
    current:'Batman',
    error:'Error!',
}

describe('comments selectors tests',()=>{
    it('goal: select comments with length 3 and film Batman for first element',()=> {

        const data = getComments({comments} as RootState)
        expect(data).toHaveLength(3)
        expect(data[0].film).toBe('Batman')
    })

    it('goal:get current with value Batman', ()=> {

        const data = getCurrent({comments} as RootState)
        expect(data).toBe('Batman')
    })

    it('goal: get current comments with length 2', ()=> {

        const data = getCurrentComments({comments} as RootState)
        expect(data).toHaveLength(2)
    })

    it('goal:get status with pending value', ()=> {

        const data = getStatus({comments} as RootState)
        expect(data).toBe('pending')
    })

    it('goal:get error with value Error!', () => {

        const data = getError({comments} as RootState)
        expect(data).toBe('Error!')
    })
})