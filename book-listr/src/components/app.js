import React, { Component } from 'react';
import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="/">
                Book Listr
              </a>
            </div>
          </div>
        </nav>
        <main className="container">
          <div className="row">
            <BookList />
            <BookDetail />
          </div>
        </main>
      </div>
    );
  }
}
