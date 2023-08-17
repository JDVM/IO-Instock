import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DeleteModal from "../DeleteModal/DeleteModal";

import "./WarehouseList.scss";

import deleteIcon from "../../assets/images/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/images/Icons/edit-24px.svg";
import chevronIcon from "../../assets/images/Icons/chevron_right-24px.svg";
import sortIcon from "../../assets/images/Icons/sort-24px.svg";

const API_URL = process.env.REACT_APP_API_URL;

function WarehouseList() {
  const [warehouses, setWarehouses] = useState(null);
  const { warehouseId } = useParams();
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    axios
      .get(`${API_URL}/warehouses`)
      .then((res) => {
        const warehousesData = res.data;
        setWarehouses(warehousesData);
        console.log(warehousesData);
      })
      .catch((error) => {
        console.error("Error fetching warehouses:", error);
      });
  }, []);

  if (warehouses === null) {
    return <h1>Loading...</h1>;
  }

  if (warehouses.length === 0) {
    return null;
  }

  const handleDeleteWarehouse = async (id) => {
    console.log("delete button was clicked");
    setIsClicked(true)
    // try {
    //     await axios.delete(`${API_BASE_URL}/warehouses/${id}`);
    // } catch (error) {
    //     console.error('Error deleting warehouse:', error);
    // }
  };

  return (
    <>
      <section className="warehouse-list">
        <div className="warehouse-list__head">
          <div>
            <h1 className="warehouse-list__title">Warehouses</h1>
          </div>
          <div className="warehouse-list__CTA">
            <input
              className="warehouse-list__input"
              type="search"
              name="search"
              placeholder="Search..."
            />
            <button className="warehouse-list__add-button" type="button">
              + Add New Warehouse
            </button>
          </div>
        </div>
        <div>
          <div className="warehouse-list__card-item warehouse-list__card-item--tablet">
            <article className="warehouse-list__card-parent">
              <div className="warehouse-list__card-child">
                <div className="warehouse-list__card-info">
                  <h4 className="warehouse-list__card-title">WAREHOUSE</h4>
                  <img
                    className="warehouse-list__sort-icon"
                    src={sortIcon}
                    alt="sort icon"
                  />
                </div>
                <div className="warehouse-list__card-info">
                  <h4 className="warehouse-list__card-title">ADDRESS</h4>
                  <img
                    className="warehouse-list__sort-icon"
                    src={sortIcon}
                    alt="sort icon"
                  />
                </div>
              </div>
              <div className="warehouse-list__card-child">
                <div className="warehouse-list__card-info">
                  <h4 className="warehouse-list__card-title">CONTACT NAME</h4>
                  <img
                    className="warehouse-list__sort-icon"
                    src={sortIcon}
                    alt="sort icon"
                  />
                </div>
                <div className="warehouse-list__card-info">
                  <h4 className="warehouse-list__card-title">
                    CONTACT INFORMATION
                  </h4>
                  <img
                    className="warehouse-list__sort-icon"
                    src={sortIcon}
                    alt="sort icon"
                  />
                </div>
              </div>
            </article>
            <div className="warehouse-list__card-actions">
              <h4 className="warehouse-list__card-title">ACTIONS</h4>
            </div>
          </div>
        </div>
        {warehouses.map((warehouse) => (
          <div className="warehouse-list__card-item" key={warehouse.id}>
            <article className="warehouse-list__card-parent">
              <div className="warehouse-list__card-child">
                <div className="warehouse-list__card-info">
                  <h4 className="warehouse-list__card-title warehouse-list__card-title--tablet">
                    WAREHOUSE
                  </h4>
                  {/* <Link to={`/warehouses/${warehouse.id}`}> */}
                  <p className="warehouse-list__card-link">
                    {warehouse.warehouse_name}
                    <img src={chevronIcon} alt="chevron icon" />
                  </p>
                  {/* </Link> */}
                </div>
                <div className="warehouse-list__card-info">
                  <h4 className="warehouse-list__card-title warehouse-list__card-title--tablet">
                    ADDRESS
                  </h4>
                  <p className="warehouse-list__card-text">
                    {warehouse.address}, {warehouse.city}, {warehouse.country}
                  </p>
                </div>
              </div>
              <div className="warehouse-list__card-child">
                <div className="warehouse-list__card-info">
                  <h4 className="warehouse-list__card-title warehouse-list__card-title--tablet">
                    CONTACT NAME
                  </h4>
                  <p className="warehouse-list__card-text">
                    {warehouse.contact_name}
                  </p>
                </div>
                <div className="warehouse-list__card-info">
                  <h4 className="warehouse-list__card-title warehouse-list__card-title--tablet">
                    CONTACT INFORMATION
                  </h4>
                  <p className="warehouse-list__card-text">
                    {warehouse.contact_phone} <br /> {warehouse.contact_email}
                  </p>
                </div>
              </div>
            </article>
            <div className="warehouse-list__foot">
              <img
                src={deleteIcon}
                alt="delete icon"
                onClick={() => handleDeleteWarehouse(warehouse.id)}
              />
              <img src={editIcon} alt="edit icon" />
            </div>
          </div>
        ))}
      </section>
      <DeleteModal isClicked={isClicked} />
    </>
  );
}

export default WarehouseList;
