import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/modifierReceptionniste.css';

function ModifierReceptionniste() {
  const [receptionniste, setReceptionniste] = useState({
    nom: '',
    prenom: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReceptionniste((prevReceptionniste) => ({
      ...prevReceptionniste,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Envoyer les données du réceptionniste modifié à l'API
    console.log('Réceptionniste modifié :', receptionniste);
  };

  return (
    <div className="modifier-receptionniste">
      <form onSubmit={handleSubmit}>
        <label htmlFor="nom">Nom:</label>
        <input
          type="text"
          id="nom"
          name="nom"
          value={receptionniste.nom}
          onChange={handleChange}
        />
        <label htmlFor="prenom">Prénom:</label>
        <input
          type="text"
          id="prenom"
          name="prenom"
          value={receptionniste.prenom}
          onChange={handleChange}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={receptionniste.email}
          onChange={handleChange}
        />
        <button type="submit">Modifier</button>
      </form>
      <Link to="/dashboard/receptionnistes" className="btn-cancel">
        Annuler
      </Link>
    </div>
  );
}

export default ModifierReceptionniste;
