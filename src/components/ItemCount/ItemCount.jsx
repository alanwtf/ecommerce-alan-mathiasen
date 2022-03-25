import React, { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import "./ItemCount.scss";
import { useNavigate } from "react-router-dom";

const ItemCount = ({ initial = 1, stock = 5, onAdd, isInCart }) => {
    const [count, setCount] = useState(initial);
    const navigate = useNavigate();

    const handleSubstract = () => {
        count > 1
            ? setCount(count - 1)
            : alert("El valor no puede ser menor a 1");
    };

    const handleAdd = () => {
        count < stock
            ? setCount(count + 1)
            : alert(
                  `El valor no puede ser mayor al stock. Stock disponible: ${stock}`
              );
    };

    const ShowCounter = () => (
        <Box className="item-count-container">
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
                disabled={stock < 1}
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
                disabled={stock < 1}
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
