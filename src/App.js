import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Warehouses from "./Pages/Warehouses/Warehouses";
import Inventory from "./Pages/Inventory/Inventory";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Warehouses/>} />
        <Route path="/" element={<Inventory/>} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
