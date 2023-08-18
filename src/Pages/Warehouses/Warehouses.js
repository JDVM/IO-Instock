import { useParams } from "react-router";
import "../../App.scss"
import WarehouseInventoryList from "../../components/WarehouseInventoryList/WarehouseInventoryList"
import WarehouseList from "../../components/WarehouseList/WarehouseList";

function Warehouses() {
const {id} = useParams()
if( id ){
  return(
    <>
    <WarehouseInventoryList />
    </>
  )
}

  return (
   <>
   <WarehouseList />
   </>
);
}

export default Warehouses;
