
class SupportServices {
    rateTransform(rating:string) {
        return rating.substring(0, rating.length - 3)
    }

    async delay(ms:number) {
        return new Promise<void>(resolve => {
            setTimeout(()=> {
                resolve()
            },ms)
        })
    }
}

export default new SupportServices()