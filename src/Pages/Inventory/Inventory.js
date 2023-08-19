import { useLocation } from "react-router-dom";
import "./Inventory.scss";

import AddInventory from "../../components/AddInventory/AddInventory";
import InventoryDetails from "../../components/InventoryDetails/InventoryDetails";

function Inventory() {
  const location = useLocation();

  console.log(location.pathname);
  if (location.pathname.endsWith("/new"))
    return (
      <div className="inventories">
        <AddInventory />
        <InventoryDetails />
        <AddInventory />
      </div>
    );
}

export default Inventory;
