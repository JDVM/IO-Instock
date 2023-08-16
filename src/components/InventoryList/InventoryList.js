import "./InventoryList.scss";
import deleteIcon from "../../assets/images/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/images/Icons/edit-24px.svg";
import cheveron from "../../assets/images/Icons/chevron_right-24px.svg";
import sortIcon from "../../assets/images/Icons/sort-24px.svg";

function InventoryList() {
  return (
    <section className="inventory-list">
      <div className="invento.ry-list__card-item inventory-list__card-item--tablet">
        <article className="inventory-list__card-parent">
          <div className="inventory-list__card-child">
            <div className="inventory-list__card-info">
              <h4 className="inventory-list__card-title">
                INVENTORY{" "}
                <img
                  className="inventory-list__icon"
                  src={sortIcon}
                  alt="sort icon"
                />
              </h4>
            </div>
            <div className="inventory-list__card-info">
              <h4 className="inventory-list__card-title">
                CATERGORY{" "}
                <img
                  className="inventory-list__icon"
                  src={sortIcon}
                  alt="sort icon"
                />
              </h4>
            </div>
          </div>
          <div className="inventory-list__card-child">
            <div className="inventory-list__card-info">
              <h4 className="inventory-list__card-title">
                STATUS{" "}
                <img
                  className="inventory-list__icon"
                  src={sortIcon}
                  alt="sort icon"
                />
              </h4>
            </div>
            <div className="inventory-list__card-info">
              <h4 className="inventory-list__card-title">
                QUANTITY{" "}
                <img
                  className="inventory-list__icon"
                  src={sortIcon}
                  alt="sort icon"
                />
              </h4>
            </div>
            <div className="inventory-list__card-info">
              <h4 className="inventory-list__card-title inventory-list__card-title--align-flex-end">
                ACTIONS{" "}
                <img
                  className="inventory-list__icon"
                  src={sortIcon}
                  alt="sort icon"
                />
              </h4>
            </div>
          </div>
        </article>
      </div>
      <div className="inventory-list__card-item">
        <article className="inventory-list__card-parent">
          <div className="inventory-list__card-child">
            <div className="inventory-list__card-info">
              <h4 className="inventory-list__card-title inventory-list__card-title--tablet">
                INVENTORY
              </h4>

              <p className="inventory-list__card-link">
                placehoder name{" "}
                <img src={cheveron} alt="Cheveron pointing right" />
              </p>
            </div>
            <div className="inventory-list__card-info">
              <h4 className="inventory-list__card-title inventory-list__card-title--tablet">
                CATERGORY
              </h4>
              <p className="inventory-list__card-text">PLACEHOLDER CAT</p>
            </div>
          </div>
          <div className="inventory-list__card-child">
            <div className="inventory-list__card-info">
              <h4 className="inventory-list__card-title inventory-list__card-title--tablet">
                STATUS
              </h4>
              <p className="inventory-list__card-text">PLACEHOLDER STATUS</p>
            </div>
            <div className="inventory-list__card-info">
              <h4 className="inventory-list__card-title inventory-list__card-title--tablet">
                QTY
              </h4>
              <p className="inventory-list__card-text">PLACEHOLDER QUANTITY</p>
            </div>
          </div>
        </article>
        <div className="inventory-list__foot">
          <img
            className="inventory-list__icon"
            src={deleteIcon}
            alt="delete icon"
          />
          <img
            className="inventory-list__icon"
            src={editIcon}
            alt="edit icon"
          />
        </div>
      </div>
    </section>
  );
}

export default InventoryList;
