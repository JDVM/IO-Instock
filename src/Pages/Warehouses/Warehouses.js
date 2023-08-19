import { useParams,useLocation } from "react-router-dom";
import "../../App.scss"
import WarehouseInventoryList from "../../components/WarehouseInventoryList/WarehouseInventoryList"
import WarehouseList from "../../components/WarehouseList/WarehouseList";
import EditWarehouse from "../../components/EditWarehouse/EditWarehouse"
import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";
function Warehouses() {
  const { id } = useParams();
  const location = useLocation();
  const isEditing = location.pathname.endsWith('/edit');






  console.log('isEditing:', isEditing);
  console.log('id:', id);

  if (isEditing) {
    console.log('Rendering EditWarehouse');
    return (
      <>
        <EditWarehouse />
      </>
    );
  }
  if (id && !isEditing) {
    console.log('Rendering WarehouseInventoryList');
    return (
      <>
          <WarehouseDetails id={id} />
        <WarehouseInventoryList />
      </>
    );
  }

  console.log('Rendering WarehouseList');
  return (
    <>
      <WarehouseList />
    </>
  );
}
export default Warehouses;
