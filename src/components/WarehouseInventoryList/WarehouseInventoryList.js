import "./WarehouseInventoryList.scss";
import deleteIcon from "../../assets/images/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/images/Icons/edit-24px.svg";
import cheveron from "../../assets/images/Icons/chevron_right-24px.svg";
import sortIcon from "../../assets/images/Icons/sort-24px.svg";
import DeleteInventory from "../DeleteInventory/DeleteInventory";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;
const PORT = process.env.REACT_APP_API_PORT;

function WarehouseInventoryList() {
  const [warehouseName, setWarehouseName] = useState(null);
  const [inventoryData, setInventoryData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [getWarehousesById, setWarehousesById] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [toDeleteItem, setToDeleteItem] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${API_URL}:${PORT}/warehouses/${id}`)
      .then((res) => {
        const warehousesData = res.data;
        setWarehousesById(warehousesData);
        setWarehouseName(res.data.warehouse_name);
        setInventoryData(res.data.inventory);
        setIsLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching warehouses:", error);
      });
  }, [id]);

  if (getWarehousesById === null || isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <section
        className={`warehouse-inventory-list ${
          modalIsOpen ? "warehouse-inventory-list--disabled" : ""
        }`}
      >
        <div className="invento.ry-list__card-item warehouse-inventory-list__card-item--tablet">
          <article className="warehouse-inventory-list__card-parent">
            <div className="warehouse-inventory-list__card-info">
              <h4 className="warehouse-inventory-list__card-title">
                INVENTORY{" "}
                <img
                  className="warehouse-inventory-list__icon"
                  src={sortIcon}
                  alt="sort icon"
                />
              </h4>
            </div>
            <div className="warehouse-inventory-list__card-info">
              <h4 className="warehouse-inventory-list__card-title">
                CATERGORY{" "}
                <img
                  className="warehouse-inventory-list__icon"
                  src={sortIcon}
                  alt="sort icon"
                />
              </h4>
            </div>
            <div className="warehouse-inventory-list__card-info">
              <h4 className="warehouse-inventory-list__card-title">
                STATUS{" "}
                <img
                  className="warehouse-inventory-list__icon"
                  src={sortIcon}
                  alt="sort icon"
                />
              </h4>
            </div>
            <div className="warehouse-inventory-list__card-info">
              <h4 className="warehouse-inventory-list__card-title">
                QUANTITY{" "}
                <img
                  className="warehouse-inventory-list__icon"
                  src={sortIcon}
                  alt="sort icon"
                />
              </h4>
            </div>
            <div className="warehouse-inventory-list__card-info">
              <h4 className="warehouse-inventory-list__card-title warehouse-inventory-list__card-title--align-flex-end">
                ACTIONS{" "}
              </h4>
            </div>
          </article>
        </div>
        {inventoryData.map((info) => (
          <div key={info.id} className="warehouse-inventory-list__card-item">
            <article className="warehouse-inventory-list__card-parent">
              <div className="warehouse-inventory-list__card-info">
                <h4 className="warehouse-inventory-list__card-title warehouse-inventory-list__card-title--tablet">
                  INVENTORY
                </h4>
                <p className="warehouse-inventory-list__card-link">
                  {info.item_name}
                  <img src={cheveron} alt="Cheveron pointing right" />
                </p>
              </div>

              <div className="warehouse-inventory-list__card-info">
                <h4 className="warehouse-inventory-list__card-title warehouse-inventory-list__card-title--tablet">
                  CATERGORY
                </h4>
                <p className="warehouse-inventory-list__card-text">
                  {info.category}
                </p>
              </div>

              <div className="warehouse-inventory-list__card-info">
                <h4 className="warehouse-inventory-list__card-title warehouse-inventory-list__card-title--tablet">
                  STATUS
                </h4>
                <p
                  className={`warehouse-inventory-list__card-text ${
                    info.status === "Out of Stock"
                      ? "warehouse-inventory-list__card-text--status-color-out-of-stock"
                      : "warehouse-inventory-list__card-text--status-color-instock"
                  }`}
                >
                  {info.status}
                </p>
              </div>

              <div className="warehouse-inventory-list__card-info">
                <h4 className="warehouse-inventory-list__card-title warehouse-inventory-list__card-title--tablet">
                  QTY
                </h4>
                <p className="warehouse-inventory-list__card-text">
                  {info.quantity}
                </p>
              </div>

              <div className="warehouse-inventory-list__card-info warehouse-inventory-list__card-title--tablet">
                <h4 className="warehouse-inventory-list__card-title warehouse-inventory-list__card-title--tablet">
                  WAREHOUSE
                </h4>
                <p className="warehouse-inventory-list__card-text">
                  {warehouseName}
                </p>
              </div>

              <div className="warehouse-inventory-list__child">
                <img
                  className="warehouse-inventory-list__action-icon"
                  src={deleteIcon}
                  alt="delete icon"
                  onClick={() => {
                    setModalIsOpen(true);
                    setToDeleteItem([info.id, info.item_name]);
                  }}
                />
                <Link to={`/inventory/${info.id}/edit`}>
                  <img
                    className="warehouse-inventory-list__action-icon"
                    src={editIcon}
                    alt="edit icon"
                  />
                </Link>
              </div>
            </article>
          </div>
        ))}
      </section>
      <DeleteInventory
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        toDeleteItem={toDeleteItem}
        inventoryData={inventoryData}
        setInventoryData={setInventoryData}
      />
    </>
  );
}

export default WarehouseInventoryList;
