import newsApi from "../api/api";




describe('newsApi tests',()=>{
    it('goal: api case getNews test',async ()=> {

        const result =await newsApi.getNews()
        console.log(result)
        expect(result).toEqual([])
    })
})