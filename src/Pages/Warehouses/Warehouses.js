import { useParams } from "react-router-dom";
import "../../App.scss"
import WarehouseInventoryList from "../../components/WarehouseInventoryList/WarehouseInventoryList"
import WarehouseList from "../../components/WarehouseList/WarehouseList";


import { useParams } from "react-router-dom";

import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";

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
