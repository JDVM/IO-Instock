import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link to enable navigation
import getWarehouseById from "../../utils/getWarehouseById";

import "./WarehouseDetails.scss";

export default function WarehouseDetails({ id }) {
  const [warehouseData, setWarehouseData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchWarehouse = async () => {
      try {
        const data = await getWarehouseById(id);
        setWarehouseData(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchWarehouse();
  }, [id]);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="warehouse-details">
      <div className="warehouse-details__header">
        <Link to="/warehouses/:id/edit">
          <svg
            className="warehouse-details__back-icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
              fill="#2E66E6"
            />
          </svg>
        </Link>
        <h2 className="warehouse-details__title">
          {warehouseData.warehouse_name}
        </h2>
        <div className="warehouse-details__edit">
          <svg
            className="warehouse-details__edit-icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04V7.04Z"
              fill="#2E66E6"
            />
          </svg>
          <p className="warehouse-details__edit--mobile">Edit</p>
        </div>
      </div>
      <div className="warehouse-details__body">
        <div className="warehouse-details__address">
          <h4>Warehouse Address:</h4>
          <p>{warehouseData.address}</p>
        </div>
        <div className="warehouse-details__contact-name">
          <h4>Contact Name:</h4>
          <p>{warehouseData.contact_name}</p>
          <p>{warehouseData.contact_position}</p>
        </div>
        <div className="warehouse-details__contact-info">
          <h4>Contact Information:</h4>
          <p>{warehouseData.contact_phone}</p>
          <p>{warehouseData.contact_email}</p>
        </div>
      </div>
    </div>
  );
}

/*
Create the Warehouse Details component. The user should also be able to navigate back to the Warehouse List Page from this page. Ensure that it works at and between all breakpoints and is fully responsive without any elements overlapping.

Note: This does not include the inventory list below the warehouse details. 

Assign the equivalent back-end ticket as well, as it will be easier if a given team member does both the front-e\
nd and the back-end task for this component.
*/

/*
Data Format:

{
    "id": 1,
    "warehouse_name": "Manhattan",
    "address": "503 Broadway",
    "city": "New York",
    "country": "USA",
    "contact_name": "Parmin Aujla",
    "contact_position": "Warehouse Manager",
    "contact_phone": "+1 (646) 123-1234",
    "contact_email": "paujla@instock.com",
    "created_at": "2023-08-16T04:16:02.000Z",
    "updated_at": "2023-08-16T04:16:02.000Z"
}
*/
