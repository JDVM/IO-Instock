import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import arrowBackIcon from "../../assets/images/Icons/arrow_back-24px.svg";
import errorIcon from "../../assets/images/Icons/error-24px.svg";
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
  const [status, setStatus] = useState("");
  const [quantity, setQuantity] = useState(0);

  const [formErrors, setFormErrors] = useState({
    warehouse_id: "",
    item_name: "",
    description: "",
    category: "",
    status: "",
    quantity: "",
  });

  useEffect(() => {
    document.title = "InStock | Edit Inventory Item";
  }, []);

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
        setStatus(itemData.status);
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

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let errors = {};

    if (!selectedWarehouse) {
      errors.warehouse_id = "This field is required.";
    }

    if (!itemName) {
      errors.item_name = "This field is required.";
    }

    if (!description) {
      errors.description = "This field is required.";
    }

    if (!selectedCategory) {
      errors.category = "This field is required.";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    try {
      const updatedItem = {
        item_name: itemName,
        description: description,
        category: selectedCategory,
        warehouse_id: selectedWarehouse,
        status: status,
        quantity: status === "Out of Stock" ? 0 : quantity,
      };

      console.log("Updated item data:", updatedItem);

      await axios.put(`${API_URL}:${PORT}/inventories/${id}`, updatedItem);
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

    <div className="edit-inventory">
      <div className="edit-inventory-item__head">
        <img
          className="edit-inventory-item__icon"
          src={arrowBackIcon}
          alt="back arrow"
          onClick={goBack}
        />
        <h1 className="edit-inventory-item__head-title">Edit Inventory Item</h1>
      </div>
      <form className="edit-inventory-item__form" onSubmit={handleSubmit}>
        <section className="edit-inventory-item__section">
          <h2 className="edit-inventory-item__subhead-title">Item Details</h2>
          <h3 className="edit-inventory-item__label">Item Name</h3>
          <label>
            <input
              className={`edit-inventory-item__input  ${
                formErrors.item_name ? "edit-inventory-item__input--error" : ""
              }`}
              type="text"
              name="name"
              onChange={handleChangeItemName}
              value={itemName}
            />
            {formErrors.item_name && (
              <div className="error">

                <img className="error-icon" src={errorIcon} alt="" />
                <div className="error-message">{formErrors.item_name}</div>
              </div>
            )}
          </label>

          <h3 className="edit-inventory-item__label">Description</h3>
          <label>
            <textarea
              className={`edit-inventory-item__input edit-inventory-item__textarea ${
                formErrors.description
                  ? "edit-inventory-item__textarea--error"
                  : ""
              }`}
              type="text"
              name="description"
              onChange={handleChangeDescription}
              value={description}
            />
            {formErrors.description && (
              <div className="error">
                <img className="error-icon" src={errorIcon} alt=""></img>
                <div className="error-message">{formErrors.item_name}</div>
              </div>
            )}
          </label>

          <h3 className="edit-inventory-item__label">Category</h3>
          <label>
            <select
              className="edit-inventory-item__input"
              name="category"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              {categoryOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </section>

        <section className="edit-inventory-item__section">
          <h2 className="edit-inventory-item__subhead-title">
            Item Availability
          </h2>

          <h3 className="edit-inventory-item__label">Status</h3>
          <div className="edit-inventory-item__radio-container">
            <label className="edit-inventory-item__radio">
              <input
                type="radio"
                name="status"
                value="In Stock"
                checked={status === "In Stock"}
                onChange={handleStatusChange}
              />
              In Stock
            </label>
            <label className="edit-inventory-item__radio">
              <input
                type="radio"
                name="status"
                value="Out of Stock"
                checked={status === "Out of Stock"}
                onChange={handleStatusChange}
              />
              Out of Stock
            </label>
          </div>
          <label
            className={`edit-inventory-item__label ${
              status === "Out of Stock"
                ? "edit-inventory-item__input--hide"
                : ""
            }`}
          >
            Quantity
            <input
              className={`edit-inventory-item__input ${
                formErrors.quantity ? "edit-inventory-item__input--error" : ""
              }`}
              type="number"
              name="quantity"
              value={quantity}
              onChange={handleQuantityChange}
            />
            {formErrors.description && (
              <div className="error">
                <img className="error-icon" src={errorIcon} alt="" ></img>
                <div className="error-message">{formErrors.item_name}</div>
              </div>
            )}
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
        </section>
      </form>
      <div className="edit-inventory-item__button-container">
        <button
          className="edit-inventory-item__button edit-inventory-item__button--cancel"
          onClick={goBack}
        >
          Cancel
        </button>
        <button onClick={handleSubmit} className="edit-inventory-item__button">Save</button>
      </div>
    </div>
  );
}

export default EditInventoryItem;
