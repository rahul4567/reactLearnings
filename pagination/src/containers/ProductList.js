import { connect } from "react-redux";

import ProductList from "../components/ProductList";

const mapStateToProps = state => {
  return {
    products: state.products,
    pageInfo : state.pageInfo
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
