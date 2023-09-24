



export type FilmCardType = {
    Title:string,
    Year:string,
    Poster:string,
    Metascore:string,
    imdbRating:string,
    Released:string,
    Genre:string,
    Director:string,
    Actors:string,
    Plot:string,
}

export type SearchTypes = {
    film:null | FilmCardType,
    status: 'idle' | 'pending' | 'fulfilled' | 'rejected',
    error: null | string,
}