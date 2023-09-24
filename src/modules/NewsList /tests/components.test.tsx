import NewsItem from '../components/NewsItem/NewsItem';
import { render } from '@testing-library/react';


describe('News renders',()=> {
    it('goal: NewsItem render', ()=> {

        const data = {
            title:'Hello!',
            abstract:'nice',
            web_url:'no',
            source:'no',
            image:'no',
            byline:'byMe'
        }

        const view = render(<NewsItem {...data}/>)
        expect(view).toMatchSnapshot()
    })
})