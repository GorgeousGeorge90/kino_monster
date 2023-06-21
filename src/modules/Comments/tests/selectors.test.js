import {getComments} from "../selectors/selectors";


const comments = {
    comments: [
        {id:1, name: 'George', city: 'Moscow', comment: 'Batman Begins is my favorite!'},
    ]
}

describe('comments selectors tests',()=>{
    it('goal: select comments',()=> {

        const data = getComments({comments})
        expect(data[0].name).toEqual(comments.comments[0].name)
    })
})