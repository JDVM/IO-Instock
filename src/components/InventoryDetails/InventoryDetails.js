import "./inventoryDetails.scss";
import backarrow from "../../assets/images/Icons/arrow_back-24px.svg";
import editCircle from "../../assets/images/Icons/edit-white-24px.svg";
import { Link, useParams, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { response } from "express";
const API_URL = process.env.REACT_APP_API_URL;
const PORT = process.env.REACT_APP_API_PORT;
function InventoryDetails() {
  const [inventoryData, setInventoryData] = useState();
  const { id } = useParams();
  useEffect(() => {
    axios.get(`${API_URL}:${PORT}/${id}`).then((res) => {
        const inventoryInfo = res.data
        setInventoryData(inventoryInfo)
    }) ;
  });
console.log(inventoryData)
  return (
    <section className="inventory-details">
      <header className="inventory-details__header">
        <h1 className="inventory-details__page-title">
          <img src={backarrow} alt="Back arrowkey" />
          Item Name
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
            <p className="inventory-details__text">Item DESCRIPTION</p>
          </div>
          <div className="inventory-details__category">
            <h3 className="inventory-details__title">CATEGORY:</h3>
            <p className="inventory-details__text">Item catergory</p>
          </div>
        </div>
        <div className="inventory-details__status-quantity-warehouse-container">
          <div className="inventory-details__status">
            <h3 className="inventory-details__title">STATUS:</h3>
            <p className="inventory-details__text">Item STATUS</p>
          </div>
          <div className="inventory-details__quantity">
            <h3 className="inventory-details__title">QUANTIY:</h3>
            <p className="inventory-details__text">Item QUANTIY</p>
          </div>
          <div className="inventory-details__warehouse">
            <h3 className="inventory-details__title">WAREHOUSE:</h3>
            <p className="inventory-details__text">Item WAREHOUSE</p>
          </div>
        </div>
      </section>
    </section>
  );
}
export default InventoryDetails;

//inventory-details
