import NewsItem from "../components/NewsItem/NewsItem";
import NewsList from "../NewsList";
import {render, screen} from "@testing-library/react";
import * as reduxHooks from 'react-redux';


jest.mock('react-redux')
const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch')
const mockedSelector = jest.spyOn(reduxHooks, 'useSelector')

describe('NewList components tests',()=> {
    it('goal: render NewsItem',()=> {

        const data = {
            title: 'Title',
            url: 'url',
            source: 'source',
        }

        render(<NewsItem {...data}/>)
        const component = screen.getByRole('listitem')
        expect(component).toHaveTextContent('Title')
    })

    it('goal: render NewsList',()=> {
        const data = [
            {id:'1', title:'Title1', url: 'url1', source: 'source1'},
            {id:'2', title:'Title2', url: 'url2', source: 'source2'}
        ]
        const dispatch = jest.fn()

        mockedSelector.mockReturnValue(data)
        mockedDispatch.mockReturnValue(dispatch)
        const view = render(<NewsList/>)
        expect(view).toMatchSnapshot()
    })
})