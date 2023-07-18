import {
    render,
    screen
} from "@testing-library/react";
import CommentItem from "../components/CommentItem /CommentItem";

jest.mock('react-redux')

describe('Comments components tests',()=>{
    it('goal: render CommentItem',()=> {

        const data = {
            id:'1',
            name:'Kate',
            comment: 'Hi!'
        }

        render(<CommentItem {...data}/>)
        const item = screen.getByRole('listitem')
        expect(item).toBeInTheDocument()
        expect(item).toHaveTextContent('Kate')
    })
})