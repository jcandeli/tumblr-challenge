import { call, put, takeLatest } from 'redux-saga/effects';
import { actions, constants } from '../tumblr';

// hardcoded here for now
const apiKey = 'UBKnsbPNXE7pQg9QofHWDyt0O56s3WYdfU4zGir6hA6EiLnRXr';
const apiUrl = 'https://api.tumblr.com/v2';

function* fetchBlog(action) {
    try {
        const resp = yield call(
            fetch,
            `${apiUrl}/blog/${action.blogName}.tumblr.com/posts?api_key=${apiKey}`
        );
        const { response } = yield resp.json();
        yield put(actions.fetchBlogSuccess(response.posts));
    } catch(e) {
        yield put(actions.fetchBlogError(e));
    }
}

export default function* sagas() {
    yield takeLatest(constants.FETCH_BLOG, fetchBlog);
};


// /blog/peacecorps?notes_info=true