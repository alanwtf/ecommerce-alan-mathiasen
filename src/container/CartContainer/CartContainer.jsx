import {
    Button,
    Grid,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableFooter,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useEffect, useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const CartContainer = () => {
    const { cartList, deleteById, totalPrice, clearCart, totalProducts } =
        useCartContext();
    const [precioTotal, setPrecioTotal] = useState(0);
    const navigate = useNavigate();
    useEffect(() => {
        let total = cartList.reduce(
            (total, obj) => (total += obj.price * obj.cant),
            0
        );
        setPrecioTotal(total);
    }, [cartList]);

    return (
        <Container>
            <TableContainer sx={{ mt: 2 }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ py: 0 }}>Imagen</TableCell>
                            <TableCell sx={{ py: 0 }}>Producto</TableCell>

                            <TableCell
                                sx={{ py: 0 }}
                                size="small"
                                align="right"
                            >
                                Cantidad
                            </TableCell>
                            <TableCell
                                sx={{ py: 0 }}
                                size="small"
                                align="right"
                            >
                                Precio Individual
                            </TableCell>
                            <TableCell sx={{ py: 0 }} align="right">
                                Precio Total
                            </TableCell>
                            <TableCell sx={{ py: 0 }} align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cartList.map((item) => (
                            <TableRow
                                key={item.id}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                {/* <TableCell component="th" scope="row">
                                {item.title}
                            </TableCell> */}
                                <TableCell padding="checkbox">
                                    <Box
                                        component="img"
                                        src={item.img}
                                        sx={{ maxWidth: "80px" }}
                                    />{" "}
                                </TableCell>
                                <TableCell>{item.title}</TableCell>
                                <TableCell size="small" align="right">
                                    {item.cant}
                                </TableCell>
                                <TableCell size="small" align="right">
                                    ${item.price}
                                </TableCell>
                                <TableCell size="small" align="right">
                                    ${item.price * item.cant}
                                </TableCell>
                                <TableCell padding="checkbox">
                                    <IconButton
                                        size="large"
                                        color="inherit"
                                        sx={{}}
                                        onClick={() => deleteById(item.id)}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                        <TableRow>
                            <TableCell />
                            <TableCell />
                            <TableCell />
                            <TableCell align="right">
                                <Typography
                                    variant="h5"
                                    sx={{ height: "45px", lineHeight: "45px" }}
                                >
                                    Total
                                </Typography>
                            </TableCell>
                            <TableCell align="right">
                                <Typography
                                    variant="h5"
                                    sx={{ height: "45px", lineHeight: "45px" }}
                                >
                                    ${totalPrice()}
                                </Typography>{" "}
                            </TableCell>
                            <TableCell />{" "}
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            {/* <ul>
                {cartList.map((item) => (
                    <li key={item.id}>
                        {" "}
                        id:{item.id}
                        cant:{item.cant}
                    </li>
                ))}
            </ul> */}
            <Grid container justifyContent="flex-end">
                {totalProducts() > 0 ? (
                    <>
                        <Button sx={{ mt: 2, mr: 2 }} onClick={clearCart}>
                            Vaciar Carrito
                        </Button>
                        <Button variant="contained" sx={{ mt: 2 }}>
                            Finalizar Compra
                        </Button>
                    </>
                ) : (
                    <Button
                        onClick={() => navigate("/")}
                        variant="contained"
                        sx={{ mt: 2 }}
                    >
                        Seguir comprando
                    </Button>
                )}
            </Grid>
        </Container>
    );
};

export default CartContainer;
