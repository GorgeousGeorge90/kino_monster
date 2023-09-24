import InfoServices from '../services/services';


describe('InfoServices test',()=> {
    it('goal: success fetch',async ()=> {

        const result = await InfoServices.getText()
        expect(result).toHaveProperty('id')
    })
})