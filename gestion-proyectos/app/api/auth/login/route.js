// app/api/auth/login/route.js

export async function POST(req) {
    const { email, password } = await req.json();
  
    // Lógica para verificar las credenciales
    if (email === 'user@example.com' && password === 'password') {
      // Retornar respuesta de éxito (por ejemplo, token JWT)
      return new Response(JSON.stringify({ success: true, token: 'fake-token' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } else {
      // Retornar error si las credenciales no coinciden
      return new Response(JSON.stringify({ success: false }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }
  