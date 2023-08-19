import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
const PORT = process.env.REACT_APP_API_PORT;

/* function to add a new inventory item to the inventories database

   response body example:
   {
  "id": "71870fd2-ede3-4116-a5ca-632ae2aadc32",
  "warehouse_id": "bfc9bea7-66f1-44e9-879b-4d363a888eb4",
  "item_name": "Paper Towels",
  "description": "Made out of military-grade synthetic materials, these paper towels are highly flammable, yet water resistant, and easy to clean.",
  "category": "Gear",
  "status": "Out of Stock",
  "quantity": 0
  }
*/
export const addInventoryItem = async (newItem) => {
  console.log(newItem);
  try {
    const newItemWithId = await axios.post(
      `${API_URL}:${PORT}/inventories`,
      newItem
    );
    if (!newItemWithId.data) throw new Error();
    else return newItemWithId.data;
  } catch (error) {
    console.error("Error creating new inventory item!");
    throw error;
  }
};

/* function to add a new warehouse to the warehouses database

{
    "warehouse_name": "Chicago",
    "address": "3218 Guess Rd",
    "city": "Chicago",
    "country": "USA",
    "contact_name": "Jameson Schuppe",
    "contact_position": "Warehouse Manager",
    "contact_phone": "+1 (919) 797-2875",
    "contact_email": "jschuppe@instock.com"
  }
*/
export const addWarehouse = async (newWarehouse) => {
  console.log(newWarehouse);
  try {
    const newWarehouseWithId = await axios.post(
      `${API_URL}:${PORT}/warehouses`,
      newWarehouse
    );
    if (!newWarehouseWithId.data) throw new Error();
    else return newWarehouseWithId.data;
  } catch (error) {
    console.error("Error creating new warehouse!");
    throw error;
  }
};
