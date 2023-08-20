import "./App.scss";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Warehouses from "./pages/Warehouses/Warehouses";
import Inventory from "./pages/Inventory/Inventory";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import EditWarehouse from './components/EditWarehouse/EditWarehouse';
import Modal from 'react-modal';
Modal.setAppElement('#root');

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/Warehouses" />} />
        {/* <Route path="/" element={<Warehouses />} /> */}
        <Route path="/Warehouses/:id/edit" element={<EditWarehouse />} />
        <Route path="/Warehouses" element={<Warehouses />} />
        <Route path="/Warehouses/new" element={<Warehouses />} />
        <Route path="/Warehouses/:id" element={<Warehouses />} />
        <Route path="/Inventory" element={<Inventory />} />
        <Route path="/Inventory/new" element={<Inventory />} />
        <Route path="/Inventory/:id" element={<Inventory />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
