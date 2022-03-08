import React, { useState, useEffect } from "react";
import ItemList from "../../components/ItemList/ItemList";
import ItemCount from "../../components/ItemCount/ItemCount";

import { getFetch } from "../../helpers/getFetch";

import "./ItemListContainer.scss";
import Container from "@mui/material/Container";
import { Box, CircularProgress } from "@mui/material";

const ItemListContainer = ({ greeting }) => {
    const [prods, setProds] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getFetch
            .then((resp) => setProds(resp))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }, []);

    const handleAddToCart = (qty) => {
        alert(`Has agregado ${qty} item${qty > 1 ? "s" : ""} al carrito`);
    };
    return (
        <Container maxWidth="lg" sx={{ p: 4 }}>
            {greeting}

            <ItemCount initial={3} stock={4} onAdd={handleAddToCart} />

            {loading ? (
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <CircularProgress color="secondary" />
                </Box>
            ) : (
                <ItemList items={prods} />
            )}
        </Container>
    );
};

export default ItemListContainer;
