import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./provides/Layout";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />} />
                {/* <Route index element={<Home/>}/> */}
                {/* <Route path='/cart' element={<Cart/>}/> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;

// Везде именнованый экспорт
