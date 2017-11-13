import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';
import BookList from '../components/book-list';

class BookListContainer extends Component {
  constructor(props) {
    super(props);
    
    this.state = { books: [] };
  }
  
  render() {
    const onSelectBook = (book) => {
      this.props
    }
    return (
      <BookList 
        className="BookList"
        selectBook={this.props.selectBook}
        books={this.props.books} />
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookListContainer);;