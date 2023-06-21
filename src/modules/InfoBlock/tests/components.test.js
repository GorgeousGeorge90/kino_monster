import {render,screen} from "@testing-library/react";
import Contacts from "../components/Contacts/Contacts";
import Phrase from "../components/Phrase/Phrase";
import Rules from "../components/Rules/Rules";
import * as reduxHooks from "react-redux";
import InfoBlock from "../InfoBlock";


jest.mock('react-redux')
const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch')
const mockedSelector = jest.spyOn(reduxHooks, 'useSelector')


describe('render tests for InfoBlock',()=> {
    it('goal: render Contacts component',()=> {
        render(<Contacts/>)

        const component = screen.getByRole('heading')
        expect(component).toBeInTheDocument()
        expect(component).toHaveTextContent('Contacts')
    })

    it('goal: render Phrase component',()=> {
        const data = {
            quote: 'I am rich!',
            author: 'Tom Ford'
        }

        render(<Phrase {...data}/>)
        const component = screen.getByRole('heading')
        expect(component).toBeInTheDocument()
        expect(component).toHaveTextContent('I am rich!')
    })

    it('goal: render Rules component',()=> {

        render(<Rules/>)
        const component = screen.getByRole('heading')
        expect(component).toBeInTheDocument()
        expect(component).toHaveTextContent('Rules')
    })

    it('goal: render InfoBlock component',()=> {
        const data = {
            phrase: {
                quote: 'I am rich!',
                author: 'Tom Ford'
            },
            status:'resolved',
        }

        const dispatch = jest.fn()

        mockedSelector.mockReturnValue(data)
        mockedDispatch.mockReturnValue(dispatch)
        const view = render(<InfoBlock/>)
        expect(view).toMatchSnapshot()
    })
})