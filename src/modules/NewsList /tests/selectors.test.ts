import { getNews, getNewsError, getNewsStatus } from '../selectors/selectors';
import { initialStateType } from '../types/types';
import {RootState} from '../../../store/store';


const news:initialStateType = {
    news:[
        {
            title:'Hello!',
            abstract:'nice',
            web_url:'no',
            source:'no',
            image:'no',
            byline:'byMe'
        }
    ],
    status:'pending',
    error: 'Critical!',
}

describe('NewList selectors test',()=> {
    it('goal: select news with length 1',()=> {

        const result = getNews({news} as RootState)
        expect(result).toHaveLength(1)
    })

    it('goal:select status with pending value', () => {

        const result = getNewsStatus({news} as RootState)
        expect(result).toBe('pending')
    })

    it('goal:select error with Critical! value', () => {

        const result = getNewsError({news} as RootState)
        expect(result).toBe('Critical!')
    })
})