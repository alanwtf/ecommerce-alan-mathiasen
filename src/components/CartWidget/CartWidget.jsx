import React from "react";

import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { useCartContext } from "../../context/CartContext";

const CartWidget = () => {
    const { totalProducts } = useCartContext();

    return (
        <IconButton size="large" color="inherit">
            <Badge badgeContent={totalProducts()} color="secondary">
                <ShoppingCartIcon />
            </Badge>
        </IconButton>
    );
};

export default CartWidget;
