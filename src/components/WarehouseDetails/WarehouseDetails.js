import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import getWarehouseById from "../../utils/getWarehouseById";
import backArrow from "../../assets/images/Icons/arrow_back-24px.svg";

import "./WarehouseDetails.scss";

export default function WarehouseDetails({ id }) {
  const navigate = useNavigate();
  const [warehouseData, setWarehouseData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchWarehouse = async () => {
      try {
        const data = await getWarehouseById(id);
        setWarehouseData(data);
        document.title = `InStock | ${data.warehouse_name}`;
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
        <img
          className="warehouse-details__back-icon"
          onClick={() => navigate(-1)}
          src={backArrow}
          alt="back arrow"
        />
        <h2 className="warehouse-details__heading">
          {warehouseData.warehouse_name}
        </h2>
        <Link className="warehouse-details__edit" to={`/warehouses/${id}/edit`}>
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
        </Link>
      </div>
      <div className="warehouse-details__wrapper">
        <div className="warehouse-details__address">
          <h4 className="warehouse-details__title">Warehouse Address:</h4>
          <p className="warehouse-details__content">{warehouseData.address},</p>
          <p className="warehouse-details__content">{warehouseData.city}, {warehouseData.country}</p>
        </div>
        <div className="warehouse-details__contact-name">
          <h4 className="warehouse-details__title">Contact Name:</h4>
          <p className="warehouse-details__content">
            {warehouseData.contact_name}
          </p>
          <p className="warehouse-details__content">
            {warehouseData.contact_position}
          </p>
        </div>
        <div className="warehouse-details__contact-info">
          <h4 className="warehouse-details__title">Contact Information:</h4>
          <p className="warehouse-details__content">
            {warehouseData.contact_phone}
          </p>
          <p className="warehouse-details__content">
            {warehouseData.contact_email}
          </p>
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
