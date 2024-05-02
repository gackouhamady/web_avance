import React from 'react';
import StatCard from './StatCard';
import '../styles/Body.css'
 

function Body() {
  // Données statiques pour simuler les statistiques
  const stats = {
    Clients: 2500,
    Receptionnites: 120,
    Chambres: 50,
    Reservations: 1800
   
  };

  return (
    <div className="container mt-4">
      <div className="body">
        <div className="stats">
          <div className="row">
            <div className="col">
              <StatCard title="Clients" value={stats.Clients }/>
            </div>
            <div className="col">
              <StatCard title="Receptionnistes" value={stats.Receptionnites} />
            </div>
            <div className="col">
              <StatCard title="Chambres" value={stats.Chambres} />
            </div>
            <div className="col">
              <StatCard title="Reservations " value={stats.Reservations} />
            </div>
          </div>
           
        </div>
      </div>
    </div>
  );
}

export default Body;