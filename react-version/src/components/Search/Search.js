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
      return (
          <div className="search">
              <h2>Search</h2>
  
              <label htmlFor="blogName">
                  Blog Name:
                  <input type="text" id="blogName" name="blogName" value={blogName} onChange={this.handleChange} />
              </label>
  
              <label htmlFor="tag">
                  Tag:
                  <input type="text" id="tag" name="tag" value={tag} onChange={this.handleChange} />
              </label>

              <button onClick={this.search}>Search</button>
          </div>
      );
    }
}

SearchComponent.propTypes = {
    fetchBlog: PropTypes.func
};

SearchComponent.defaultProps = {
    fetchBlog: () => {}
};

const Search = connect(
    null,
    actions
)(SearchComponent);

export default Search;

