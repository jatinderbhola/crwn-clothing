import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import { selectCartItemCount } from "../../redux/cart/cart.selector";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{itemCount}</span>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
});
// NOTEME: SELECTOR

// ISSUE: render component every time
// Solution: Memorization
// lib: re select
const mapStateToProps = (state) => ({
    itemCount: selectCartItemCount(state),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
