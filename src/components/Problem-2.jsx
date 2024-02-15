import React, { useState, useEffect } from 'react';
import ModalA from './ModalA';
import ModalB from './ModalB';

const Problem2 = () => {
    const [showModal, setShowModal] = useState(false);
    const [contacts, setContacts] = useState([]);
    const [uscontacts, setUSContacts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchContacts();
        fetchUscontacts();
    }, []);

    const fetchContacts = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://contact.mediusware.com/api/contacts/');
            if (!response.ok) {
                throw new Error('Failed to fetch contacts');
            }
            const data = await response.json();
            setContacts(data.results);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const fetchUscontacts = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://contact.mediusware.com/api/country-contacts/united%20states/');
            if (!response.ok) {
                throw new Error('Failed to fetch US contacts');
            }
            const data = await response.json();
            setUSContacts(data.results);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const openModal = (modalType) => {
        setShowModal(modalType);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>
                <div className="d-flex justify-content-center gap-3">
                    <button id="showModalButtonAll" className="btn btn-lg btn-outline-primary" type="button" onClick={() => openModal('all')}>All Contacts</button>
                    <button id="showModalButtonUS" className="btn btn-lg btn-outline-warning" type="button" onClick={() => openModal('us')}>US Contacts</button>
                </div>
            </div>

            {showModal === 'all' && <ModalA contacts={contacts} closeModal={closeModal} />}
            {showModal === 'us' && <ModalB uscontacts={uscontacts} closeModal={closeModal} />}
        </div>
    );
};

export default Problem2;
