import { BrowserRouter, Routes, Route } from "react-router-dom";

import ItemDetailContainer from "./container/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./container/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

import "./App.scss";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
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
                    <Route path="/*" element={<ItemListContainer />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
