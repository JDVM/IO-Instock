import React from 'react';
import EditWarehouse from './EditWarehouse';

const warehouseData = {
  warehouse_name: 'Test Warehouse',
  street_address: '123 Test Street',
  city: 'Test City',
  country: 'Test Country',
  contact_name: 'John Doe',
  contact_position: 'Manager',
  contact_phone: '1234567890',
  contact_email: 'johndoe@example.com',
};

const EditWarehousePreview = () => {
  return (
    <>

      <EditWarehouse warehouseData={warehouseData} />
    </>
  );
};

export default EditWarehousePreview;