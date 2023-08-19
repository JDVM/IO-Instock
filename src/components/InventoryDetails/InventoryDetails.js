import "./inventoryDetails.scss";
import backarrow from "../../assets/images/Icons/arrow_back-24px.svg";
import editCircle from "../../assets/images/Icons/edit-white-24px.svg";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import getWarehouseById from "../../utils/getWarehouseById"

const API_URL = process.env.REACT_APP_API_URL;
const PORT = process.env.REACT_APP_API_PORT;
function InventoryDetails() {

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const [inventoryData, setInventoryData] = useState();
  const [warehouseName, setWarehouseName] = useState(""); // State to hold the warehouse name
  const { id } = useParams();

  const API_URL = process.env.REACT_APP_API_URL;
  const PORT = process.env.REACT_APP_API_PORT;

  useEffect(() => {
    axios.get(`${API_URL}:${PORT}/inventories/${id}`).then((res) => {
      const inventoryInfo = res.data;
      setInventoryData(inventoryInfo);

      getWarehouseById(inventoryInfo.warehouse_id)
        .then((warehouseInfo) => {
          setWarehouseName(warehouseInfo.warehouse_name);
        })
        .catch((error) => {
          console.error(error);
        });
    }).catch((error) => {
      console.error(error);
    });
  }, []);

  if (!inventoryData) {
    return <p>Loading...</p>;
  }

  
  return (
    <section className="inventory-details">
      <header className="inventory-details__header">
        <h1 className="inventory-details__page-title">
          <img src={backarrow} alt="Back arrowkey" onClick={goBack} />
          {inventoryData.item_name}
        </h1>
        <button className="inventory-details__edit-button">
          <img
            className="inventory-details__svg"
            src={editCircle}
            alt="Edit Icon"
          />
          <p className="inventory-details__tablet-visable">Edit</p>
        </button>
      </header>
      <section className="inventory-details__information">
        <div className="inventory-details__description-and-catergory-container">
          <div className="inventory-details__description">
            <h3 className="inventory-details__title">ITEM DESCRIPTION:</h3>
            <p className="inventory-details__text">{inventoryData.description}</p>
          </div>
          <div className="inventory-details__category">
            <h3 className="inventory-details__title">CATEGORY:</h3>
            <p className="inventory-details__text">{inventoryData.category}</p>
          </div>
        </div>
        <div className="inventory-details__status-quantity-warehouse-container">
          <div className="inventory-details__status">
            <h3 className="inventory-details__title">STATUS:</h3>
            <p className={`inventory-details__text-status ${inventoryData.status === "Out of Stock" ? "inventory-details__text-status--status-color-out-of-stock" : "inventory-details__text-status--status-color-instock"}`}>{inventoryData.status}</p>
          </div>
          <div className="inventory-details__quantity">
            <h3 className="inventory-details__title">QUANTIY:</h3>
            <p className="inventory-details__text" >{inventoryData.quantity}</p>
          </div>
          <div className="inventory-details__warehouse">
            <h3 className="inventory-details__title">WAREHOUSE:</h3>
            <p className="inventory-details__text">{warehouseName}</p>
          </div>
        </div>
      </section>
    </section>
  );
}
export default InventoryDetails;