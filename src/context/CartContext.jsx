import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const totalProducts = () => {
        return cartList.reduce((acc, prod) => (acc += prod.cant), 0);
    };

    const totalPrice = () => {
        return cartList.reduce(
            (total, obj) => (total += obj.price * obj.cant),
            0
        );
    };

    const addToCart = (item) => {
        const foundProduct = cartList.find((prod) => prod.id === item.id);
        if (foundProduct) {
            foundProduct.cant += item.cant;
            setCartList([...cartList]);
        } else {
            setCartList([...cartList, item]);
        }
    };

    const deleteById = (id) => {
        let newCartList = cartList.filter((item) => item.id !== id);

        setCartList(newCartList);
    };

    const clearCart = () => setCartList([]);

    const isInCart = (id) => cartList.some((item) => item.id === id);

    const cantInCart = (id) => cartList.find((item) => item.id === id);

    return (
        <CartContext.Provider
            value={{
                cartList,
                addToCart,
                deleteById,
                totalProducts,
                totalPrice,
                clearCart,
                isInCart,
                cantInCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export { CartContextProvider, useCartContext };
