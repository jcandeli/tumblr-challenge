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
    posts: [
             {
                "blog_name": "citriccomics",
                "id": 3507845453,
                "post_url": "http://citriccomics.tumblr.com/post/3507845453",
                "type": "text",
                "date": "2011-02-25 20:27:00 GMT",
                "timestamp": 1298665620,
                "state": "published",
                "format": "html",
                "reblog_key": "b0baQtsl",
                "tags": [
                     "tumblrize",
                     "milky dog",
                     "mini comic"
                ],
                "note_count": 14,
                "title": "Milky Dog 1",
                "body": `<p><img src="http://media.tumblr.com/tumblr_lh6x8d7LBB1qa6gy3.jpg"/>
                    <a href="http:/
                     /citriccomics.com/blog/?p=487" target="_blank">TO READ
                     THE REST CLICK HERE</a><br/>nnMilky Dog was inspired by
                     something <a href="http://gunadie.com/naomi"
                     target="_blank">Naomi Gee</a> wrote on twitter, I really
                     liked the hash tag <a href="http://twitter.com/
                     search?q=%23MILKYDOG" target="_blank">#milkydog</a>
                     and quickly came up with a little comic about it. You can
                     (and should) follow Naomi on twitter <a href="http:/
                     /twitter.com/ngun" target="_blank">@ngun</a> I'm on
                     twitter as well <a href="http://twitter.com
                     /weflewairplanes"target="_blank">@weflewairplanes</a>
                     </p>nnAlso, if youâ€™re a Reddit user (or even if
                     you're not) I submitted this there, if you could up vote
                     it I'd be super grateful just <a href="http:/
                     /tinyurl.com/5wj3tqz" target="_blank">CLICK HERE</a>`
             },
             {
                "blog_name": "citriccomics",
                "id": 3507845454,
                "post_url": "http://citriccomics.tumblr.com/post/3507845453",
                "type": "text",
                "date": "2011-02-25 20:27:00 GMT",
                "timestamp": 1298665620,
                "state": "published",
                "format": "html",
                "reblog_key": "b0baQtsl",
                "tags": [
                     "tumblrize",
                     "milky dog",
                     "mini comic"
                ],
                "note_count": 14,
                "title": "Milky Dog 2",
                "body": `<p><img src="http://media.tumblr.com/tumblr_lh6x8d7LBB1qa6gy3.jpg"/>
                    <a href="http:/
                     /citriccomics.com/blog/?p=487" target="_blank">TO READ
                     THE REST CLICK HERE</a><br/>nnMilky Dog was inspired by
                     something <a href="http://gunadie.com/naomi"
                     target="_blank">Naomi Gee</a> wrote on twitter, I really
                     liked the hash tag <a href="http://twitter.com/
                     search?q=%23MILKYDOG" target="_blank">#milkydog</a>
                     and quickly came up with a little comic about it. You can
                     (and should) follow Naomi on twitter <a href="http:/
                     /twitter.com/ngun" target="_blank">@ngun</a> I'm on
                     twitter as well <a href="http://twitter.com
                     /weflewairplanes"target="_blank">@weflewairplanes</a>
                     </p>nnAlso, if youâ€™re a Reddit user (or even if
                     you're not) I submitted this there, if you could up vote
                     it I'd be super grateful just <a href="http:/
                     /tinyurl.com/5wj3tqz" target="_blank">CLICK HERE</a>`
             }
        ]
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
        return { ...state, loading: true };
    case constants.FETCH_BLOG_SUCCESS:
        return { ...state, loading: false };
    case constants.FETCH_BLOG_ERROR:
        return { ...state, loading: false };
    default:
            return state;
    }
}