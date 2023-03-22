import "./App.css";
import Products from "./pages/Products";
import Single from "./pages/Single";
import Category from "./pages/Category";
import Bored from "./pages/Bored";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <h1>H&M</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/Product/:id" element={<Single />} />
          <Route path="/products/:id" element={<Category />} />
          <Route path="/bored" element={<Bored />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
