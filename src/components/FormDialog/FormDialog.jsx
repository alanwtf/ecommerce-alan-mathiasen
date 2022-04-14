import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";

const FormDialog = ({
    open = false,
    handleClose,
    handleSubmit,
    data,
    handleChange,
    validate,
    total,
    successMessage,
}) => {
    return (
        <Dialog open={open} onClose={handleClose} disablePortal>
            {!successMessage ? (
                <form action="" onSubmit={handleSubmit}>
                    <DialogTitle>Finalizar compra</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            A continuación, unos últimos datos para poder
                            generar la orden de compra.
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
                            name="lastName"
                            onChange={handleChange}
                            autoFocus
                            value={data.lastName}
                            margin="dense"
                            id="lastName"
                            label="Apellido"
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
                        <Typography
                            variant="caption"
                            sx={{ mt: 1, color: "#df4759" }}
                        >
                            {validate.error ? validate.error : ""}
                        </Typography>
                        <Typography sx={{ mt: 1 }}>
                            Total a pagar:{" "}
                            <span style={{ color: "#4caf50" }}>{total}</span>
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancelar</Button>
                        <Button type="submit" disabled={!validate.value}>
                            Finalizar
                        </Button>
                    </DialogActions>
                </form>
            ) : (
                <>
                    <DialogTitle>{successMessage}</DialogTitle>
                    <DialogActions>
                        <Button onClick={handleClose}>Cerrar</Button>
                    </DialogActions>
                </>
            )}
        </Dialog>
    );
};

export default FormDialog;
