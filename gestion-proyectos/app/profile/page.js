'use client';

import { useState, useEffect } from 'react';
import '../../Styles/globals.css'; 

export default function ProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Simulación de carga de datos del perfil (en un entorno real, se haría una solicitud a la API)
    const userData = {
      name: 'Juan Pérez',
      email: 'juan.perez@example.com',
      role: 'Administrador',
    };
    setUser(userData);
  }, []);

  if (!user) {
    return <div>Cargando perfil...</div>;
  }

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h1>Mi Perfil</h1>
        <div className="profile-info">
          <p><strong>Nombre:</strong> {user.name}</p>
          <p><strong>Correo Electrónico:</strong> {user.email}</p>
          <p><strong>Rol:</strong> {user.role}</p>
        </div>
        <button className="edit-button">Editar Perfil</button>
      </div>
    </div>
  );
}
