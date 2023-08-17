import "./WarehouseInventoryList.scss";
import deleteIcon from "../../assets/images/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/images/Icons/edit-24px.svg";
import cheveron from "../../assets/images/Icons/chevron_right-24px.svg";
import sortIcon from "../../assets/images/Icons/sort-24px.svg";
import { Link } from "react-router-dom";

function WarehouseInventoryList() {
  return (
    <section className="warehouse-inventory-list">
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
      <div className="warehouse-inventory-list__card-item">
        <article className="warehouse-inventory-list__card-parent">
          <div className="warehouse-inventory-list__card-info">
            <h4 className="warehouse-inventory-list__card-title warehouse-inventory-list__card-title--tablet">
              INVENTORY
            </h4>
            <p className="warehouse-inventory-list__card-link">
              placehoder name{" "}
              <img src={cheveron} alt="Cheveron pointing right" />
            </p>
          </div>

          <div className="warehouse-inventory-list__card-info">
            <h4 className="warehouse-inventory-list__card-title warehouse-inventory-list__card-title--tablet">
              CATERGORY
            </h4>
            <p className="warehouse-inventory-list__card-text">PLACEHOLDER CAT</p>
          </div>

          <div className="warehouse-inventory-list__card-info">
            <h4 className="warehouse-inventory-list__card-title warehouse-inventory-list__card-title--tablet">
              STATUS
            </h4>
            <p className="warehouse-inventory-list__card-text">PLACEHOLDER STATUS</p>
          </div>

          <div className="warehouse-inventory-list__card-info">
            <h4 className="warehouse-inventory-list__card-title warehouse-inventory-list__card-title--tablet">
              QTY
            </h4>
            <p className="warehouse-inventory-list__card-text">PLACEHOLDER QUANTITY</p>
          </div>

          <div className="warehouse-inventory-list__child">
            <Link to={"/"}>
              <img
                className="warehouse-inventory-list__action-icon"
                src={deleteIcon}
                alt="delete icon"
              />
            </Link>
            <Link to={"/"}>
              <img
                className="warehouse-inventory-list__action-icon"
                src={editIcon}
                alt="edit icon"
              />
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}

export default WarehouseInventoryList;
