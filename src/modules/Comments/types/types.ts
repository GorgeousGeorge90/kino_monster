



export type CommentType = {
    id:number,
    comment:string,
    film:string,
}

export type CommentsType = {
    comments:CommentType[],
    status:'idle' | 'pending' | 'fulfilled' | 'rejected',
    current: null | string,
    error:null | string,
}

export type ResponseType = Omit<CommentsType, 'status' | 'current'>
export type ResponseItem = {
    data:CommentType,
    error:string | null,
}

