import Phrase from '../components/Phrase/Phrase';
import { render } from '@testing-library/react';


jest.mock('react-redux')

describe('render tests for InfoBlock',()=> {

    it('goal: render Phrase component',()=> {
        const data = {
            quote: 'I am rich!',
            author: 'Tom Ford'
        }

        jest.mocked(data)
        const view = render(<Phrase/>)
        expect(view).toMatchSnapshot()
    })
})