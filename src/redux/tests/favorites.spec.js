import reducer, { actions, defaultState } from '../favorites.js';

describe('(redux) favorites', () => {
    it('should push the post into the favorites array for SAVE_FAVORITE action', () => {
        const oldState = {
            favorites: [{ id: 1, post: 'blah' }]
        };
        const newState = {
            favorites: [{ id: 1, post: 'blah' }, { id: 2, post: 'blah 2' }]
        };

        expect(reducer(oldState, actions.saveFavorite({ id: 2, post: 'blah 2' }))).toEqual(newState);
    });

    it('should remove the post into the favorites array for DELETE_FAVORITE action', () => {
        const oldState = {
            favorites: [{ id: 1, post: 'blah' }, { id: 2, post: 'blah 2' }, { id: 3, post: 'blah 3' }]
        };
        const newState = {
            favorites: [{ id: 1, post: 'blah' }, { id: 3, post: 'blah 3' }]
        };

        expect(reducer(oldState, actions.deleteFavorite(2))).toEqual(newState);
    });

    it('returns old state for bogus action', () => {
        const oldState = {
            favorites: [{ id: 1, post: 'blah' }, { id: 2, post: 'blah 2' }, { id: 3, post: 'blah 3' }]
        };

        expect(reducer(oldState, { type: 'This is not a real action!' })).toEqual(oldState);
    });
});
