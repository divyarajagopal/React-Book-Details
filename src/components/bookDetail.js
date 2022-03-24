import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import fetchBooksAction from "../utils/api";
import { getbooksError, getbooks, getbooksPending } from "../store/bookReducer";
//import ProductList from './FetchBooks';
import fetchbooks from "../utils/api";
import styled from "styled-components";

const BookContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const BookHeader = styled.h1`
font-size: 30px; letter-spacing: -1px; color: #DFBF84; text-transform: uppercase; text-shadow: 1px 1px 0 #000, margin: 10px 0 24px; text-align: center; line-height: 50px;
`;

const BookList = styled.ul`
padding: 0;
	margin: 50px auto;
	list-style: none;
	text-align: center;

  li{
    display: inline-block;
	width: 20%;
	min-width: 200px;
	max-width: 325px;
	padding: 80px 20px 40px;
	position: relative;
	vertical-align: top;
	margin: 10px;
	font-family: 'helvetica', san-serif;
	min-height: 25vh;
	background: #262a2b;
	border: 1px solid #252727;
	text-align: left;
  }
  li:before{
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    z-index: -1;
    background: #fff;
    transform: skew(2deg, 2deg);
  }
  li:nth-child(odd):before {
    background: #C9FFBF;
    background: -webkit-linear-gradient(to right, #FFAFBD, #C9FFBF);
    background: linear-gradient(to right, #FFAFBD, #C9FFBF);
}
li:nth-child(even):before {
  background: #f2709c;
  background: -webkit-linear-gradient(to right, #ff9472, #f2709c);
  background: linear-gradient(to right, #ff9472, #f2709c);
}
  h2{
    font-size: 114px;
	margin: 0;
	position: absolute;
	opacity: 0.2;
	top: 50px;
	right: 10px;
	transition: all 0.3s ease-in-out;
  }
  li:hover h2 {
    top: 0px;
    opacity: 0.6;
  }
  h4{
    font-size: 17px;
	color: #b7b7b7;
	margin-bottom: 5px;
  }

  p {
    font-size: 16px;
	
	color: #b7b7b7;

    padding: 10px;
    margin: 0;
    line-height: 20px;
  }
  a{
    font-size: 16px;
	
	color: #b7b7b7;

    padding: 10px;
    margin: 0;
    line-height: 20px;
  }
`;

class BookView extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  componentWillMount() {
    const { fetchbooks } = this.props;
    fetchbooks();
  }
  componentDidMount() {
    fetchbooks();
  }

  shouldComponentRender() {
    const { pending } = this.props;
    if (this.pending === false) return false;
    // more tests
    return true;
  }

  render() {
    const { books, error, pending } = this.props;

    return (
      <BookContainer className="Book-list-wrapper">
        {error && <span className="Book-list-error">{error}</span>}
        <div>
          <BookHeader> Book Details</BookHeader>
          <BookList>
            {books.map(book => (
              <li key={book.book_id} align="start">
                <h2>{book.book_id}</h2>
                <div>
                  <p><h4>Name:</h4> <span> {book.name}</span></p>
                  <p><h4>ISBN:</h4> <span> {book.isbn}</span></p>
                  <p><h4>Published At: </h4><span>{book.published_at}</span></p>
                  <p><h4>Author:</h4><span>{book.author}</span> </p>
                  <p><h4>Cover:</h4><a href="#"> {book.cover}</a></p>
                </div>
              </li>
            ))}
          </BookList>
        </div>
      </BookContainer>
    );
  }
}

const mapStateToProps = state => ({
  error: getbooksError(state),
  books: getbooks(state),
  pending: getbooksPending(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchbooks: fetchBooksAction
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookView);
