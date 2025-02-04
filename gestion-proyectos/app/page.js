// app/page.js

import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <h1>Bienvenido al Sistema de Gestión de Proyectos</h1>
      <p>Gestiona proyectos, tareas y mucho más de manera sencilla.</p>
      <nav>
        <ul>
          <li>
            <Link href="/auth/login">Iniciar sesión</Link>
          </li>
          <li>
            <Link href="/auth/register">Registrarse</Link>
          </li>
          <li>
            <Link href="/projects">Ver proyectos</Link>
          </li>
          <li>
            <Link href="/tasks">Ver tareas</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
