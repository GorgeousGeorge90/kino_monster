



export type NewsType = {
    title:string,
    abstract:string,
    web_url:string,
    source:string,
    image:string,
    byline:string,
}


type ImageType = {
    url:string,
}

export type ResponseNewsType = {
    headline: {
        main:string,
    },
    abstract:string,
    web_url:string,
    source:string,
    multimedia:ImageType[],
    byline:{
        original:string,
    }
}

export type initialStateType = {
    news:NewsType[],
    status:'idle' | 'pending' | 'fulfilled' | 'rejected',
    error: null | string,
}
