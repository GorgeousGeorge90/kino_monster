import FilmCard from '../components/FilmCard/FilmCard';
import {render,screen} from "@testing-library/react";
import * as reduxHooks from 'react-redux';
import FilmsList from "../FilmsList";

jest.mock('react-redux')
const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch')
const mockedSelector = jest.spyOn(reduxHooks, 'useSelector')

describe('FilmList',()=>{
    it('goal: render FilmCard',()=> {

        const data = {
            id:1234,
            title:'Batman',
            poster_path:'poster',
            vote_average:'9',
        }

        render(<FilmCard {...data}/>)
        const component = screen.getByRole('listitem')
        expect(component).toBeInTheDocument()
        expect(component).toHaveTextContent('Batman')
    })

    it('goal: render FilmsList',()=> {
        const data = {
            films:[
                {id:'123', title:'Batman', poster_path: 'poster', vote_average: '9'},
                {id:'332', title:'IronMan', poster_path: 'poster', vote_average: '8'},
            ],
            status:'idle',
        }

        const dispatch = jest.fn()

        mockedSelector.mockReturnValue(data)
        mockedDispatch.mockReturnValue(dispatch)

        const view = render(<FilmsList/>)
        expect(view).toMatchSnapshot()
    })
})