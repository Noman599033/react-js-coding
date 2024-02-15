import React, { useState, useEffect } from 'react';
import './ModalA.css';

const ModalA = ({ contacts, closeModal }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log("Contacts received:", contacts);
    }, [contacts]);

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Modal A</h2>
                <h4>All Contact</h4>
                {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p>Error: {error}</p>
                ) : (
                    <ul>
                        {contacts.length > 0 ? (
                            contacts.map(contact => (
                                <li key={contact.id}>{contact.phone}</li>
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

export default ModalA;
