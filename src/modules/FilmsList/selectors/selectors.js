import {createSelector} from '@reduxjs/toolkit';

const filmsSelectors = {
    getState:state => state.films,
    getAll:state => state.films.films,
    getError:state => state.films.error,
    getStatus:state => state.films.status,
    getSelected:state => state.films.selected,
    getSorted:state => state.films.sorted,
    getSortedByRate: () => createSelector(filmsSelectors.getAll,
            films => films.sort((a,b) => b.vote_average - a.vote_average))
}


export default filmsSelectors
