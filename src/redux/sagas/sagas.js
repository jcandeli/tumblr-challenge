import { call, put, takeLatest } from 'redux-saga/effects';
import { actions, constants } from '../tumblr';

// hardcoded here for now
const apiKey = 'UBKnsbPNXE7pQg9QofHWDyt0O56s3WYdfU4zGir6hA6EiLnRXr';
const apiUrl = 'https://api.tumblr.com/v2';

/**
 * fetchBlog: redux saga generator function for fetching blog posts
 * @param {object} action with blogName and tag
 * @returns {null} nothing
 */
function* fetchBlog(action) {
    const queryParams = `?tag=${action.tag}&api_key=${apiKey}`;
    const url = (!action.blogName && action.tag) ?
        `${apiUrl}/tagged${queryParams}` :
        `${apiUrl}/blog/${action.blogName}.tumblr.com/posts${queryParams}`;

    const resp = yield call(fetch, url);
    const { response, errors } = yield resp.json();
    if(resp.status === 200) {
        const posts = response.posts || response;
        yield put(actions.fetchBlogSuccess(posts));
    } else {
        yield put(actions.fetchBlogError(errors));
    }
}

/**
 * Saga to call apis.
 * @returns {*} saga effect
 */
export default function* sagas() {
    yield takeLatest(constants.FETCH_BLOG, fetchBlog);
};
