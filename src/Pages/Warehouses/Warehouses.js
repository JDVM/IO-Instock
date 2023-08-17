import "../../App.scss"
import WarehouseInventoryList from "../../components/WarehouseInventoryList/WarehouseInventoryList"


import { useParams } from "react-router-dom";

import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";

function Warehouses() {
  const { id } = useParams();

  if (id) {
    return (
      <div className="warehouses-page">
        <WarehouseInventoryList />
        <WarehouseDetails id={id} />
      </div>
    );
  }
}

export default Warehouses;
