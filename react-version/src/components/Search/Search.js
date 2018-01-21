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
        const { blogName, tag } = this.state;
        const { loading, errors } = this.props;

        return (
            <div className="search">
                <h1>Tumblr Search</h1>

                <label htmlFor="blogName" className="margined-right">
                    Blog Name:
                    <input
                        type="text"
                        id="blogName"
                        name="blogName"
                        value={blogName}
                        onChange={this.handleChange}
                        className="margined-left-sm"
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
                        className="margined-left-sm"
                    />
                </label>

                <div className="margined-top">
                    <button
                        className="btn btn-primary"
                        onClick={this.search}
                        disabled={(loading || (blogName === '' && tag === ''))}
                    >
                        Search
                    </button>
                </div>


                {
                    errors.map(error => (
                        <p className="error-message" key="error.title">{error.title}</p>
                    ))
                }
            </div>
        );
    }
}

const mapStateToProps = ({ tumblr: { loading, errors } }) => ({ loading, errors });

SearchComponent.propTypes = {
    fetchBlog: PropTypes.func,
    loading: PropTypes.bool,
    errors: PropTypes.array
};

SearchComponent.defaultProps = {
    fetchBlog: () => {},
    loading: false,
    errors: []
};

const Search = connect(
    mapStateToProps,
    actions
)(SearchComponent);

export default Search;
