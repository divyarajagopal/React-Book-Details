import React from "react";
import PropTypes from "prop-types";
import BookDetail from "../components/bookDetail";

const HomeStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

const Home = ({ match }) => (
  <div style={HomeStyle}>
    <BookDetail />

    
  </div>
);



export default Home;