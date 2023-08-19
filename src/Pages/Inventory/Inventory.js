import { useLocation, useParams } from "react-router-dom";
import "./Inventory.scss";
import AddInventory from "../../components/AddInventory/AddInventory";
import InventoryDetails from "../../components/InventoryDetails/InventoryDetails";

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
      <>
        <InventoryDetails />
      </>
    );
  }
}

export default Inventory;
