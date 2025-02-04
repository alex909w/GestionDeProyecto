// app/layout.js

import Link from 'next/link';
import '../Styles/globals.css'; 

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Sistema de Gestión de Proyectos</title>
        {/* Puedes agregar más metadatos, enlaces o archivos de fuentes aquí */}
      </head>
      <body>
        <header>
          <nav>
            {/* Barra de navegación */}
            <ul>
              <li>
                <Link href="/">Inicio</Link>
              </li>
              <li>
                <Link href="/auth/login">Iniciar sesión</Link>
              </li>
              <li>
                <Link href="/auth/register">Registrarse</Link>
              </li>
              <li>
                <Link href="/projects">Proyectos</Link>
              </li>
              <li>
                <Link href="/tasks">Tareas</Link>
              </li>
              <li>
                <Link href="/profile">Mi Perfil</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>&copy; 2025 Sistema de Gestión de Proyectos. Todos los derechos reservados.</p>
        </footer>
      </body>
    </html>
  );
}
