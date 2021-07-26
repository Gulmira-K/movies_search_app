import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
    name: 'movies',
    initialState: {
        popular: [],
        top: [],
        upcoming: [],
        foundMovies: [],
        genres: [],
        myList: []
    },
    reducers: {
        setPopularMovies: (state, action) => {
            state.popular = action.payload;
        },
        setTopMovies: (state, action) => {
            state.top = action.payload;
        },
        setUpcomingMovies: (state, action) => {
            state.upcoming = action.payload;
        },
        setFoundMovies: (state, action) => {
            state.foundMovies = action.payload;
        },
        setGenres: (state, action) => {
            state.genres = action.payload;
        },
        addToMyList: (state, action) => {
            let myMovie = action.payload
            if (!state.myList.includes(myMovie)) {
               state.myList = [...state.myList, myMovie]
            }
        },
        removeFromMyList: (state, action) => {
            const toRemoveMovie = action.payload
            const newList = state.myList.filter(movie => movie !== toRemoveMovie)
            state.myList = newList
        },
    }
})

export const { setPopularMovies, setTopMovies, setUpcomingMovies, setFoundMovies, setGenres, addToMyList, removeFromMyList } = slice.actions;

export default slice.reducer;
