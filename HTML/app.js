
const USUARIOS_REGISTRADOS = [
    { user: "Amir", pass: "1234", nombre: "Administrador del Sistema", rol: "Admin" },
    { user: "Juan", pass: "js2026", nombre: "Docente de Programación", rol: "Docente" },
    { user: "Paco", pass: "hola", nombre: "Alumno Destacado", rol: "Alumno" }
];

const loginForm = document.getElementById('loginForm');
const greetingElement = document.getElementById('greeting');

if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita que la página se recargue

        const userVal = document.getElementById('userInput').value;
        const passVal = document.getElementById('passInput').value;

        // Búsqueda en el arreglo (Uso de find)
        const validUser = USUARIOS_REGISTRADOS.find(u => u.user === userVal && u.pass === passVal);

        if (validUser) {
            // Guardamos el nombre en el navegador para usarlo en la otra página
            localStorage.setItem('usuarioLogueado', validUser.nombre);
            window.location.href = 'inicio.html';
        } else {
            const error = document.getElementById('errorMsg');
            error.classList.remove('hidden');
        }
    });
}

// --- LÓGICA PARA INICIO.HTML ---
if (greetingElement) {
    // Recuperamos el dato guardado
    const nombreUsuario = localStorage.getItem('usuarioLogueado');

    if (nombreUsuario) {
        // Generación de contenido dinámico
        greetingElement.textContent = `¡Hola, ${nombreUsuario}! 👋`;
    } else {
        // Si alguien intenta entrar a inicio.html sin loguearse
        window.location.href = 'login.html';
    }
}