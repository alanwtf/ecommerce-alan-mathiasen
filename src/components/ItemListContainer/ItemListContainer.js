import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import React from "react";
import "./ItemListContainer.scss";

const ItemListContainer = ({ greeting }) => {
    return (
        <Container maxWidth="lg" sx={{ p: 4 }}>
            <Typography variant="h3">{greeting}</Typography>
        </Container>
    );
};

export default ItemListContainer;
