import "../../App.scss"
import WarehouseInventoryList from "../../components/WarehouseInventoryList/WarehouseInventoryList"
import WarehouseList from "../../components/WarehouseList/WarehouseList";

function Warehouses() {
  return (
   <>
   <WarehouseList />
   <WarehouseInventoryList />
   </>
);
}

export default Warehouses;
