import React, { useState, useEffect } from "react";

import "./ItemCount.scss";

import foto from "../../images/zapas-nike.webp";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";

const ItemCount = ({ initial = 3, stock = 10, onAdd }) => {
    const [count, setCount] = useState(initial);

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

    useEffect(() => setCount(initial), [initial]);

    return (
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
};

export default ItemCount;
