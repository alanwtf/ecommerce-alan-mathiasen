import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const Item = ({ prod }) => {
    let navigate = useNavigate();

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="160"
                image={prod.img}
                alt="zapas"
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {prod.title}
                </Typography>
                <Typography variant="body2">{`$${prod.price}`}</Typography>
            </CardContent>
            <CardActions>
                <Button
                    size="small"
                    color="secondary"
                    onClick={() => navigate(`/detail/${prod.id}`)}
                >
                    Ver mas
                </Button>
            </CardActions>
        </Card>
    );
};

export default Item;
