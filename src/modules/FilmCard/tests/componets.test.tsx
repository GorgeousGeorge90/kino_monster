import { render } from '@testing-library/react';
import FilmItem from '../components/FilmItem/FilmItem';
import {FilmCardType} from "../types/types";

jest.mock('react-redux')

describe('render test FilmsSearch',()=> {
    it('goal:render FilmItem component',()=> {

        const data:FilmCardType = {
            Title:'title',
            Year:'year',
            Poster:'poster',
            imdbRating:'rating',
            Genre:'genre',
            Director:'director',
            Actors:'actors',
            Plot:'plot',
            Released:'released',
            Metascore:'metascore',
        }

        const view = render(<FilmItem {...data}/>)
        expect(view).toMatchSnapshot()
    })
})