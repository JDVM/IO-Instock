import Modal from 'react-modal';

import './DeleteModal.scss';

function DeleteModal({ isOpen, onClose, onDelete, warehouse }) {
    return (
        // <div className={`delete-modal${isClicked ? " delete-modal--show" : ""}`}>
        //     <div className='delete-modal__message-box'>This is the modal</div>
        // </div>
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            className="modal"
            overlayClassName="overlay"
        >
            {/* {/* <div className="overlay">
                <section className="modal"> */}
            <div className="flex">
                <button className="btn-close">X</button>
            </div>
            <div>
                <h1>Delete {warehouse.warehouse_name} warehouse?</h1>
                <p>Please confirm that you'd like to delete the Washington from the list of warehouses.
                    You won't be able to undo this action.
                </p>
                <button type="button" onClick={onClose}>Cancel</button>
                <button type="button" onClick={onDelete}>Delete</button>
            </div>
        </Modal>
    );
}

export default DeleteModal;
