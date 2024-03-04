import React from 'react';

const TransferForm = () => (
    <form className="row g-3 justify-content-center">
        <div className="col-auto">
            <input
                type="text"
                className="form-control"
                placeholder="Description"
            />
        </div>
        <div className="col-auto">
            <div className="input-group mx-sm-2 mb-2">
                <div className="input-group-prepend">
                    <div className="input-group-text">$</div>
                </div>
                <input
                    type="text"
                    className="form-control"
                    name="mount"
                />
            </div>
        </div>
        <div className="col-auto">
            <button
                type="submit"
                className="btn btn-primary mb-2"
            >
                Add
            </button>
        </div>
    </form>
)

export default TransferForm;