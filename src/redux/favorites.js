export const constants = {
    SAVE_FAVORITE: 'SAVE_FAVORITE',
    DELETE_FAVORITE: 'DELETE_FAVORITE'
};

export const actions = {
    saveFavorite: (post) => ({
        type: constants.SAVE_FAVORITE,
        post
    }),

    deleteFavorite: (postsId) => ({
        type: constants.DELETE_FAVORITE,
        postsId
    })
};

export const defaultState = {
    favorites: []
};

/**
 * redux reducer function
 * @param   {object} state current redux state
 * @param   {object} action dispatched action
 * @returns {object} state
 **/
export default function reducer(state = defaultState, action = {}) {
    switch (action.type) {

    case constants.SAVE_FAVORITE: {
        const favorites = [...state.favorites];
        favorites.push(action.post);
        return { ...state, favorites };
    }

    case constants.DELETE_FAVORITE:
        const favorites = state.favorites.filter(post => (post.id !== action.postsId));
        return { ...state, favorites };

    default:
        return state;
    }
}