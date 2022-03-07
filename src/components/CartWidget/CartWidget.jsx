import { Badge, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import React from "react";
import "./CartWidget.scss";

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
