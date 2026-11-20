// ✏️ EDITA ESTE ARCHIVO: todo el contenido del portafolio vive aquí.

export const perfil = {
  nombre: "Alan Campos Suárez",
  rol: "Estudiante de Ingeniería en Tecnología de Software",
  frase: "Diseño interfaces con estética y las programo para que funcionen.",
  bio: "Me gusta unir la programación con el diseño visual. Este portafolio reúne los trabajos que realicé durante el semestre: un videojuego en pixel art, una interfaz para una app de música y una Pokédex funcional.",
  email: "al076750@uacam.mx",
  github: "https://github.com/",
  linkedin: "", // vacío = no se muestra el botón
};

export const habilidades = [
  { grupo: "Diseño", items: ["Diseño visual", "Pixel art", "Estética", "Creatividad"] },
  { grupo: "Programación", items: ["Java", "JavaScript", "HTML", "CSS"] },
  { grupo: "Herramientas", items: ["Greenfoot", "Trabajo en equipo"] },
];

// color: tono del bloque visual de cada proyecto
export const proyectos = [
  {
    id: "scarlett",
    titulo: "Scarlett Kiss",
    materia: "Programación Orientada a Objetos",
    mes: "Agosto 2025",
    rol: "Trabajo en equipo",
    resumen: "Minijuego con varias dinámicas, hecho en Java.",
    detalle:
      "Videojuego con varios escenarios y dinámicas de juego. Todos los escenarios, personajes y objetos fueron dibujados en pixel art. Aplicamos programación orientada a objetos: clases, herencia y objetos que interactúan entre sí.",
    tech: ["Java", "Greenfoot", "Pixel art"],
    color: "#D6336C",
    demo: "",
    repo: "",
  },
  {
    id: "melodia",
    titulo: "Melodía",
    materia: "Diseño Web",
    mes: "Noviembre 2026",
    rol: "Proyecto individual",
    resumen: "Interfaz gráfica para una app de música sobre Karol G.",
    detalle:
      "Diseñé desde cero la interfaz de una aplicación de música dedicada a Karol G, cuidando colores, tipografía y distribución de los elementos.",
    tech: ["HTML", "Java"],
    color: "#8A3FFC",
    demo: "",
    repo: "",
  },
  {
    id: "pokedex",
    titulo: "Pokédex",
    materia: "Diseño Web",
    mes: "Noviembre 2026",
    rol: "Proyecto individual",
    resumen: "Buscador de Pokémon con información y cadena evolutiva.",
    detalle:
      "Página web que permite buscar cualquier Pokémon y muestra su información junto con su cadena evolutiva. Practiqué peticiones a una API, manejo de datos con JavaScript y diseño de la interfaz.",
    tech: ["JavaScript", "HTML", "CSS"],
    color: "#E0701B",
    demo: "",
    repo: "",
  },
];
