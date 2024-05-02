import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

import '../../styles/modifierChambre.css';

function ModifierChambre() {
  const { id } = useParams();
  const [chambre, setChambre] = useState({
    Numero: '',
    Type: '',
    Prix: '',
    Caracteristique: '',
    Etage: ''
  });

  useEffect(() => {
    const fetchChambre = async () => {
      try {
        const response = await axios.get(`http://localhost:30002/chambre/${id}`);
        setChambre(response.data);
      } catch (error) {
        console.error('Error fetching chambre:', error);
      }
    };
    fetchChambre();
  }, [id]);

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
      await axios.put(`http://localhost:30002/chambre/${id}`, chambre);
      alert('Chambre modifiée avec succès');
    } catch (error) {
      console.error('Error updating chambre:', error);
    }
  };

  return (
    <div className="modifier-chambre">
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
        <button type="submit">Modifier</button>
        <Link to="/dashboard/chambres" className="btn-cancel">
          Annuler
        </Link>
      </form>
    </div>
  );
}

export default ModifierChambre;
