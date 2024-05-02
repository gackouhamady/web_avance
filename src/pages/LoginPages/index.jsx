import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../styles/LoginPage.css';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Vérifier l'authentification du réceptionniste
    try {
      const response = await fetch('http://localhost:30002/receptionniste/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      });
      if (response.ok) {
        // Rediriger vers la page du tableau de bord du réceptionniste si l'authentification réussit
        navigate("/dashboard/body");
      } else {
        // Afficher une alerte en cas d'échec de l'authentification
        alert("Identifiants incorrects");
      }
    } catch (error) {
      console.error("Erreur lors de l'authentification :", error);
      // Afficher une alerte en cas d'erreur
      alert("Une erreur s'est produite. Veuillez réessayer.");
    }
  };

  return (
    <div className="login-container">
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={credentials.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="password">Mot de passe:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};

export default Login;
