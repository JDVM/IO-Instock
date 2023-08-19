import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import arrowBackIcon from "../../assets/images/Icons/arrow_back-24px.svg";
import './EditinventoryItem.scss';

function EditInventoryItem() {
  const { itemId } = useParams();
  const navigate = useNavigate();

  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedWarehouse, setSelectedWarehouse] = useState("");
  const [availability, setAvailability] = useState("inStock");
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`inventory/${itemId}`);
        console.log(response)
        const itemData = response.data;

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
  }, [itemId]);

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

      await axios.put(`/api/inventory/${itemId}`, updatedItem);
      navigate("/inventory");
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  const categoryOptions = [
    { value: "electronics", label: "Electronics" },
    { value: "gear", label: "Gear" },
    { value: "apparel", label: "Apparel" },
    { value: "accessories", label: "Accessories" },
    { value: "health", label: "Health" },
  ];

  const warehouseOptions = [
    { value: "Manhattan", label: "Manhattan" },
    { value: "Washington", label: "Washington" },
    { value: "Jersy", label: "Jersey" },
    { value: "SF", label: "SF" },
    { value: "Santa Monica", label: "Santa Monica" },
    { value: "Seattle", label: "Seattle" },
    { value: "Miami", label: "Miami" },
    { value: "Boston", label: "Boston" },
  ];

  return (
    <form onSubmit={handleSubmit}>
      <div className="edit-inventory-item__head">
        <img className="edit-inventory-item__icon" src={arrowBackIcon} />
        <h1 className="edit-inventory-item__head-title">Edit Inventory Item</h1>
      </div>
      <section className="edit-inventory-item__section">
        <h2 className="edit-inventory-item__subhead-title">Item Details</h2>
        <label className="edit-inventory-item__label">
          Item Name{" "}
          <input className="edit-inventory-item__input"
            type="text"
            name="name"
            onChange={handleChangeItemName}
            value={itemName}
          />
        </label>
        <label className="edit-inventory-item__label">
          Description{" "}
          <textarea className="edit-inventory-item__input"
            type="text"
            name="description"
            onChange={handleChangeDescription}
            value={description}
          />
        </label>
        <h3 className="edit-inventory-item__label">Category</h3>
        <select className="edit-inventory-item__input"
          name="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">Select a category</option>
          {categoryOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </section >
      <section className="edit-inventory-item__section">
        <h2 className="edit-inventory-item__subhead-title">Item Availability</h2>
        <h3 className="edit-inventory-item__label">Status</h3>
          <label className="edit-inventory-item__availability-radio">
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
            <select className="edit-inventory-item__input"
            name="warehouse"
            value={selectedWarehouse}
            onChange={handleWarehouseChange}
            >
            <option value="">Select a warehouse</option>
            {warehouseOptions.map((option) => (
                <option key={option.value} value={option.value}>
                {option.label}
                </option>
            ))}
            </select>
            <button>Cancel</button>
            <button>Save</button>
      </section>
    </form>
  );
}

export default EditInventoryItem;
