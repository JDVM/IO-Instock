import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./WarehouseList.scss";
import DeleteWarehouse from "../DeleteWarehouse/DeleteWarehouse";
import deleteIcon from "../../assets/images/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/images/Icons/edit-24px.svg";
import chevronIcon from "../../assets/images/Icons/chevron_right-24px.svg";
import sortIcon from "../../assets/images/Icons/sort-24px.svg";

const API_URL = process.env.REACT_APP_API_URL;
const PORT = process.env.REACT_APP_API_PORT || 6080;

function WarehouseList() {
  const [warehouses, setWarehouses] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [toDeleteWarehouse, setToDeleteWarehouse] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: '', direction: 'ascending' });

  useEffect(() => {
    axios
      .get(`${API_URL}:${PORT}/warehouses`)
      .then((res) => {
        const warehousesData = res.data;
        setWarehouses(warehousesData);

        console.log(warehousesData);
      })
      .catch((error) => {
        console.error("Error fetching warehouses:", error);
      });
  }, []);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };
  let sortedWarehouses = [...warehouses];
 
  if (sortConfig.direction === 'ascending') {
    sortedWarehouses.sort((a, b) => (a[sortConfig.key] > b[sortConfig.key] ? 1 : -1));
} else if (sortConfig.direction === 'descending') {
    sortedWarehouses.sort((a, b) => (a[sortConfig.key] < b[sortConfig.key] ? 1 : -1));
}

  if (warehouses === null) {
    return <h1>Loading...</h1>;
  }

  if (warehouses.length === 0) {
    return null;
  }

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
            <Link to="/warehouses/new">
              <button className="warehouse-list__add-button" type="button">
                + Add New Warehouse
              </button>
            </Link>
          </div>
        </div>
        <div>
          <div className="warehouse-list__card-item warehouse-list__card-item--tablet">
            <article className="warehouse-list__card-parent">
              <div className="warehouse-list__card-child">
              <div className="warehouse-list__card-info" onClick={() => requestSort('warehouse_name')}>
  <h4 className="warehouse-list__card-title">WAREHOUSE</h4>
  <img className="warehouse-list__sort-icon" src={sortIcon} alt="sort icon" />
</div>
<div className="warehouse-list__card-info" onClick={() => requestSort('address')}>
  <h4 className="warehouse-list__card-title">ADDRESS</h4>
  <img className="warehouse-list__sort-icon" src={sortIcon} alt="sort icon" />
</div>
<div className="warehouse-list__card-info" onClick={() => requestSort('contact_name')}>
  <h4 className="warehouse-list__card-title">CONTACT NAME</h4>
  <img className="warehouse-list__sort-icon" src={sortIcon} alt="sort icon" />
</div>
<div className="warehouse-list__card-info" onClick={() => requestSort('contact_phone')}>
  <h4 className="warehouse-list__card-title">CONTACT INFORMATION</h4>
  <img className="warehouse-list__sort-icon" src={sortIcon} alt="sort icon" />
</div>

              </div>
            </article>
            <div className="warehouse-list__card-actions">
              <h4 className="warehouse-list__card-title">ACTIONS</h4>
            </div>
          </div>
        </div>
        {sortedWarehouses.map((warehouse) => (
          <div className="warehouse-list__card-item" key={warehouse.id}>
            <article className="warehouse-list__card-parent">
              <div className="warehouse-list__card-child">
                <div className="warehouse-list__card-info">
                  <h4 className="warehouse-list__card-title warehouse-list__card-title--tablet">
                    WAREHOUSE
                  </h4>
                  <Link to={`/warehouses/${warehouse.id}`}>
                    <p className="warehouse-list__card-link">
                      {warehouse.warehouse_name}
                      <img src={chevronIcon} alt="chevron icon" />
                    </p>
                  </Link>
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
              <img className="warehouse-list__edit"
                src={deleteIcon}
                alt="delete icon"
                onClick={() => {
                  setModalIsOpen(true);
                  setToDeleteWarehouse([
                    warehouse.id,
                    warehouse.warehouse_name,
                  ]);
                }}
              />
              <Link to={`/warehouses/${warehouse.id}/edit`}>
                <img src={editIcon} alt="edit icon" />
              </Link>
            </div>
          </div>
        ))}
      </section>

      <DeleteWarehouse
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        toDeleteWarehouse={toDeleteWarehouse}
        warehouses={warehouses}
        setWarehouses={setWarehouses}
      />
    </>
  );
}

export default WarehouseList;
