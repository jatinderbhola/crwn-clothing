import React from "react";
import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";

const CartDropdown = ({ cartItems }) => (
    <div className="cart-dropdown">
        <div className="cart-item"></div>

        {cartItems.map((item) => (
            <div key={item.id}>
                <p> {item.name}</p>
                <p> {item.imageUrl}</p>
                {/* <p> {item.quantity}</p> */}
            </div>
        ))}

        <CustomButton> Go To Checkout</CustomButton>
    </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
