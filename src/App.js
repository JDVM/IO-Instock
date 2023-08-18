import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Warehouses from "./Pages/Warehouses/Warehouses";
import Inventory from "./Pages/Inventory/Inventory";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import EditWarehouse from './components/EditWarehouse/EditWarehouse';

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/Warehouses" element={<Warehouses/>} />
        <Route path="/Warehouses/:id" element={<Warehouses/>} />
        <Route path="/Inventory" element={<Inventory/>} />
        <Route path="/warehouse/:id/edit" element={<EditWarehouse />} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App;
