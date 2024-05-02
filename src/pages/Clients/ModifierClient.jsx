import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/modifierClient.css';

function ModifierClient() {
  const [client, setClient] = useState({
    nom: '',
    prenom: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClient((prevClient) => ({
      ...prevClient,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Envoyer les données du client modifié à l'API
    console.log('Client modifié :', client);
  };

  return (
    <div className="modifier-client">
      <form onSubmit={handleSubmit}>
        <label htmlFor="nom">Nom:</label>
        <input
          type="text"
          id="nom"
          name="nom"
          value={client.nom}
          onChange={handleChange}
        />
        <label htmlFor="prenom">Prénom:</label>
        <input
          type="text"
          id="prenom"
          name="prenom"
          value={client.prenom}
          onChange={handleChange}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={client.email}
          onChange={handleChange}
        />
        <button type="submit">Modifier</button>
      </form>
      <Link to="/dashboard/clients" className="btn-cancel">
        Annuler
      </Link>
    </div>
  );
}

export default ModifierClient;
