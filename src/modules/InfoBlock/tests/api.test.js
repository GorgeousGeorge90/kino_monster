import infoApi from '../api/api';

global.fetch = jest.fn()

describe('infoApi tests',()=> {
    it('goal: get text',async ()=> {

        const phrase = {
                text:'Hello!',
            }

        fetch.mockResolvedValue({
            json:()=>Promise.resolve(phrase)
        })

        const result = await infoApi.getText()
        expect(result.text).toBe('Hello!')
    })
})