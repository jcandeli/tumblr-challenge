export const constants = {
        FETCH_BLOG: 'FETCH_BLOG',
        FETCH_BLOG_SUCCESS: 'FETCH_BLOG_SUCCESS',
        FETCH_BLOG_ERROR: 'FETCH_BLOG_ERROR'
};

export const actions = {
    fetchBlog: (blogName, tag) => ({
            type: constants.FETCH_BLOG,
            blogName,
            tag
    }),

    fetchBlogSuccess: (posts) => ({
            type: constants.FETCH_BLOG_SUCCESS,
            posts
    }),

    fetchBlogError: (error) => ({
            type: constants.FETCH_BLOG_ERROR,
            error
    })
};

export const defaultState = {
    loading: false,
    posts: []
};

/**
 * redux reducer function
 * @param     {object} state current redux state
 * @param     {object} action dispatched action
 * @returns {object} state
 **/
export default function reducer(state = defaultState, action = {}) {
    switch (action.type) {
    case constants.FETCH_BLOG:
        return { ...state, posts: [], loading: true };
    case constants.FETCH_BLOG_SUCCESS:

        return { ...state, posts: action.posts, loading: false };
    case constants.FETCH_BLOG_ERROR:
        return { ...state, loading: false };
    default:
            return state;
    }
}