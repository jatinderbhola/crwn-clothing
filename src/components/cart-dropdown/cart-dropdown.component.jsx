import React from "react";
import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selector";

const CartDropdown = ({ cartItems }) => (
    <div className="cart-dropdown">
        {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
        ))}
        <CustomButton> Go To Checkout</CustomButton>
    </div>
);

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
