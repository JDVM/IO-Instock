import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import backicon from '../../assets/images/Icons/arrow_back-24px.svg';
import errorIcon from '../../assets/images/Icons/error-24px.svg';
import './EditWarehouse.scss';
const EditWarehouse = ({ warehouseData }) => {
  const [formData, setFormData] = useState({
    warehouse_name: warehouseData.warehouse_name,
    street_address: warehouseData.street_address,
    city: warehouseData.city,
    country: warehouseData.country,
    contact_name: warehouseData.contact_name,
    contact_position: warehouseData.contact_position,
    contact_phone: warehouseData.contact_phone,
    contact_email: warehouseData.contact_email,
  });
  const [errors, setErrors] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    if (!formData.warehouse_name.trim()) {
        newErrors.warehouse_name = 'Warehouse Name is required.';
      }
      if (!formData.street_address.trim()) {
        newErrors.street_address = 'Street Address is required.';
      }
      if (!formData.city.trim()) {
        newErrors.city = 'City is required.';
      }
      if (!formData.country.trim()) {
        newErrors.country = 'Country is required.';
      }
      if (!formData.contact_name.trim()) {
        newErrors.contact_name = 'Contact Name is required.';
      }
      if (!formData.contact_position.trim()) {
        newErrors.contact_position = 'Contact Position is required.';
      }
      if (!formData.contact_phone.trim()) {
        newErrors.contact_phone = 'Contact Phone is required.';
      } else if (!/^[0-9]+$/.test(formData.contact_phone)) {
        newErrors.contact_phone = 'Invalid Phone Number.';
      }
      if (!formData.contact_email.trim()) {
        newErrors.contact_email = 'Contact Email is required.';
      } else if (!/^\S+@\S+\.\S+$/.test(formData.contact_email)) {
        newErrors.contact_email = 'Invalid Email Address.';
      }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
    try {
        const response =  await axios.put(`/warehouses/${id}`, warehouseData);
       if(response.status === 200){
        navigate('/warehouses');
       } else{
        const errorData =  response.data;
        console.log('Error:', errorData);
       }
      } catch (error) {
        console.error('API Error:',error);
      }
    };
  };

  const handleCancel = () => {
    navigate('/warehouses');
  };

  return (
    <div className="edit-warehouse">
      <div className="edit-warehouse--header">
      <Link to="/warehouses" className="back-button">
          <img className='back-icon' src={backicon} alt="Back Icon" />
      </Link>
      <h2 className='edit-warehouse--title'>Edit Warehouse</h2>
      </div>
     
      <form className="edit-warehouse--form" onSubmit={handleFormSubmit}>
        <div className="form-sections">
        <div className='form--section'>
          <h3 className='form-section--title'>Warehouse Details</h3>
          <label className="form-section--label">Warehouse Name</label>
          <input
            type="text"
            className={`form-section--input ${errors.warehouse_name ? 'error' : ''}`}
            name="warehouse_name"
            value={formData.warehouse_name}
            onChange={handleFormChange}
            required
          />
          {errors.warehouse_name && (
  <div className="error-text">
    <img className="error-icon" src={errorIcon} alt="Error Icon" />
    {errors.warehouse_name}
  </div>
)}
          <label className="form-section--label">Street Address</label>
          <input
             className={`form-section--input ${errors.street_address ? 'error' : ''}`}
            type="text"
            name="street_address"
            value={formData.street_address}
            onChange={handleFormChange}
            required
          />
          {errors.street_address && (
           <div className="error-text">
            <img className="error-icon" src={errorIcon} alt="Error Icon" />
          <span className="error-txt">{errors.street_address}</span> 
           </div>
)}
          <label className="form-section--label">City</label>
          <input
             className={`form-section--input ${errors.city ? 'error' : ''}`}
            type="text"
            name="city"
            value={formData.city}
            onChange={handleFormChange}
            required
          />
          {errors.city && (
           <div className="error-text">
         <img className="error-icon" src={errorIcon} alt="Error Icon" />
           {errors.city}
           </div>
)}
          <label className="form-section--label">Country</label>
          <input
             className={`form-section--input ${errors.country ? 'error' : ''}`}
            type="text"
            name="country"
            value={formData.country}
            onChange={handleFormChange}
            required
          />
      {errors.country && (
  <div className="error-text">
    <img className="error-icon" src={errorIcon} alt="Error Icon" />
    {errors.country}
  </div>
)}
        </div>
        <div className="form--section">
        <h3 className='form-section--title'>Contact Details</h3>
          <label className="form-section--label">Contact Name</label>
          <input
            className={`form-section--input ${errors.contact_name ? 'error' : ''}`}
            type="text"
            name="contact_name"
            value={formData.contact_name}
            onChange={handleFormChange}
            required
          /> 
          {errors.contact_name && (
  <div className="error-text">
    <img className="error-icon" src={errorIcon} alt="Error Icon" />
    {errors.contact_name}
  </div>
)}
          <label className="form-section--label">Contact Position</label>
          <input
             className={`form-section--input ${errors.contact_position ? 'error' : ''}`}
            type="text"
            name="contact_position"
            value={formData.contact_position}
            onChange={handleFormChange}
            required
          />
          {errors.contact_position && (
  <div className="error-text">
    <img className="error-icon" src={errorIcon} alt="Error Icon" />
    {errors.contact_position}
  </div>
)}
          <label className="form-section--label">Contact Phone Number</label>
          <input
             className={`form-section--input ${errors.contact_phone ? 'error' : ''}`}
            type="tel"
            name="contact_phone"
            value={formData.contact_phone}
            onChange={handleFormChange}
            required
          />
          {errors.contact_phone && (
  <div className="error-text">
    <img className="error-icon" src={errorIcon} alt="Error Icon" />
    {errors.contact_phone}
  </div>
)}
          <label  className="form-section--label">Contact Email</label>
          <input
            className={`form-section--input ${errors.contact_email ? 'error' : ''}`}
            type="email"
            name="contact_email"
            value={formData.contact_email}
            onChange={handleFormChange}
            required
          />
           {errors.contact_email && (
  <div className="error-text">
    <img className="error-icon" src={errorIcon} alt="Error Icon" />
    {errors.contact_email}
  </div>
)} 
        </div>
        </div>
         <div className='form-btns'>
         <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
        <button  className="save-btn"type="button" onClick={handleFormSubmit}>Save</button>
         </div>
        
     
      </form>
    </div>
  );
};

export default EditWarehouse;
