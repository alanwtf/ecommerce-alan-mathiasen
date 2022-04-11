import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,
} from "@mui/material";
import React, { useState } from "react";

const FormDialog = ({
    open = false,
    handleClose,
    handleSubmit,
    data,
    handleChange,
    validate,
}) => {
    return (
        <Dialog open={open} onClose={handleClose} disablePortal>
            <form action="" onSubmit={handleSubmit}>
                <DialogTitle>Finalizar compra</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        A continuación, unos últimos datos para poder generar la
                        orden de compra.
                    </DialogContentText>
                    <TextField
                        name="name"
                        onChange={handleChange}
                        autoFocus
                        value={data.name}
                        margin="dense"
                        id="name"
                        label="Nombre"
                        type="string"
                        fullWidth
                        variant="standard"
                        required
                    />
                    <TextField
                        name="email"
                        margin="dense"
                        value={data.email}
                        onChange={handleChange}
                        id="email"
                        label="Email"
                        type="email"
                        fullWidth
                        variant="standard"
                        required
                    />
                    <TextField
                        name="confirmEmail"
                        margin="dense"
                        value={data.confirmEmail}
                        onChange={handleChange}
                        id="confirEmail"
                        label="Repetir email"
                        type="email"
                        fullWidth
                        variant="standard"
                        required
                    />
                    <TextField
                        name="phone"
                        margin="dense"
                        value={data.phone}
                        onChange={handleChange}
                        id="name"
                        label="Numero de Teléfono"
                        type="phone"
                        fullWidth
                        variant="standard"
                        required
                    />
                    <div>{validate.error ? validate.error : ""}</div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancelar</Button>
                    <Button type="submit" disabled={!validate.value}>
                        Finalizar
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
};

export default FormDialog;
