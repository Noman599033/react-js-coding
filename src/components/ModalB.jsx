import React, { useState, useEffect } from 'react';
import './ModalA.css';

const ModalB = ({ uscontacts, closeModal }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log("Contacts received:", uscontacts);
    }, [uscontacts]);

    return (
        <div className="modal">
            <div className="modal-content ">
                <h2>Modal B</h2>
                <h4>US Contact</h4>
                {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p>Error: {error}</p>
                ) : (
                    <ul>
                        {uscontacts.length > 0 ? (
                            uscontacts.map(uscontact => (
                                <li key={uscontact.id}>{uscontact.phone}</li>
                            ))
                        ) : (
                            <p>No contacts available</p>
                        )}
                    </ul>
                )}
                <button className="btn" style={{ backgroundColor: '#46139f', color: 'white' }} onClick={closeModal}>Close</button>
            </div>
        </div>
    );
};

export default ModalB;
