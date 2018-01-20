import { call, put, takeLatest } from 'redux-saga/effects';
import { actions, constants } from '../tumblr';

function* fetchBlog(action) {
    
}

export default function* sagas() {
    yield takeLatest(constants.FETCH_BLOG, fetchBlog);
};
