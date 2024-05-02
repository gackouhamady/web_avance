import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPages from "../LoginPages";
import Dashboard from "../../components/Dashboard";
 
import Chambres from "../Chambres";
import Clients from "../Clients";
import Receptionnistes from "../Receptionnistes";
import Reservations from "../Reservations";
import Body from "../../components/Body";
import AjouterClient from "../Clients/AjouterClient";
import ModifierClient from "../Clients/ModifierClient";
import AjouterReceptionniste from "../Receptionnistes/AjouterReceptionniste"

import ModifierReceptionniste from "../Receptionnistes/ModifierReceptionniste"

import AjouterChambre from "../Chambres/AjouterChambre"
import AjouterReservation from "../Reservations/AjouterReservation"

import ModifierChambre from "../Chambres/ModifierChambre"
import ModifierReservation from "../Reservations/ModifierReservation"
 
 
 

const Home = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPages />} />
        <Route path="logout/" element={<LoginPages />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="body" element={<Body/>} /> 
          <Route path="clients" element={< Clients />} />
          <Route path="receptionnistes" element={<Receptionnistes />} />
          <Route path="chambres" element={<Chambres />} />
          <Route path="reservations" element={<Reservations/>} />
          <Route path="ajouterClient" element={<AjouterClient/>}/>
          <Route path="modifierClient" element={<ModifierClient/>}/>
          <Route path="ajouterReceptionniste" element={<AjouterReceptionniste/>}/>
          <Route path="modifierReceptionniste" element={<ModifierReceptionniste/>}/>
          <Route path="ajouterChambre" element={<AjouterChambre/>}/>
          <Route path="modifierChambre" element={<ModifierChambre/>}/>
          <Route path="ajouterReservation" element={<AjouterReservation/>}/>
          <Route path="modifierReservation" element={<ModifierReservation/>} />

        </Route>
      </Routes>
    </Router>
  );
};

export default Home;