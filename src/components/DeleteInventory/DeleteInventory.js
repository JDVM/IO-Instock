import axios from "axios";
import Modal from "react-modal";
import "./DeleteInventory.scss";
import { useEffect } from "react";

Modal.setAppElement("#root");

export default function DeleteInventory({
  modalIsOpen,
  setModalIsOpen,
  toDeleteItem,
  inventoryData,
  setInventoryData,
}) {
  const API_URL = process.env.REACT_APP_API_URL;
  const PORT = process.env.REACT_APP_API_PORT;

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleDelete = async () => {
    await axios.delete(`${API_URL}:${PORT}/inventories/${toDeleteItem[0]}`);
    setInventoryData(
      inventoryData.filter((inventory) => inventory.id !== toDeleteItem[0])
    );
    console.log(`Delete confirmed for ID ${toDeleteItem[0]}`);
    closeModal();
  };

  useEffect(() => {
    console.log(toDeleteItem);
  }, [toDeleteItem]);

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Delete Confirmation"
      className="delete-inventory"
      overlayClassName="delete-inventory__overlay"
    >
      <div className="delete-inventory__content-wrapper">
        <h2 className="delete-inventory__title">
          Delete {toDeleteItem[1]} inventory item?
        </h2>
        <p className="delete-inventory__content">
          Please confirm that you’d like to delete {toDeleteItem[1]} from the
          inventory list. You won’t be able to undo this action.
        </p>
      </div>
      <div className="delete-inventory__button-wrapper">
        <button className="delete-inventory__cancel" onClick={closeModal}>
          Cancel
        </button>
        <button className="delete-inventory__delete" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </Modal>
  );
}
