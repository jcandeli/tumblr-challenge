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

    fetchBlogError: (errors) => ({
        type: constants.FETCH_BLOG_ERROR,
        errors
    })
};

export const defaultState = {
    loading: false,
    posts: [],
    errors: []
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
        return { ...state, posts: [], loading: true, errors: [] };
    case constants.FETCH_BLOG_SUCCESS:
        return { ...state, posts: action.posts, loading: false, errors: [] };
    case constants.FETCH_BLOG_ERROR:
        return { ...state, loading: false, errors: [...action.errors] };
    default:
        return state;
    }
}