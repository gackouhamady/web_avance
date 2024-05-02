import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './../../styles/ajouterReceptionniste.css'

function AjouterReceptionniste() {
  const [Nom, setNom] = useState('');
  const [Prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Appel à votre API REST pour ajouter un réceptionniste
    fetch('http://localhost:30002/receptionniste', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ Nom, Prenom, email })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('L\'ajout du réceptionniste a échoué');
        }
        // Afficher un message de succès si l'ajout est réussi
        alert('Réceptionniste ajouté avec succès');
        // Réinitialiser les champs du formulaire
        setNom('');
        setPrenom('');
        setEmail('');
      })
      .catch(error => {
        console.error('Erreur lors de l\'ajout du réceptionniste:', error);
      });
  };

  return (
    <div className="ajouter-receptionniste">
      <form onSubmit={handleSubmit}>
        <label htmlFor="Nom">Nom:</label>
        <input
          type="text"
          id="Nom"
          name="Nom"
          value={Nom}
          onChange={(e) => setNom(e.target.value)}
        />
        <label htmlFor="Prenom">Prénom:</label>
        <input
          type="text"
          id="Prenom"
          name="Prenom"
          value={Prenom}
          onChange={(e) => setPrenom(e.target.value)}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Ajouter</button>
        <Link to="/dashboard/receptionnistes" className="btn-cancel">
          Annuler
        </Link>
      </form>
    </div>
  );
}

export default AjouterReceptionniste;
