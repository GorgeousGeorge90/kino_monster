import NewsServices from './../services/services';



describe('test services', ()=> {
    it('goal:receive data from request and get OK status',async ()=> {

        const result = await NewsServices.fetchNews()
        expect(result.status).toBe('OK')
    })
})