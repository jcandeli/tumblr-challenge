import React, { Component } from 'react';
import Search from './Search';
import BlogPosts from './BlogPosts';
import Favorites from './Favorites';

import './App.css';

class App extends Component {
  render() {
    return (
        <div className="app">
            <div className="col">
                <div className="margined-bottom">
                    <Search />
                </div>

                <BlogPosts />
            </div>

            <div className="col">
                <Favorites />
            </div>
        </div>
    );
  }
}

export default App;

// TODO
// add back to top button