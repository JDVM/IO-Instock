import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { addInventoryItem } from "../../utils/addToDatabase";

import "./AddInventory.scss";

import backArrow from "../../assets/images/Icons/arrow_back-24px.svg";
import errorIcon from "../../assets/images/Icons/error-24px.svg";

export default function AddInventory({ setInventories }) {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const [formData, setFormData] = useState({
    warehouse_id: "",
    item_name: "",
    description: "",
    category: "",
    status: "In Stock",
    quantity: 0,
  });

  const [formErrors, setFormErrors] = useState({
    warehouse_id: false,
    item_name: false,
    description: false,
    category: false,
    statusbar: false,
    quantity: false,
  });

  const handleChange = async (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let errors = {
      warehouse_id:
        !formData.warehouse_id || formData.warehouse_id.trim() === "",
      item_name: !formData.item_name || formData.item_name.trim() === "",
      description: !formData.description || formData.description.trim() === "",
      category: !formData.category || formData.category.trim() === "",
      status: !formData.status || formData.status.trim() === "",
      quantity: !formData.quantity || formData.quantity <= 0,
    };

    setFormErrors(errors);

    if (Object.values(errors).some((error) => error)) return;

    try {
      await addInventoryItem(formData);
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      goBack();
    }
  };

  return (
    <div className="add-inventory">
      <div className="add-inventory-header">
        <img
          className="add-inventory__back-arrow"
          src={backArrow}
          alt="back arrow"
          onClick={goBack}
        />
        <h1 className="add-inventory__title">Add New Inventory Item</h1>
      </div>
      <form className="add-inventory-form" onSubmit={handleSubmit}>
        <div className="add-inventory-form__wrapper">
          <h2 className="add-inventory-form__title">Item Details</h2>
          <label className="add-inventory-form__label">
            Item Name
            <input
              className={`add-inventory-form__input ${
                formErrors.item_name ? "add-inventory-form__input--error" : ""
              }`}
              type="text"
              name="item_name"
              placeholder="Item Name"
              value={formData.item_name}
              onChange={handleChange}
            />
            <p
              className={`add-inventory-form__error ${
                formErrors.item_name ? "add-inventory-form__error--active" : ""
              }`}
            >
              <img src={errorIcon} alt="error icon" />
              This field is required
            </p>
          </label>
          <label className="add-inventory-form__label">
            Description
            <textarea
              className={`add-inventory-form__input add-inventory-form__input--description ${
                formErrors.description ? "add-inventory-form__input--error" : ""
              }`}
              type="text"
              name="description"
              placeholder="Please enter a brief item description..."
              value={formData.description}
              onChange={handleChange}
            />
            <p
              className={`add-inventory-form__error ${
                formErrors.description
                  ? "add-inventory-form__error--active"
                  : ""
              }`}
            >
              <img src={errorIcon} alt="error icon" />
              This field is required
            </p>
          </label>
          <label className="add-inventory-form__label">
            Category
            <select
              className={`add-inventory-form__input ${
                formErrors.category ? "add-inventory-form__input--error" : ""
              }`}
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="" disabled>
                Please Select
              </option>
              <option value="Electronics">Electronics</option>
              <option value="Gear">Gear</option>
              <option value="Accessories">Accessories</option>
              <option value="Health">Health</option>
              <option value="Apparel">Apparel</option>
            </select>
            <p
              className={`add-inventory-form__error ${
                formErrors.category ? "add-inventory-form__error--active" : ""
              }`}
            >
              <img src={errorIcon} alt="error icon" />
              This field is required
            </p>
          </label>
        </div>
        <div className="add-inventory-form__wrapper">
          <h2 className="add-inventory-form__title">Item Availability</h2>
          <div className="add-inventory-form__label--radio-wrapper">
            <span>Status</span>
            <label className="add-inventory-form__label add-inventory-form__radio">
              <input
                type="radio"
                value="In Stock"
                name="status"
                checked={formData.status === "In Stock"}
                onChange={handleChange}
              />
              In stock
            </label>
            <label className="add-inventory-form__label add-inventory-form__radio">
              <input
                type="radio"
                value="Out of Stock"
                name="status"
                checked={formData.status === "Out of Stock"}
                onChange={handleChange}
              />
              Out of stock
            </label>
          </div>
          <label
            className={`add-inventory-form__label ${
              formData.status === "Out of Stock"
                ? "add-inventory-form__input--hide"
                : ""
            }`}
          >
            Quantity
            <input
              className={`add-inventory-form__input ${
                formErrors.quantity ? "add-inventory-form__input--error" : ""
              }`}
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
            />
            <p
              className={`add-inventory-form__error ${
                formErrors.quantity ? "add-inventory-form__error--active" : ""
              }`}
            >
              <img src={errorIcon} alt="error icon" />
              This field is required
            </p>
          </label>
          <label className="add-inventory-form__label">
            Warehouse
            <select
              className={`add-inventory-form__input ${
                formErrors.warehouse_id
                  ? "add-inventory-form__input--error"
                  : ""
              }`}
              name="warehouse_id"
              value={formData.warehouse_id}
              onChange={handleChange}
            >
              <option value="" disabled>
                Please Select
              </option>
              <option value="1">Manhattan</option>
              <option value="2">SF</option>
              <option value="3">Santa Monica</option>
              <option value="4">Seattle</option>
              <option value="5">Miami</option>
              <option value="6">Boston</option>
              <option value="7">Los Angeles</option>
              <option value="8">New York</option>
              <option value="9 Hub">Houston Hub</option>
            </select>
            <p
              className={`add-inventory-form__error ${
                formErrors.warehouse_id
                  ? "add-inventory-form__error--active"
                  : ""
              }`}
            >
              <img src={errorIcon} alt="error icon" />
              This field is required
            </p>
          </label>
        </div>
        <div className="add-inventory-buttons">
          <span className="add-inventory-buttons__cancel" onClick={goBack}>
            Cancel
          </span>
          <button className="add-inventory-buttons__add">+ Add Item</button>
        </div>
      </form>
    </div>
  );
}
