import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/ajouterReservation.css';

function AjouterReservation() {
  const [reservation, setReservation] = useState({
    dateDebut: '',
    dateFin: '',
    chambre: '',
    client: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReservation((prevReservation) => ({
      ...prevReservation,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Envoyer les données de la nouvelle réservation à l'API
    console.log('Nouvelle réservation :', reservation);
  };

  return (
    <div className="ajouter-reservation">
      <form onSubmit={handleSubmit}>
        <label htmlFor="dateDebut">Date de début:</label>
        <input
          type="date"
          id="dateDebut"
          name="dateDebut"
          value={reservation.dateDebut}
          onChange={handleChange}
        />
        <label htmlFor="dateFin">Date de fin:</label>
        <input
          type="date"
          id="dateFin"
          name="dateFin"
          value={reservation.dateFin}
          onChange={handleChange}
        />
        <label htmlFor="chambre">Chambre:</label>
        <input
          type="text"
          id="chambre"
          name="chambre"
          value={reservation.chambre}
          onChange={handleChange}
        />
        <label htmlFor="client">Client:</label>
        <input
          type="text"
          id="client"
          name="client"
          value={reservation.client}
          onChange={handleChange}
        />
        <button type="submit">Ajouter</button>
      </form>
      <Link to="/dashboard/reservations" className="btn-cancel">
        Annuler
      </Link>
    </div>
  );
}

export default AjouterReservation;
