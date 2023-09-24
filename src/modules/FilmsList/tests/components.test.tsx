import { render } from '@testing-library/react';
import Film from '../components/Film/Film';
import {FilmItemType, FilmType} from "../types/types";
import FilmsList from "../FilmsList";
import {BrowserRouter} from "react-router-dom";


jest.mock('react-redux')

describe('FilmList render', () => {
    it('goal:render Film component', () => {

        const data: FilmItemType = {
            _id: '1',
            rating: '98',
            image: 'hd',
        }

        const view = render(<BrowserRouter>
            <Film {...data}/>
        </BrowserRouter>)
        expect(view).toMatchSnapshot()
    })

    it('goal:render FilmsList component', () => {

        const films: FilmType[] = [
            {
                _id: '1',
                titleOriginal: 'Batman',
                description: 'Nice!',
                year: '2005',
                release: '2005',
                rating: '9',
                genres: [
                    {name: 'Art'},
                ],
                image: 'no',
                countries: ['Moscow']
            },
        ]

        const view = render(<BrowserRouter>
            <FilmsList films={films}/>
        </BrowserRouter>)
        expect(view).toMatchSnapshot()
    })
})