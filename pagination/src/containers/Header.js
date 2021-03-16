import { connect } from "react-redux";

import Header from "../components/Header";

const showBackButton = (pathname) => (
  pathname !== '/' ? true : false
);

const showCartButton = (pathname) => (
  !pathname.includes('cart') ? true : false
);

const HeaderContainer = connect(
  (state, ownProps) => (
    {
      children: ownProps.children,
      cartItems: state.cart.length,
      backButton: showBackButton(ownProps.location.pathname),
      cartButton: showCartButton(ownProps.location.pathname),
    }
  )
)(Header);

export default HeaderContainer;
