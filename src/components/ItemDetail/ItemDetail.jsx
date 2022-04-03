import React, { useState } from "react";

import ItemCount from "../ItemCount/ItemCount";

import { useCartContext } from "../../context/CartContext";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const ItemDetail = ({ item }) => {
    const [isInCart, setIsInCart] = useState(false);
    const { addToCart } = useCartContext();

    const onAdd = (cant) => {
        addToCart({ ...item, cant: cant });
        setIsInCart(true);
    };

    return (
        <Grid container spacing={3}>
            <Grid item md={7} sm={12}>
                <Box component="img" sx={{ width: "100%" }} src={item.img} />
            </Grid>
            <Grid item md={5} sm={12}>
                <Typography variant="h5">{item.title}</Typography>
                <Typography variant="h6">{`$${item.price}`}</Typography>
                <Typography variant="body2" sx={{ mt: 2 }}>
                    {item.description}
                </Typography>
                <ItemCount
                    onAdd={onAdd}
                    isInCart={isInCart}
                    stock={item.stock}
                />
            </Grid>
        </Grid>
    );
};

export default ItemDetail;
