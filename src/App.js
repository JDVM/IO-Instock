import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
        <Route path="/" element={<Warehouses />} />
        <Route path="/Warehouses" element={<Warehouses/>} />
        <Route path="/Warehouses/:id" element={<Warehouses/>} />
        <Route path="/Inventory" element={<Inventory/>} />
        <Route path="/warehouses/:id/edit" element={ <EditWarehouse  />}/>
        <Route path="*" element={<PageNotFound/>} />
        <Route path="/Inventory/new" element={<Inventory />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
