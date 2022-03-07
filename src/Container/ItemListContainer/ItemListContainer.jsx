import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import React from "react";
import "./ItemListContainer.scss";
import ItemCount from "../../components/ItemCount/ItemCount";

const ItemListContainer = ({ greeting }) => {
    const handleAddToCart = (qty) => {
        console.log(qty);
    };
    return (
        <Container maxWidth="lg" sx={{ p: 4 }}>
            <ItemCount initial={4} stock={8} onAdd={handleAddToCart} />
        </Container>
    );
};

export default ItemListContainer;
