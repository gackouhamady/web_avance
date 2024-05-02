import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../../styles/receptionniste.css';

function Receptionnistes() {
  const [receptionnistes, setReceptionnistes] = useState([]);
  const [page, setPage] = useState(1);

  const getReceptionnistesForPage = () => {
    const startIndex = (page - 1) * 5;
    const endIndex = startIndex + 5;
    return receptionnistes.slice(startIndex, endIndex);
  };

  const fetchReceptionnistes = async () => {
    try {
      const response = await axios.get('http://localhost:30002/receptionniste');
      setReceptionnistes(response.data);
    } catch (error) {
      console.error('Error fetching receptionnistes:', error);
    }
  };

  useEffect(() => {
    fetchReceptionnistes();
  }, []);

  return (
    <div>
      <div className="receptionniste-list">
        <table>
          <thead>
            <tr>
              <th className='th-ajout'>
                <Link to="/dashboard/ajouterReceptionniste" className='Link'>
                  <i className="fas fa-user-plus me-2"></i> Ajouter un réceptionniste
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
            {getReceptionnistesForPage().map((receptionniste, index) => (
              <tr key={index}>
                <td>{receptionniste.Nom}</td>
                <td>{receptionniste.Prenom}</td>
                <td>{receptionniste.email}</td>
                <td>
                  <Link to='/dashboard/modifierReceptionniste'>
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
          <button onClick={() => setPage(page + 1)} disabled={page * 5 >= receptionnistes.length}>
            Suivant
          </button>
        </div>
      </div>
    </div>
  );
}

export default Receptionnistes;
