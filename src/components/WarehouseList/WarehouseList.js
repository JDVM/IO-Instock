import './Warehouse.scss';
import deleteIcon from "../../assets/images/Icons/delete_outline-24px.svg";
import editIcon from '../../assets/images/Icons/edit-24px.svg';

function WarehouseList () {
    return (
        <section className='warehouse-list'>
            <div className='warehouse-list__head'>
                <h1 className='warehouse-list__title'>WAREHOUSES</h1>
                <input className='warehouse-list__input' type="search" name="search" placeholder="Search..." />
                <button className='warehouse-list__add-button' type="button">+ Add New Warehouse</button>
            </div>
            <div className='warehouse-list__card-item'>
                <article className='warehouse-list__card-parent'>
                    <div className='warehouse-list__card-child'>
                        <div className='warehouse-list__card-info'>
                            <h4 className='warehouse-list__card-title'>WAREHOUSE</h4>
                            <p className='warehouse-list__card-link'>Washington</p>
                        </div>
                        <div className='warehouse-list__card-info'>
                            <h4 className='warehouse-list__card-title'>ADDRESS</h4>
                            <p className='warehouse-list__card-text'>503 Broadway, New York, USA</p>
                        </div>
                    </div>
                    <div className='warehouse-list__card-child'>
                        <div className='warehouse-list__card-info'>
                            <h4 className='warehouse-list__card-title'>CONTACT NAME</h4>
                            <p className='warehouse-list__card-text'>Graeme Lyon</p>
                        </div>
                        <div className='warehouse-list__card-info'>
                            <h4 className='warehouse-list__card-title'>CONTACT INFORMATION</h4>
                            <p className='warehouse-list__card-text'>+1 629 555-012 <br/> paujla@instock.com</p>
                        </div>
                    </div>
                </article>
                <div className='warehouse-list__foot'> 
                    <img className='warehouse-list__icon' src={deleteIcon} alt='delete icon' />
                    <img className='warehouse-list__icon' src={editIcon} alt='edit icon'/>
                </div>
            </div>
        </section>
    )
}



export default WarehouseList;