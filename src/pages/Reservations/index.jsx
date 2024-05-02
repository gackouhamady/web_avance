import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../../styles/reservation.css';

function Reservations() {
  const [reservations, setReservations] = useState([]);
  const [page, setPage] = useState(1);

  const getReservationsForPage = () => {
    const startIndex = (page - 1) * 5;
    const endIndex = startIndex + 5;
    return reservations.slice(startIndex, endIndex);
  };

  const fetchReservations = async () => {
    try {
      const response = await axios.get('http://localhost:30002/reservation');
      setReservations(response.data);
    } catch (error) {
      console.error('Error fetching reservations:', error);
    }
  };

  useEffect(() => {
    fetchReservations();
  }, []);

  return (
    <div>
      <div className="reservation-list">
        <table>
          <thead>
            <tr>
              <th className='th-ajout'>
                <Link to="/dashboard/ajouterReservation" className='Link'>
                  <i className="fas fa-plus-square me-2"></i> Ajouter une réservation
                </Link>
              </th>
            </tr>
            <tr>
              <th>Numéro de Réservation</th>
              <th>Date de Début</th>
              <th>Date de Fin</th>
              <th>Chambre</th>
              <th>Client</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {getReservationsForPage().map((reservation, index) => (
              <tr key={index}>
                <td>{reservation.NumeroReservation}</td>
                <td>{reservation.DateDebut}</td>
                <td>{reservation.DateFin}</td>
                <td>{reservation.Chambre}</td>
                <td>{reservation.Client}</td>
                <td>
                  <Link to='/dashboard/modifierReservation'>
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
          <button onClick={() => setPage(page + 1)} disabled={page * 5 >= reservations.length}>
            Suivant
          </button>
        </div>
      </div>
    </div>
  );
}

export default Reservations;
