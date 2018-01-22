import reducer, { actions, defaultState } from '../tumblr.js';

describe('(redux) tumblr', () => {
    it('returns old state for bogus action', () => {
        const oldState = {
            loading: false,
            posts: [{ id: 1, post: 'blah' }],
            errors: []
        };

        expect(reducer(oldState, { type: 'This is not a real action!' })).toEqual(oldState);
    });

    it('clears posts, sets loading = true, and clears errors when FETCH_BLOG action is dispatched', () => {
        const oldState = {
            loading: false,
            posts: [{ id: 1, post: 'blah' }, { id: 2, post: 'blah 2' }],
            errors: []
        };
        const newState = {
            loading: true,
            posts: [],
            errors: []
        };

        expect(reducer(oldState, actions.fetchBlog('foo', 'bar'))).toEqual(newState);
    });

    it('saves posts, and sets loading = false when FETCH_BLOG_SUCCESS action is dispatched', () => {
        const oldState = {
            loading: true,
            posts: [],
            errors: []
        };
        const newState = {
            loading: false,
            posts: [{ id: 1, post: 'blah' }, { id: 2, post: 'blah 2' }],
            errors: []
        };

        expect(reducer(oldState, actions.fetchBlogSuccess([{ id: 1, post: 'blah' }, { id: 2, post: 'blah 2' }]))).toEqual(newState);
    });

    it('sets loading = false and saves errors when FETCH_BLOG_ERROR action is dispatched', () => {
        const oldState = {
            loading: true,
            posts: [],
            errors: []
        };
        const newState = {
            loading: false,
            posts: [],
            errors: [{ reason: 'something broke' }, { reason: 'no connection' }]
        };

        expect(reducer(oldState, actions.fetchBlogError([{ reason: 'something broke' }, { reason: 'no connection' }]))).toEqual(newState);
    });

    it('sets post.favorited = true when POST_FAVORITED is dispatched', () => {
        const oldState = {
            loading: false,
            posts: [
                { id: 1, post: 'blah' },
                { id: 2, post: 'blah 2' },
                { id: 3, post: 'blah 3' }
            ],
            errors: []
        };
        const newState = {
            loading: false,
            posts: [
                { id: 1, post: 'blah' },
                { id: 2, post: 'blah 2', favorited: true },
                { id: 3, post: 'blah 3' }
            ],
            errors: []
        };

        expect(reducer(oldState, actions.postFavorited(2))).toEqual(newState);
    });

    it('sets post.favorited = false when POST_UNFAVORITED is dispatched', () => {
        const oldState = {
            loading: false,
            posts: [
                { id: 1, post: 'blah' },
                { id: 2, post: 'blah 2', favorited: true },
                { id: 3, post: 'blah 3', favorited: true }
            ],
            errors: []
        };
        const newState = {
            loading: false,
            posts: [
                { id: 1, post: 'blah' },
                { id: 2, post: 'blah 2', favorited: false },
                { id: 3, post: 'blah 3', favorited: true }
            ],
            errors: []
        };

        expect(reducer(oldState, actions.postUnfavorited(2))).toEqual(newState);
    });
});
