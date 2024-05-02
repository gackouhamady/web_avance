import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../../styles/chambre.css';

function Chambres() {
  const [chambres, setChambres] = useState([]);
  const [page, setPage] = useState(1);

  const getChambresForPage = () => {
    const startIndex = (page - 1) * 5;
    const endIndex = startIndex + 5;
    return chambres.slice(startIndex, endIndex);
  };

  const fetchChambres = async () => {
    try {
      const response = await axios.get('http://localhost:30002/chambre');
      setChambres(response.data);
    } catch (error) {
      console.error('Error fetching chambres:', error);
    }
  };

  useEffect(() => {
    fetchChambres();
  }, []);

  return (
    <div>
      <div className="chambre-list">
        <table>
          <thead>
            <tr>
              <th className='th-ajout'>
                <Link to="/dashboard/ajouterChambre" className='Link'>
                  <i className="fas fa-plus-square me-2"></i> Ajouter une chambre
                </Link>
              </th>
            </tr>
            <tr>
              <th>Numéro</th>
              <th>Type</th>
              <th>Prix</th>
              <th>Caractéristique</th>
              <th>Étage</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {getChambresForPage().map((chambre, index) => (
              <tr key={index}>
                <td>{chambre.Numero}</td>
                <td>{chambre.Type}</td>
                <td>{chambre.Prix}</td>
                <td>{chambre.Caracteristique}</td>
                <td>{chambre.Etage}</td>
                <td>
                  <Link to='/dashboard/modifierChambre'>
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
          <button onClick={() => setPage(page + 1)} disabled={page * 5 >= chambres.length}>
            Suivant
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chambres;
