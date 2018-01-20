import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actions } from '../../redux/tumblr';

import './styles/Search.css';

class SearchComponent extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.search = this.search.bind(this);
        this.state = {
            blogName: '',
            tag: ''
        };
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    search() {
        const { blogName, tag } = this.state;
        this.props.fetchBlog(blogName, tag);
    }

    render() {
        const { blogName, tag, loading } = this.state;
        return (
            <div className="search">
                <h2>Search</h2>
                <p>{loading && 'loading'}</p>

                <label htmlFor="blogName">
                    Blog Name:
                    <input
                        type="text"
                        id="blogName"
                        name="blogName"
                        value={blogName}
                        onChange={this.handleChange}
                    />
                </label>

                <label htmlFor="tag">
                    Tag:
                    <input
                        type="text"
                        id="tag"
                        name="tag"
                        value={tag}
                        onChange={this.handleChange}
                    />
                </label>

                <button
                    className="btn btn-primary"
                    onClick={this.search}
                    disabled={(loading || (blogName === '' && tag === ''))}
                >
                    Search
                </button>
            </div>
        );
    }
}

const mapStateToProps = ({ tumblr: { loading } }) => ({ loading });

SearchComponent.propTypes = {
    fetchBlog: PropTypes.func,
    loading: PropTypes.bool
};

SearchComponent.defaultProps = {
    fetchBlog: () => {},
    loading: false
};

const Search = connect(
    mapStateToProps,
    actions
)(SearchComponent);

export default Search;


// TODO
// disable search button if no blog name or tag entered
// disable search if still loading
