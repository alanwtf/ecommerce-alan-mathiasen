import React, { useState, useEffect } from "react";

import ItemList from "../../components/ItemList/ItemList";
import Loading from "../../components/Loading/Loading";

import { useParams } from "react-router-dom";

import {
    getFirestore,
    collection,
    getDocs,
    query,
    where,
} from "firebase/firestore";

import Container from "@mui/material/Container";
import "./ItemListContainer.scss";

const ItemListContainer = () => {
    const [prods, setProds] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const queryCol = collection(db, "products");
        let queryFilter;
        if (id) {
            console.log(id);
            queryFilter = query(queryCol, where("category", "==", id));
        } else {
            queryFilter = query(queryCol);
        }
        getDocs(queryFilter)
            .then((resp) =>
                setProds(
                    resp.docs.map((prod) => ({
                        id: prod.id,
                        ...prod.data(),
                    }))
                )
            )
            .finally(() => setLoading(false));
    }, [id]);

    return (
        <Container maxWidth="lg" sx={{ p: 4 }}>
            {loading ? <Loading /> : <ItemList items={prods} />}
        </Container>
    );
};

export default ItemListContainer;
