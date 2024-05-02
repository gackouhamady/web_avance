import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../../styles/client.css';

function Clients() {
  const [clients, setClients] = useState([]);
  const [page, setPage] = useState(1);

  const getClientsForPage = () => {
    const startIndex = (page - 1) * 5;
    const endIndex = startIndex + 5;
    return clients.slice(startIndex, endIndex);
  };

  const fetchClients = async () => {
    try {
      const response = await axios.get('http://localhost:30002/client');
      setClients(response.data);
    } catch (error) {
      console.error('Error fetching clients:', error);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  return (
    <div>
      <div className="client-list">
        <table>
          <thead>
            <tr>
              <th className='th-ajout'>
                <Link to="/dashboard/ajouterClient" className='Link'>
                  <i className="fas fa-user-plus me-2"></i> Ajouter un client
                </Link>
              </th>
            </tr>
            <tr>
              <th>Nom</th>
              <th>Prénom</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {getClientsForPage().map((client, index) => (
              <tr key={index}>
                <td>{client.Nom}</td>
                <td>{client.Prenom}</td>
                <td>{client.email}</td>
                <td>
                  <Link to='/dashboard/modifierClient'>
                    <button className="btn-update">Modifier</button>
                  </Link>
                  <button className="btn-delete">Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination">
          <button onClick={() => setPage(page - 1)} disabled={page === 1}>
            Précédent
          </button>
          <button onClick={() => setPage(page + 1)} disabled={page * 5 >= clients.length}>
            Suivant
          </button>
        </div>
      </div>
    </div>
  );
}

export default Clients;
