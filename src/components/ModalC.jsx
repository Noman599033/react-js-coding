import React from 'react';

const ModalC = ({ closeModal }) => {
    return (
        <div className="modal">
            <div className="modal-content" style={{ backgroundColor: 'white', borderColor: '#46139f' }}>
                <h2>Modal C</h2>
                {/* Display contact details */}
                <button className="btn" style={{ backgroundColor: '#46139f', color: 'white' }} onClick={closeModal}>Close</button>
            </div>
        </div>
    );
};

export default ModalC;
