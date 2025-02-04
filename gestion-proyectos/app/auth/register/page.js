// app/auth/register.js

'use client';

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/auth/register', { email, password });

      if (response.data.success) {
        router.push('/auth/login');
      } else {
        setError('Error al registrar usuario');
      }
    } catch (err) {
      console.error('Error al registrar:', err);
      setError('Error al registrar. Intenta de nuevo.');
    }
  };

  return (
    <div>
      <h1>Registrarse</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Correo Electrónico:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Contraseña:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}
