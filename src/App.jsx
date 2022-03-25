import { BrowserRouter, Routes, Route } from "react-router-dom";

import CartContainer from "./container/CartContainer/CartContainer";
import ItemDetailContainer from "./container/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./container/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

import { CartContextProvider } from "./context/CartContext";

import "./App.scss";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <CartContextProvider>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<ItemListContainer />} />
                        <Route
                            path="/category/:id"
                            element={<ItemListContainer />}
                        />
                        <Route
                            path="/detail/:id"
                            element={<ItemDetailContainer />}
                        />
                        <Route path="/cart" element={<CartContainer />} />
                        <Route path="/*" element={<ItemListContainer />} />
                    </Routes>
                </CartContextProvider>
            </div>
        </BrowserRouter>
    );
}

export default App;
