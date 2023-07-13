import {render,screen} from '@testing-library/react';
import FilmData from "../components/FilmData/FilmData";
import * as reduxHooks from 'react-redux';
import FilmItem from "../components/FilmItem/FilmItem";
import FilmCard from "../FilmCard";

jest.mock('react-redux')
const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch')
const mockedSelector = jest.spyOn(reduxHooks, 'useSelector')

describe('render test FilmsSearch',()=> {
    it('goal:render FilmData component',()=> {

        const data = {
            Title:'title',
            Year:'year',
            Poster:'poster',
            imdbRating:'rating',
            Genre:'genre',
            Director:'director',
            Actors:'actors',
            Plot:'plot',
            Released:'released',
            Awards:'awards',
            Metascore:'metascore',
        }
        const dispatch = jest.fn()
        mockedDispatch.mockReturnValue(dispatch)
        mockedSelector.mockReturnValue(data)

        const view = render(<FilmData/>)
        expect(view).toMatchSnapshot()
    })

    it('goal:render FilmItem component',()=> {
        const data = {
            title:'title',
            year:'1990',
            rating:'8.7',
            id:'123',
            poster:'poster',
        }

        const dispatch = jest.fn()
        mockedDispatch.mockReturnValue(dispatch)
        render(<FilmItem {...data}/>)

        const film = screen.getByRole('listitem')
        expect(film).toBeInTheDocument()
        expect(film).toHaveTextContent('title')
    })

    // it('goal:render FilmsSearch component',()=>{
    //
    //     const data = {
    //         films: [
    //             {id:'1', title:'Hello!', year:'1990',rating:'9', poster:'pic'},
    //             {id:'2', title:'Hello2!', year:'1989',rating:'8', poster:'pic'},
    //         ],
    //         search: {
    //             currenFilm:null,
    //             error:null,
    //             status:'idle',
    //         }
    //     }
    //
    //     mockedSelector.mockReturnValue(data)
    //     render(<FilmsSearch/>)
    //
    //     const component = screen.getByRole('heading')
    //     expect(component).toBeInTheDocument()
    //     expect(component).toHaveTextContent('Top Films')
    //
    // })
})