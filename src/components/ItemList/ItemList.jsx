import Item from "../Item/Item";

import Grid from "@mui/material/Grid";

const ItemList = ({ items }) => {
    return (
        <Grid container spacing={3}>
            {items.map((prod) => (
                <Grid item xs={12} sm={6} md={3} key={prod.id}>
                    <Item prod={prod} />
                </Grid>
            ))}
        </Grid>
    );
};

export default ItemList;
