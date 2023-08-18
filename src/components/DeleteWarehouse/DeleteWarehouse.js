import axios from "axios";
import Modal from "react-modal";
import "./DeleteWarehouse.scss";
import { useEffect } from "react";

Modal.setAppElement("#root");

export default function DeleteWarehouse({
  modalIsOpen,
  setModalIsOpen,
  toDeleteWarehouse,
  warehouses,
  setWarehouses,
}) {
  const API_URL = process.env.REACT_APP_API_URL;
  const PORT = process.env.REACT_APP_API_PORT;
    console.log(modalIsOpen);
  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleDelete = async () => {
    
    await axios.delete(`${API_URL}:${PORT}/warehouses/${toDeleteWarehouse[0]}`);
    setWarehouses(
      warehouses.filter((warehouse) => warehouse.id !== toDeleteWarehouse[0])
    );
    console.log(`Delete confirmed for ID ${toDeleteWarehouse[0]}`);
    closeModal();
  };

  useEffect(() => {
    console.log(toDeleteWarehouse);
  }, [toDeleteWarehouse]);

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Delete Confirmation"
      className="delete-warehouse"
      overlayClassName="delete-warehouse__overlay"
    >
      <div className="delete-warehouse__content-wrapper">
        <h2 className="delete-warehouse__title">
          Delete {toDeleteWarehouse[1]} warehouse?
        </h2>
        <p className="delete-warehouse__content">
          Please confirm that you’d like to delete {toDeleteWarehouse[1]} from the
          warehouse list. You won’t be able to undo this action.
        </p>
      </div>
      <div className="delete-warehouse__button-wrapper">
        <button className="delete-warehouse__cancel" onClick={closeModal}>
          Cancel
        </button>
        <button className="delete-warehouse__delete" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </Modal>
  );
}