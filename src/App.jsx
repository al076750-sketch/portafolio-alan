import { useEffect, useMemo, useRef, useState } from "react";
import { perfil, habilidades, proyectos } from "./data.js";

function Detalle({ proyecto, onClose }) {
  const ref = useRef(null);

  useEffect(() => {
    const d = ref.current;
    if (proyecto && d && !d.open) d.showModal();
    if (!proyecto && d?.open) d.close();
  }, [proyecto]);

  return (
    <dialog ref={ref} className="detalle" onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}>
      {proyecto && (
        <article>
          <div className="bloque" style={{ background: proyecto.color }} aria-hidden="true">
            <span>{proyecto.titulo}</span>
          </div>
          <div className="cuerpo">
            <p className="meta">{proyecto.materia} · {proyecto.mes} · {proyecto.rol}</p>
            <h3>{proyecto.titulo}</h3>
            <p>{proyecto.detalle}</p>
            <ul className="tags">
              {proyecto.tech.map((t) => <li key={t}>{t}</li>)}
            </ul>
            <div className="acciones">
              {proyecto.demo && <a className="btn" href={proyecto.demo} target="_blank" rel="noreferrer">Ver demo</a>}
              {proyecto.repo && <a className="btn sec" href={proyecto.repo} target="_blank" rel="noreferrer">Ver código</a>}
              <button className="btn sec" onClick={onClose}>Cerrar</button>
            </div>
          </div>
        </article>
      )}
    </dialog>
  );
}

export default function App() {
  const materias = useMemo(() => ["Todas", ...new Set(proyectos.map((p) => p.materia))], []);
  const [filtro, setFiltro] = useState("Todas");
  const [abierto, setAbierto] = useState(null);

  const lista = proyectos.filter((p) => filtro === "Todas" || p.materia === filtro);

  return (
    <>
      <header className="nav">
        <a href="#inicio" className="logo">{perfil.nombre}</a>
        <nav aria-label="Principal">
          <a href="#proyectos">Proyectos</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <main>
        <section id="inicio" className="hero">
          <p className="meta">{perfil.rol}</p>
          <h1>
            <span className="marca">{perfil.nombre}</span>
          </h1>
          <p className="frase">{perfil.frase}</p>
          <p className="bio">{perfil.bio}</p>
          <a className="btn" href="#proyectos">Ver trabajos del semestre</a>
        </section>

        <section id="proyectos">
          <h2>Trabajos del semestre</h2>
          <div className="filtros" role="group" aria-label="Filtrar por materia">
            {materias.map((m) => (
              <button key={m} aria-pressed={filtro === m}
                className={filtro === m ? "on" : ""} onClick={() => setFiltro(m)}>
                {m}
              </button>
            ))}
          </div>

          <ol className="lista">
            {lista.map((p) => (
              <li key={p.id}>
                <button className="fila" onClick={() => setAbierto(p)}>
                  <span className="mes">{p.mes}</span>
                  <span className="chip" style={{ background: p.color }} aria-hidden="true" />
                  <span className="info">
                    <strong>{p.titulo}</strong>
                    <span>{p.resumen}</span>
                    <small>{p.materia} · {p.tech.join(", ")}</small>
                  </span>
                  <span className="abrir">Detalles</span>
                </button>
              </li>
            ))}
          </ol>
          {lista.length === 0 && <p>No hay proyectos en esta materia todavía.</p>}
        </section>

        <section id="habilidades">
          <h2>Habilidades</h2>
          <div className="skills">
            {habilidades.map((g) => (
              <div key={g.grupo}>
                <h3>{g.grupo}</h3>
                <ul className="tags">{g.items.map((i) => <li key={i}>{i}</li>)}</ul>
              </div>
            ))}
          </div>
        </section>

        <section id="contacto" className="contacto">
          <h2>¿Trabajamos juntos?</h2>
          <p>Estoy buscando prácticas y oportunidades junior. Escríbeme y respondo en menos de dos días.</p>
          <div className="acciones">
            <a className="btn" href={`mailto:${perfil.email}`}>{perfil.email}</a>
            {perfil.github && <a className="btn sec" href={perfil.github} target="_blank" rel="noreferrer">GitHub</a>}
            {perfil.linkedin && <a className="btn sec" href={perfil.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
          </div>
        </section>
      </main>

      <footer>© {new Date().getFullYear()} {perfil.nombre}. Hecho con React.</footer>
      <Detalle proyecto={abierto} onClose={() => setAbierto(null)} />
    </>
  );
}
