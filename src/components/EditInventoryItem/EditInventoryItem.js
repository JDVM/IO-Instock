import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import arrowBackIcon from "../../assets/images/Icons/arrow_back-24px.svg";
import "./EditinventoryItem.scss";

const API_URL = process.env.REACT_APP_API_URL;
const PORT = process.env.REACT_APP_API_PORT || 8080;

function EditInventoryItem() {
  const { id } = useParams();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  console.log(id);

  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedWarehouse, setSelectedWarehouse] = useState("");
  const [availability, setAvailability] = useState("inStock");
  const [quantity, setQuantity] = useState(0);

  const [formErrors, setFormErrors] = useState({
    warehouse_id: false,
    item_name: false,
    description: false,
    category: false,
    statusbar: false,
    quantity: false,
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `${API_URL}:${PORT}/inventories/${id}`
        );
        console.log(response);
        const itemData = response.data;
        console.log(itemData.category);

        setItemName(itemData.item_name);
        setDescription(itemData.description);
        setSelectedCategory(itemData.category);
        setSelectedWarehouse(itemData.warehouse_id);
        setAvailability(itemData.quantity > 0 ? "inStock" : "outOfStock");
        setQuantity(itemData.quantity);
      } catch (error) {
        console.error("Error getting item data:", error);
      }
    };

    getData();
  }, [id]);

  const handleChangeItemName = (e) => {
    setItemName(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleWarehouseChange = (e) => {
    setSelectedWarehouse(e.target.value);
  };

  const handleAvailabilityChange = (e) => {
    setAvailability(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updatedItem = {
        item_name: itemName,
        description: description,
        category: selectedCategory,
        warehouse_id: selectedWarehouse,
      };

      await axios.put(`${API_URL}:${PORT}/inventory/${id}`, updatedItem);
      navigate("/inventory");
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  const categoryOptions = [
    { value: "Electronics", label: "Electronics" },
    { value: "Gear", label: "Gear" },
    { value: "Apparel", label: "Apparel" },
    { value: "Accessories", label: "Accessories" },
    { value: "Health", label: "Health" },
  ];

  const warehouseOptions = [
    { value: "1", label: "Manhattan" },
    { value: "2", label: "Washington" },
    { value: "3", label: "Jersey" },
    { value: "4", label: "SF" },
    { value: "5", label: "Santa Monica" },
    { value: "6", label: "Seattle" },
    { value: "7", label: "Miami" },
    { value: "8", label: "Boston" },
  ];

  return (
    <form onSubmit={handleSubmit}>
      <div className="edit-inventory-item__head">
        <img
            className="edit-inventory-item__icon"
            src={arrowBackIcon}
            alt="back arrow"
            onClick={goBack}
        />
        <h1 className="edit-inventory-item__head-title">Edit Inventory Item</h1>
      </div>
      <section className="edit-inventory-item__section">
        <h2 className="edit-inventory-item__subhead-title">Item Details</h2>
        <label className="edit-inventory-item__label">
          Item Name{" "}
          <input
            className="edit-inventory-item__input"
            type="text"
            name="name"
            onChange={handleChangeItemName}
            value={itemName}
          />
        </label>
        <label className="edit-inventory-item__label">
          Description{" "}
          <textarea
            className="edit-inventory-item__input"
            type="text"
            name="description"
            onChange={handleChangeDescription}
            value={description}
          />
        </label>
        <h3 className="edit-inventory-item__label">Category</h3>
        <select
          className="edit-inventory-item__input"
          name="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          {/* <option value={selectedCategory}>{selectedCategory}</option> */}
          {categoryOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </section>
      <section className="edit-inventory-item__section">
        <h2 className="edit-inventory-item__subhead-title">
          Item Availability
        </h2>
        <h3 className="edit-inventory-item__label">Status</h3>
        <label>
            <input
                type="radio"
                name="availability"
                value="inStock"
                checked={availability === "inStock"}
                onChange={handleAvailabilityChange}
            />
            In Stock ({quantity} available)
            </label>
            <label>
            <input
                type="radio"
                name="availability"
                value="outOfStock"
                checked={availability === "outOfStock"}
                onChange={handleAvailabilityChange}
            />
            Out of Stock
            </label>
        
        <h3 className="edit-inventory-item__label">Warehouse</h3>
        <select
          className="edit-inventory-item__input"
          name="warehouse"
          value={selectedWarehouse}
          onChange={handleWarehouseChange}
        >
          {/* <option value={selectedWarehouse}>{selectedWarehouse.label}</option> */}
          
          {warehouseOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="add-inventory-buttons">
          <span className="add-inventory-buttons__cancel" onClick={goBack}>
            Cancel
          </span>
          <button className="add-inventory-buttons__add">+ Add Item</button>
        </div>
      </section>
    </form>
  );
}

export default EditInventoryItem;
