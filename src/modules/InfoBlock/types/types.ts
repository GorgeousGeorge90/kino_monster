

export type PhraseItemType = {
    quote:string,
    author:string,
}


export type PhraseType = {
    phrase: null | PhraseItemType,
    status: 'idle' | 'pending' | 'fulfilled' | 'rejected',
    error: null | string,
}