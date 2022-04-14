import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import CartWidget from "../CartWidget/CartWidget";

import { collection, getDocs, getFirestore } from "firebase/firestore";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import "./NavBar.scss";

const NavBar = () => {
    const [pages, setPages] = useState([]);
    const [anchorElNav, setAnchorElNav] = useState(null);

    let navigate = useNavigate();

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = (path) => {
        setAnchorElNav(null);
        navigate(path);
    };
    const handleLink = (category) => {
        setAnchorElNav(null);
        navigate(`/category/${category}`);
    };

    useEffect(() => {
        const db = getFirestore();
        const queryCol = collection(db, "categories");
        getDocs(queryCol)
            .then((resp) =>
                setPages(
                    resp.docs.map((cat) => ({ ...cat.data(), id: cat.id }))
                )
            )
            .finally();
    });

    return (
        <AppBar position="static" className="navbar">
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{
                            mr: 2,
                            display: {
                                xs: "none",
                                md: "flex",
                            },
                        }}
                    >
                        <Button
                            onClick={() => handleCloseNavMenu("/")}
                            sx={{
                                my: 1,
                                color: "white",
                                display: "block",
                                fontSize: "1.2rem",
                            }}
                        >
                            SKATESTORE
                        </Button>
                    </Typography>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    key={page.id}
                                    onClick={() => handleLink(page.name)}
                                >
                                    <Typography textAlign="center">
                                        {page.name}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                        }}
                    >
                        <Button
                            onClick={() => navigate("/")}
                            sx={{
                                my: 1,
                                color: "white",
                                display: "block",
                                fontSize: "1.2rem",
                            }}
                        >
                            SKATESTORE
                        </Button>
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                        }}
                    >
                        {pages.map((page) => (
                            <Button
                                key={page.id}
                                onClick={() => handleLink(page.name)}
                                sx={{ my: 2, color: "white", display: "block" }}
                            >
                                {page.name}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }} onClick={() => navigate("/cart")}>
                        <CartWidget />{" "}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default NavBar;
