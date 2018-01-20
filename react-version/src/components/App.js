import React, { Component } from 'react';
import Search from './Search';
import BlogPosts from './BlogPosts';
import Favorites from './Favorites';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search />
        <BlogPosts />
        <Favorites />
      </div>
    );
  }
}

export default App;

