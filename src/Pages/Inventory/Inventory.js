import { useLocation, useParams } from "react-router-dom";
import "./Inventory.scss";
import AddInventory from "../../components/AddInventory/AddInventory";
import InventoryDetails from "../../components/InventoryDetails/InventoryDetails";
import InventoryList from "../../components/InventoryList/InventoryList";

function Inventory() {
  const location = useLocation();
  const { id } = useParams();
  console.log(location.pathname);
  if (location.pathname.endsWith("/new"))
    return (
      <div className="inventories">
        <AddInventory />
      </div>
    );
  if (id) {
    return (
      <div className="inventories">
        <InventoryDetails />
      </div>
    );
  }

  return (
    <div className="inventories">
      <InventoryList />
    </div>
  );
}

export default Inventory;
