import axios from "axios";
import Modal from "react-modal";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./WarehouseList.scss";
import DeleteWarehouse from "../DeleteWarehouse/DeleteWarehouse";
import deleteIcon from "../../assets/images/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/images/Icons/edit-24px.svg";
import chevronIcon from "../../assets/images/Icons/chevron_right-24px.svg";
import sortIcon from "../../assets/images/Icons/sort-24px.svg";

const API_URL = process.env.REACT_APP_API_URL;
const PORT = process.env.REACT_APP_API_PORT || 6080;

function WarehouseList() {
  const [warehouses, setWarehouses] = useState(null);
  // const [selectedWarehouse, setSelectedWarehouse] = useState(null);

  // const [warehouseName, setWarehouseName] = useState(null);

  // const [isLoading, setIsLoading] = useState(true);

  // const [getWarehousesById, setWarehousesById] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [toDeleteWarehouse, setToDeleteWarehouse] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/warehouses`)
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

  // const openModal = () => {
  //   setModalIsOpen(true);
  // };

  // const closeModal = () => {
  //   setModalIsOpen(false);
  // };

  // const handleDelete = async (id) => {
  //     try {
  //         await axios.delete(`${API_URL}:${PORT}/warehouses/${id}`);
  //         const newWarehouses = warehouses.filter((warehouse) => warehouse.id !== id);
  //         setWarehouses(newWarehouses);
  //     } catch (error) {
  //         console.error('Error deleting warehouse:', error);
  //     }

  //   closeModal();
  // };

  // const deleteCallback = (id) => {
  //   console.log (id)
  //   setSelectedWarehouse(id);
  //   openModal();
  // };

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
              <img
                src={deleteIcon}
                alt="delete icon"
                onClick={() => {
                  setModalIsOpen(true);
                  setToDeleteWarehouse([warehouse.id, warehouse.warehouse_name]);
                }}
              />
  
<Link
  to={ `/warehouses/${warehouse.id}/edit` }
>
  <img src={editIcon} alt="edit icon" />
</Link>
{/*               
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Delete Confirmation"
              >
                <h2>Confirm Deletion</h2>
                <p>Are you sure you want to delete this item?</p>
                <button onClick={() => handleDelete(selectedWarehouse)}>
                  Yes, Delete
                </button>
                <button onClick={closeModal}>Cancel</button>
              </Modal> */}
             
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
