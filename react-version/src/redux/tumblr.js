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
    posts: [],
    blogName: '',
    tag: ''
};

/**
 * redux reducer function
 * @param   {object} state current redux state
 * @param   {object} action dispatched action
 * @returns {object} state
 **/
export default function reducer(state = defaultState, action = {}) {
    switch (action.type) {
    case constants.FETCH_BLOG:
    case constants.FETCH_BLOG_SUCCESS:
    case constants.FETCH_BLOG_ERROR:
    default:
        return state;
    }
}