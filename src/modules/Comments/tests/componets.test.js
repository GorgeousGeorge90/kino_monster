import { getByRole, render, screen } from "@testing-library/react";
import CommentItem from "../components/CommentItem /CommentItem";
import {useSelector} from "react-redux";
import Comments from "../Comments";


jest.mock('react-redux')

describe('Comments components tests',()=>{
    it('goal: render CommentItem',()=> {

        const data = {
            id:'1',
            name:'Kate',
            comment: 'Hi!'
        }

        useSelector.mockReturnValue(data)

        const component = render(<CommentItem {...data}/>)
        const item = screen.getByRole('listitem')
        expect(item).toHaveTextContent('Kate')
        expect(component).toMatchSnapshot()
    })
})