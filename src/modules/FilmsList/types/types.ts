

export type GenreType = {
    name:string,
}

export type FilmType = {
    _id:string,
    titleOriginal:string,
    description:string,
    year:string,
    rating:string,
    release:string,
    genres:GenreType[],
    image:string,
    countries:string[],
}

export type FilmsStateType = {
    films: FilmType[],
    status:'idle' | 'pending' | 'fulfilled' | 'rejected',
    error: string | null,
    selected:FilmType | null,
}

export type FilmItemType = Pick<FilmType, '_id'| 'image' | 'rating'>
