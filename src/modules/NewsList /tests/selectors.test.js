import {getNews} from "../selectors/selectors";


const news = {
    news:[
        {
            id:'1', title:'Nice!'
        }
    ]
}

describe('NewList selectors test',()=> {
    it('goal: select news',()=> {

        const result = getNews({news})
        expect(result.news[0].title).toBe('Nice!')
    })
})