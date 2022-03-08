import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material";
import React from "react";

const Item = ({ prod }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="160"
                image={prod.img}
                alt="zapas"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {prod.title}
                </Typography>
                <Typography variant="body2">{`$${prod.price}`}</Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="secondary">
                    Ver mas
                </Button>
            </CardActions>
        </Card>
    );
};

export default Item;
