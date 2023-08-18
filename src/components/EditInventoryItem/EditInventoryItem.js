import { useState } from 'react';

import arrowBackIcon from '../../assets/images/Icons/arrow_back-24px.svg';

function EditInventoryItem() {
    const [itemName, setItemName] = useState("");
    const [description, setDescription] = useState("");

    const handleChangeItemName = (e) => {
        setItemName(e.target.value);
    };
    const handleChangeDescription = (e) => {
        setDescription(e.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <div className="EditInventoryItem__head">
                <img src={arrowBackIcon} />
                <h1>Edit Inventory Item</h1>
            </div>
            <div className='EditInventoryItem__details'>
                <h2>Item Details</h2>
                    <label>
                        Item Name <input
                                        type='text'
                                        name='name'
                                        onChange={handleChangeItemName}
                                        value={itemName}/>
                    </label>
                    <label>
                        Description <textarea
                                        type='text'
                                        name='description'
                                        onChange={handleChangeDescription}
                                        value={description} />
                    </label>
                    <h3>Category</h3>
            </div>
            <div className='EditInventoryItem__availability'>
                <h2>Item Availability</h2>
            </div>
        </form>
    );
};

export default EditInventoryItem;