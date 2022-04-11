import React, { useEffect, useState } from "react";

import ItemCount from "../ItemCount/ItemCount";

import { useCartContext } from "../../context/CartContext";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const ItemDetail = ({ item }) => {
    const [addedToCart, setAddedToCart] = useState(false);
    const [stockWithCart, setStockWithCart] = useState(item.stock);
    const { addToCart, cantInCart } = useCartContext();

    const onAdd = (cant) => {
        addToCart({ ...item, cant: cant });
        setAddedToCart(true);
    };

    useEffect(() => {
        if (cantInCart(item.id))
            setStockWithCart(item.stock - cantInCart(item.id).cant);
    }, [item, cantInCart]);

    return item ? (
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
                    isInCart={addedToCart}
                    stock={stockWithCart}
                />
            </Grid>
        </Grid>
    ) : (
        <div>NO EXISTE ESTE ITEM</div>
    );
};

export default ItemDetail;
