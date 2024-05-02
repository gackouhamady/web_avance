import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../../styles/ajouterChambre.css';

function AjouterChambre() {
  const [chambre, setChambre] = useState({
    Numero: '',
    Type: '',
    Prix: '',
    Caracteristique: '',
    Etage: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setChambre((prevChambre) => ({
      ...prevChambre,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:30002/chambre', chambre);
      alert('Chambre ajoutée avec succès');
      setChambre({
        Numero: '',
        Type: '',
        Prix: '',
        Caracteristique: '',
        Etage: ''
      });
    } catch (error) {
      console.error('Error adding chambre:', error);
    }
  };

  return (
    <div className="ajouter-chambre">
      <form onSubmit={handleSubmit}>
        <label htmlFor="Numero">Numéro:</label>
        <input
          type="text"
          id="Numero"
          name="Numero"
          value={chambre.Numero}
          onChange={handleChange}
        />
        <label htmlFor="Type">Type:</label>
        <input
          type="text"
          id="Type"
          name="Type"
          value={chambre.Type}
          onChange={handleChange}
        />
        <label htmlFor="Prix">Prix:</label>
        <input
          type="text"
          id="Prix"
          name="Prix"
          value={chambre.Prix}
          onChange={handleChange}
        />
        <label htmlFor="Caracteristique">Caractéristique:</label>
        <input
          type="text"
          id="Caracteristique"
          name="Caracteristique"
          value={chambre.Caracteristique}
          onChange={handleChange}
        />
        <label htmlFor="Etage">Étage:</label>
        <input
          type="text"
          id="Etage"
          name="Etage"
          value={chambre.Etage}
          onChange={handleChange}
        />
        <button type="submit">Ajouter</button>
        <Link to="/dashboard/chambres" className="btn-cancel">
          Annuler
        </Link>
      </form>
    </div>
  );
}

export default AjouterChambre;
