import React, { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import "./ItemCount.scss";
import { useNavigate } from "react-router-dom";

const ItemCount = ({ initial = 1, stock = 5, onAdd, isInCart }) => {
    const [count, setCount] = useState(initial);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubstract = () => {
        if (count > 1) {
            setCount(count - 1);
            setError("");
        } else {
            setError("El valor no puede ser menor a 1");
        }
    };

    const handleAdd = () => {
        if (count < stock) {
            setCount(count + 1);
            setError("");
        } else {
            setError(
                `El valor no puede ser mayor al stock. Stock disponible: ${stock}`
            );
        }
    };

    const ShowCounter = () => (
        <Box className="item-count-container">
            <Typography variant="caption">Stock: {stock}</Typography>
            {stock < 1 ? (
                <Typography variant="subtitle2">Sin stock.</Typography>
            ) : (
                <Box className="item-count-btns">
                    <ButtonBase className="count-btn" onClick={handleSubstract}>
                        -
                    </ButtonBase>
                    <Typography>{count}</Typography>
                    <ButtonBase className="count-btn" onClick={handleAdd}>
                        +
                    </ButtonBase>
                </Box>
            )}
            <Typography variant="caption" sx={{ color: "#df4759" }}>
                {error ? error : ""}
            </Typography>
            <Button
                fullWidth
                size="small"
                variant="text"
                color="secondary"
                disabled={stock < 1}
                onClick={() => onAdd(count)}
                sx={{ mt: 1 }}
            >
                Agregar al carrito
            </Button>
        </Box>
    );

    const HideCounter = () => (
        <Box className="item-count-container">
            <Button
                fullWidth
                size="small"
                variant="text"
                color="success"
                onClick={() => navigate("/")}
                sx={{ mt: 0 }}
            >
                Seguir Comprando
            </Button>
            <Button
                fullWidth
                size="small"
                variant="text"
                color="secondary"
                onClick={() => navigate("/cart")}
                sx={{ mt: 1 }}
            >
                Ir al Carrito
            </Button>
        </Box>
    );

    return isInCart ? <HideCounter /> : <ShowCounter />;
};

export default ItemCount;
