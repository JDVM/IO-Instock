import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { addWarehouse } from "../../utils/addToDatabase";
import { isValidPhoneNumber, isValidEmail } from "../../utils/isValid";

import "./AddWarehouse.scss";

import backArrow from "../../assets/images/Icons/arrow_back-24px.svg";
import errorIcon from "../../assets/images/Icons/error-24px.svg";

export default function AddWarehouse({ setWarehouses }) {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const [formData, setFormData] = useState({
    warehouse_name: "",
    address: "",
    city: "",
    country: "",
    contact_name: "",
    contact_position: "",
    contact_phone: "",
    contact_email: "",
  });

  const [formErrors, setFormErrors] = useState({
    warehouse_name: false,
    address: false,
    city: false,
    country: false,
    contact_name: false,
    contact_position: false,
    contact_phone: false,
    contact_email: false,
  });

  const handleChange = async (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let errors = {
      warehouse_name:
        !formData.warehouse_name || formData.warehouse_name.trim() === "",
      address: !formData.address || formData.address.trim() === "",
      city: !formData.city || formData.city.trim() === "",
      country: !formData.country || formData.country.trim() === "",
      contact_name:
        !formData.contact_name || formData.contact_name.trim() === "",
      contact_position:
        !formData.contact_position || formData.contact_position.trim() === "",
      contact_phone:
        !formData.contact_phone ||
        formData.contact_phone.trim().length < 10 ||
        !isValidPhoneNumber(formData.contact_phone),
      contact_email:
        !formData.contact_email ||
        !formData.contact_email.includes("@") ||
        !formData.contact_email.includes(".") ||
        !isValidEmail(formData.contact_email),
    };
    setFormErrors(errors);

    if (Object.values(errors).some((error) => error)) return;

    try {
      await addWarehouse(formData);
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      goBack();
    }
  };

  return (
    <div className="add-warehouse">
      <div className="add-warehouse-header">
        <img
          className="add-warehouse__back-arrow"
          src={backArrow}
          alt="back arrow"
          onClick={goBack}
        />
        <h1 className="add-warehouse__title">Add New Warehouse</h1>
      </div>
      <form className="add-warehouse-form" onSubmit={handleSubmit}>
        <div className="add-warehouse-form__wrapper">
          <h2 className="add-warehouse-form__title">Item Details</h2>
          <label className="add-warehouse-form__label">
            Warehouse Name
            <input
              className={`add-warehouse-form__input ${
                formErrors.warehouse_name
                  ? "add-warehouse-form__input--error"
                  : ""
              }`}
              type="text"
              name="warehouse_name"
              placeholder="Warehouse Name"
              value={formData.warehouse_name}
              onChange={handleChange}
            />
            <p
              className={`add-warehouse-form__error ${
                formErrors.warehouse_name
                  ? "add-warehouse-form__error--active"
                  : ""
              }`}
            >
              <img src={errorIcon} alt="error icon" />
              This field is required
            </p>
          </label>
          <label className="add-warehouse-form__label">
            Street Address
            <input
              className={`add-warehouse-form__input ${
                formErrors.address ? "add-warehouse-form__input--error" : ""
              }`}
              type="text"
              name="address"
              placeholder="Street Address"
              value={formData.address}
              onChange={handleChange}
            />
            <p
              className={`add-warehouse-form__error ${
                formErrors.address ? "add-warehouse-form__error--active" : ""
              }`}
            >
              <img src={errorIcon} alt="error icon" />
              This field is required
            </p>
          </label>
          <label className="add-warehouse-form__label">
            City
            <input
              className={`add-warehouse-form__input ${
                formErrors.city ? "add-warehouse-form__input--error" : ""
              }`}
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
            />
            <p
              className={`add-warehouse-form__error ${
                formErrors.city ? "add-warehouse-form__error--active" : ""
              }`}
            >
              <img src={errorIcon} alt="error icon" />
              This field is required
            </p>
          </label>
          <label className="add-warehouse-form__label">
            Country
            <input
              className={`add-warehouse-form__input ${
                formErrors.country ? "add-warehouse-form__input--error" : ""
              }`}
              type="text"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
            />
            <p
              className={`add-warehouse-form__error ${
                formErrors.country ? "add-warehouse-form__error--active" : ""
              }`}
            >
              <img src={errorIcon} alt="error icon" />
              This field is required
            </p>
          </label>
        </div>
        <div className="add-warehouse-form__wrapper">
          <h2 className="add-warehouse-form__title">Contact Details</h2>
          <label className="add-warehouse-form__label">
            Contact Name
            <input
              className={`add-warehouse-form__input ${
                formErrors.contact_name
                  ? "add-warehouse-form__input--error"
                  : ""
              }`}
              type="text"
              name="contact_name"
              placeholder="Contact Name"
              value={formData.contact_name}
              onChange={handleChange}
            />
            <p
              className={`add-warehouse-form__error ${
                formErrors.contact_name
                  ? "add-warehouse-form__error--active"
                  : ""
              }`}
            >
              <img src={errorIcon} alt="error icon" />
              This field is required
            </p>
          </label>
          <label className="add-warehouse-form__label">
            Position
            <input
              className={`add-warehouse-form__input ${
                formErrors.contact_position
                  ? "add-warehouse-form__input--error"
                  : ""
              }`}
              type="text"
              name="contact_position"
              placeholder="Position"
              value={formData.contact_position}
              onChange={handleChange}
            />
            <p
              className={`add-warehouse-form__error ${
                formErrors.contact_position
                  ? "add-warehouse-form__error--active"
                  : ""
              }`}
            >
              <img src={errorIcon} alt="error icon" />
              This field is required
            </p>
          </label>
          <label className="add-warehouse-form__label">
            Phone Number
            <input
              className={`add-warehouse-form__input ${
                formErrors.contact_phone
                  ? "add-warehouse-form__input--error"
                  : ""
              }`}
              type="text"
              name="contact_phone"
              placeholder="Phone Number"
              value={formData.contact_phone}
              onChange={handleChange}
            />
            <p
              className={`add-warehouse-form__error ${
                formErrors.contact_phone
                  ? "add-warehouse-form__error--active"
                  : ""
              }`}
            >
              <img src={errorIcon} alt="error icon" />
              This field is required - Correct Format: +X (XXX) XXX-XXXX
            </p>
          </label>
          <label className="add-warehouse-form__label">
            Email
            <input
              className={`add-warehouse-form__input ${
                formErrors.contact_email
                  ? "add-warehouse-form__input--error"
                  : ""
              }`}
              type="text"
              name="contact_email"
              placeholder="Email"
              value={formData.contact_email}
              onChange={handleChange}
            />
            <p
              className={`add-warehouse-form__error ${
                formErrors.contact_email
                  ? "add-warehouse-form__error--active"
                  : ""
              }`}
            >
              <img src={errorIcon} alt="error icon" />
              This field is required - Correct Format: email@example.com
            </p>
          </label>
        </div>
        <div className="add-warehouse-buttons">
          <span className="add-warehouse-buttons__cancel" onClick={goBack}>
            Cancel
          </span>
          <button className="add-warehouse-buttons__add">
            + Add Warehouse
          </button>
        </div>
      </form>
    </div>
  );
}
