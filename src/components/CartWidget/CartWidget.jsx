import React from "react";

import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartWidget = () => {
    let itemsQty = 3;
    return (
        <IconButton size="large" color="inherit">
            <Badge badgeContent={itemsQty} color="secondary">
                <ShoppingCartIcon />
            </Badge>
        </IconButton>
    );
};

export default CartWidget;
