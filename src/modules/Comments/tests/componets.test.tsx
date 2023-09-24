import {
    render,
} from "@testing-library/react";
import Comments, { CommentsProps } from './../Comments';


jest.mock('react-redux')

describe('Comments components tests',()=>{
    it('goal: render Comments',()=> {

        const data:CommentsProps = {
            comments:[
                { id:1,comment: 'Hi!', film:'Batman'},
                { id:2,comment: 'Hello!', film:'Batman'},
            ]
        }

        const view = render(<Comments {...data}/>)
        expect(view).toMatchSnapshot()
    })
})