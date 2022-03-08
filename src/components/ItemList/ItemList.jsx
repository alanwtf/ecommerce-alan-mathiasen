import Grid from "@mui/material/Grid";
import React from "react";

import Item from "../Item/Item";

const ItemList = ({ items }) => {
    return (
        <Grid container spacing={3}>
            {items.map((prod) => (
                <Grid item xs={12} sm={6} md={3}>
                    <Item prod={prod} key={prod.id} />
                </Grid>
            ))}
        </Grid>
    );
};

export default ItemList;
