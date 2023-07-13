import {createSelector} from "@reduxjs/toolkit";

const filmsSelectors = {
    getState:state => state.films,
    getAll:state => state.films.films,
    getError:state => state.films.error,
    getStatus:state => state.films.status,
    getSelected:state => state.films.selected,
    getSortedByRate: () => createSelector(filmsSelectors.getAll,
            films => films.sort((a,b) => a.vote_average - b.vote_average))
}

//
// export const getSortedByRate = createSelector(filmsSelectors.getAll, films => {
//         return films.sort((a,b) => a.vote_average - b.vote_average)
//     })


export default filmsSelectors
