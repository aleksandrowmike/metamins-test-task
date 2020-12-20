import Modal from "../../components/modal/Modal";
import Table from "../../components/table/Table";
import React, {useReducer, useState} from 'react';
import validate from "../../validations/OwnerFormValidationRules";

const fields = [
    {label: 'Owner', value: 'owner' },
    {label: 'End date', value: 'end_date' },
    {label: 'Profits', value: 'profits' },
    {label: 'Losses', value: 'losses' },
    {label: 'Phone', value: 'phone' },
];

const owners = JSON.parse(localStorage.getItem('owners')) || [];

const initialState = { owners };

function reducer(state, action) {
    switch (action.type) {
      case 'add':
          console.log(action.payload);
        return {owners: [...state.owners, action.payload]};
      default:
        throw new Error();
    }
  }

function Overview() {
    const [modalIsOpen, setOpenModal] = useState(false);
    const [owner, setOwner] = useState({});
    const [errors, setErrors] = useState({});

    const openModal = () => {
        setOpenModal(!modalIsOpen)
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        const errors = validate(owner);
        if (Object.keys(errors).length !== 0) {
            setErrors(errors);
            return false;
        }
        dispatch({type: 'add', payload: owner});
        localStorage.setItem('owners', JSON.stringify([...state.owners, owner]));
        setOpenModal(false);
        setOwner({});
    };

    const handleChange = (event) => {
        event.persist();
        setOwner(owner => ({ ...owner, [event.target.name]: event.target.value }));
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="header">
                        <div className="row">
                            <div className="col-lg-6 col-6">
                                <h1>Overview</h1>
                            </div>
                            <div className="col-lg-6 col-6">
                                <div className="d-flex justify-content-end">
                                    <button className="more"></button>
                                    <button onClick={openModal} className="add">Add</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <Table fields={fields} data={state.owners}></Table>
                </div>
            </div>
            <Modal isOpen={modalIsOpen}>
                <div className="modal-header">
                    <h5 className="modal-title">Add Overview</h5>
                    <button type="button" onClick={openModal} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form onSubmit={handleSubmit} noValidate>
                        <div className="mb-3">
                            <label htmlFor="owner" className="form-label">Owner</label>
                            <input 
                                type="text" 
                                name="owner" 
                                className="form-control" 
                                id="owner" 
                                onChange={handleChange}
                                aria-describedby="owner" 
                                value={owner.owner || ''}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="end_date" className="form-label">End Date</label>
                            <input 
                                type="date" 
                                name="end_date" 
                                className="form-control" 
                                id="end_date" 
                                aria-describedby="End Date"
                                onChange={handleChange}
                                value={owner.end_date || ''}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="profits" className="form-label">Profits</label>
                            <input 
                                type="number" 
                                onChange={handleChange}
                                className={`form-control ${errors.profits && 'is-invalid'}`}
                                min="0" 
                                id="profits" 
                                name="profits"
                                aria-describedby="Profits" 
                                value={owner.profits || 0}
                            />
                            {errors.profits && (
                                <div className="invalid-feedback">{errors.profits}</div>
                            )}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="losses" className="form-label">Losses</label>
                            <input 
                                type="number" 
                                onChange={handleChange} 
                                min="0" 
                                className={`form-control ${errors.losses && 'is-invalid'}`}
                                id="losses" 
                                name="losses"
                                aria-describedby="Losses" 
                                value={owner.losses || 0}
                            />
                            {errors.losses && (
                                <div className="invalid-feedback">{errors.losses}</div>
                            )}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Phone</label>
                            <input 
                                type="tel" 
                                onChange={handleChange} 
                                className={`form-control ${errors.phone && 'is-invalid'}`}
                                id="phone" 
                                name="phone"
                                aria-describedby="LossPhonees" 
                                value={owner.phone || ''}
                            />
                            {errors.phone && (
                                <div className="invalid-feedback">{errors.phone}</div>
                            )}
                        </div>
                        <div className="mb-3">
                            <button type="submit" className="btn btn-primary">Save changes</button>
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    );
}

export default Overview;