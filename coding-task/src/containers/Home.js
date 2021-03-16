import { connect } from "react-redux";

import Home from "../components/Home";

const mapStateToProps = state => {
  return {
    authors: state.authors,
    posts : state.posts
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
