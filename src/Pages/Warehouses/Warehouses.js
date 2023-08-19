import { useParams, useLocation } from "react-router-dom";
import "../../App.scss";
import WarehouseInventoryList from "../../components/WarehouseInventoryList/WarehouseInventoryList";
import WarehouseList from "../../components/WarehouseList/WarehouseList";
import AddWarehouse from "../../components/AddWarehouse/AddWarehouse";
import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";

function Warehouses() {
  const location = useLocation();
  const { id } = useParams();
  if (id) {
    return (
      <>
        <WarehouseDetails id={id} />
        <WarehouseInventoryList />
      </>
    );
  }

  if (location.pathname.endsWith("/new")) {
    return (
      <>
        <AddWarehouse />
      </>
    );
  }

  return (
    <>
      <WarehouseList />
    </>
  );
}

export default Warehouses;
