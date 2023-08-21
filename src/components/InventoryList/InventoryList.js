import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import getInventories from "../../utils/getInventories";
import DeleteInventory from "../DeleteInventory/DeleteInventory";

import "./InventoryList.scss";

import deleteIcon from "../../assets/images/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/images/Icons/edit-24px.svg";
import searchIcon from "../../assets/images/Icons/search-24px.svg";
import sortIcon from "../../assets/images/Icons/sort-24px.svg";
import chevron from "../../assets/images/Icons/chevron_right-24px.svg";

export default function InventoryList() {
  const navigate = useNavigate();
  const [inventories, setInventories] = useState([]);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [toDeleteItem, setToDeleteItem] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  useEffect(() => {
    const fetchData = async () => {
      const inventories = await getInventories();
      setInventories(inventories);
    };
    fetchData();
  }, []);

  const handleEdit = (id) => navigate(`/inventory/${id}/edit`);

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
  
    const sortedItems = [...inventories].sort((a, b) => {
      if (a[key] < b[key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  
    setSortConfig({ key, direction });
    setInventories(sortedItems);
  };
  
  //   const handleDelete = (id) =>

return (
  <div className={`inventory-list ${modalIsOpen ? "inventory-list--disabled" : ""}`}>
    <div className="inventory-list-header">
      <h1 className="inventory-list__title">Inventory</h1>
      <div className="inventory-list__search-bar">
        <input type="text" placeholder="Search..." />
        <img src={searchIcon} alt="" />
      </div>
      <Link className="inventory-list__add-button" to="/inventory/new">
        + Add New Inventory
      </Link>
    </div>
    <div className="inventory-list__titles">
      <span className="inventory-list__titles-head" onClick={() => handleSort('item_name')}>
        <h4>Inventory Item</h4>
        <img src={sortIcon} alt="Sort" />
      </span>
      <span className="inventory-list__titles-head" onClick={() => handleSort('category')}>
        <h4>Category</h4>
        <img src={sortIcon} alt="Sort" />
      </span>
      <span className="inventory-list__titles-head" onClick={() => handleSort('status')}>
        <h4>Status</h4>
        <img src={sortIcon} alt="Sort" />
      </span>
      <span className="inventory-list__titles-head" onClick={() => handleSort('quantity')}>
        <h4>Qty</h4>
        <img src={sortIcon} alt="Sort" />
      </span>
      <span className="inventory-list__titles-head" onClick={() => handleSort('warehouse_name')}>
        <h4>Warehouse</h4>
        <img src={sortIcon} alt="Sort" />
      </span>
      <span className="inventory-list__titles-head">
        <h4>Actions</h4>
      </span>
    </div>
      <div className="inventory-list-wrapper">
        {inventories.map((item) => {
          return (
            <div className="inventory-list-item" key={item.id}>
              <div className="inventory-list-item__container">
                <h4 className="inventory-list-item__title">Inventory Item</h4>
                <Link
                  to={`/inventory/${item.id}`}
                  className="inventory-list-item__content inventory-list-item__content--link"
                >
                  {item.item_name}
                  <img src={chevron} alt="" />
                </Link>
              </div>
              <div className="inventory-list-item__container">
                <h4 className="inventory-list-item__title">Status</h4>
                <p
                  className={`inventory-list-item__content ${
                    item.status === "In Stock"
                      ? "inventory-list-item__content--in-stock"
                      : "inventory-list-item__content--out-of-stock"
                  }`}
                >
                  {item.status}
                </p>
              </div>
              <div className="inventory-list-item__container">
                <h4 className="inventory-list-item__title">Category</h4>
                <p className="inventory-list-item__content">{item.category}</p>
              </div>
              <div className="inventory-list-item__container">
                <h4 className="inventory-list-item__title">Qty</h4>
                <p className="inventory-list-item__content">{item.quantity}</p>
              </div>
              <div className="inventory-list-item__container">
                <h4 className="inventory-list-item__title">Warehouse</h4>
                <p className="inventory-list-item__content">
                  {item.warehouse_name}
                </p>
              </div>
              <div className="inventory-list__actions">
                <img
                  className="inventory-list__actions-delete"
                  src={deleteIcon}
                  alt=""
                  onClick={() => {
                    setModalIsOpen(true);
                    setToDeleteItem([item.id, item.item_name]);
                  }}
                />
                <img
                  className="inventory-list__actions-edit"
                  src={editIcon}
                  alt=""
                  onClick={() => handleEdit(item.id)}
                />
              </div>
            </div>
          );
        })}
      </div>
      <DeleteInventory
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        toDeleteItem={toDeleteItem}
        inventoryData={inventories}
        setInventoryData={setInventories}
      />
    </div>
  );
}