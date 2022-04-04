import {
    Button,
    Grid,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";

import FormDialog from "../FormDialog/FormDialog";

import { Box } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";

import { useCartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = ({ open, handleOpen, handleClose }) => {
    const { cartList, deleteById, totalPrice, clearCart, totalProducts } =
        useCartContext();
    const navigate = useNavigate();

    return (
        <>
            <TableContainer sx={{ mt: 2 }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    {totalProducts() < 1 ? (
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <Typography variant="h5">
                                        {" "}
                                        Todavia no compraste nada!
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                    ) : (
                        <>
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ py: 0 }}>Imagen</TableCell>
                                    <TableCell sx={{ py: 0 }}>
                                        Producto
                                    </TableCell>

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
                                    <TableCell sx={{ py: 0 }} align="right">
                                        {""}
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {cartList.map((item) => (
                                    <TableRow
                                        key={item.id}
                                        sx={{
                                            "&:last-child td, &:last-child th":
                                                {
                                                    border: 0,
                                                },
                                        }}
                                    >
                                        <TableCell padding="checkbox">
                                            <Box
                                                component="img"
                                                src={item.img}
                                                sx={{ maxWidth: "80px" }}
                                            />{" "}
                                        </TableCell>
                                        <TableCell>{item.title}</TableCell>
                                        <TableCell size="small" align="right">
                                            <Box>{item.cant}</Box>
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
                                                onClick={() =>
                                                    deleteById(item.id)
                                                }
                                            >
                                                <DeleteIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                                <TableRow
                                    sx={{
                                        "&:last-child td, &:last-child th": {
                                            border: 0,
                                        },
                                    }}
                                >
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell align="right">
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                height: "45px",
                                                lineHeight: "45px",
                                            }}
                                        >
                                            Total
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                height: "45px",
                                                lineHeight: "45px",
                                            }}
                                        >
                                            ${totalPrice()}
                                        </Typography>
                                    </TableCell>
                                    <TableCell> </TableCell>
                                </TableRow>
                            </TableBody>
                        </>
                    )}
                </Table>
            </TableContainer>
            <Grid container justifyContent="flex-end">
                {totalProducts() > 0 ? (
                    <>
                        <Button sx={{ mt: 2, mr: 2 }} onClick={clearCart}>
                            Vaciar Carrito
                        </Button>
                        <Button
                            variant="contained"
                            sx={{ mt: 2 }}
                            onClick={handleOpen}
                        >
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
        </>
    );
};

export default Cart;
