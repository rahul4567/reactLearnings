import { connect } from "react-redux";

import ProductDetail from "../components/ProductDetail";

export default connect(
  (state, ownProps) =>  {
    return state.products.find(item => String(item.id) === ownProps.match.params.productId)
  }
)(ProductDetail);
