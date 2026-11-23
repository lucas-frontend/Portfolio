import { useState } from "react";
import MonasterGallery from "../MonasterGallery/MonasterGallery";
import MonasterVideo from "../MonasterVideo/MonasterVideo";
import HaloClockGallery from "../HaloClockGallery/HaloClockGallery";
import HaloClockVideo from "../HaloClockVideo/HaloClockVideo";

function MonasterPreview() {
  return (
    <div className="preview-window">
      <img
        src="/projects/monaster/portada.webp"
        alt="Cronograma real de Monaster"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          display: "block",
        }}
      />
    </div>
  );
}

function ProjectCard({
  variant,
  index,
  onToggle,
  expanded,
  ArrowIcon,
  GithubIcon,
  haloclockUrl,
}) {
  const isMonaster = variant === "monaster";
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  return (
    <article
      className={`project-card ${isMonaster ? "project-monaster" : "project-haloclock"}`}
    >
      <div className="project-visual">
        {isMonaster ? (
          <button
            type="button"
            className="monaster-gallery-trigger"
            onClick={() => setGalleryOpen(true)}
            aria-label="Abrir galería de Monaster"
          >
            <MonasterPreview />
          </button>
        ) : (
          <button
            type="button"
            className="monaster-gallery-trigger"
            onClick={() => setGalleryOpen(true)}
            aria-label="Abrir galería de HaloClock"
          >
            <div className="preview-window">
              <img
                src="/projects/haloclock/inicio.png"
                alt="Pantalla de inicio real de HaloClock"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </div>
          </button>
        )}
      </div>
      {isMonaster && galleryOpen && (
        <MonasterGallery onClose={() => setGalleryOpen(false)} />
      )}
      {isMonaster && videoOpen && (
        <MonasterVideo onClose={() => setVideoOpen(false)} />
      )}
      {!isMonaster && galleryOpen && (
        <HaloClockGallery onClose={() => setGalleryOpen(false)} />
      )}
      {!isMonaster && videoOpen && (
        <HaloClockVideo onClose={() => setVideoOpen(false)} />
      )}
      <div className="project-info">
        <div className="project-topline">
          <span className="project-number">0{index}</span>
          <span className="project-type">
            {isMonaster
              ? "SOFTWARE COMERCIAL · DESKTOP"
              : "PROYECTO FINAL · WEB FULL STACK"}
          </span>
        </div>
        <div className="project-heading-row">
          <h3>{isMonaster ? "Monaster" : "Haloclock"}</h3>
          <span className={`project-status ${isMonaster ? "sold" : "public"}`}>
            {isMonaster ? "Entregado a cliente" : "Código público"}
          </span>
        </div>
        <p className="project-description">
          {isMonaster
            ? "Software de gestión automatizada de turnos para recepción hotelera."
            : "Aplicación familiar para coordinar los paseos y cuidados de los perros."}
        </p>
        <div className="project-tags stack-tags">
          {(isMonaster
            ? ["React", "TypeScript", "Tauri", "Rust", "SQLite"]
            : ["React", "Node.js", "Express", "MongoDB", "OAuth"]
          ).map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <div className="project-actions">
          <button
            className="text-link"
            type="button"
            onClick={onToggle}
            aria-expanded={expanded}
            aria-controls={`${variant}-details`}
          >
            {expanded ? "Cerrar" : "Detalles"} <ArrowIcon diagonal size={17} />
          </button>
          <button
            type="button"
            className="text-link"
            onClick={() => setVideoOpen(true)}
          >
            ▶ Ver demo
          </button>
          {!isMonaster && (
            <a
              href={haloclockUrl}
              target="_blank"
              rel="noreferrer"
              className="text-link link-muted"
            >
              <GithubIcon size={18} /> Ver GitHub
            </a>
          )}
          {isMonaster && (
            <span className="privacy-note">
              Código privado · Proyecto para cliente
            </span>
          )}
        </div>
        {expanded && (
          <div className="case-details" id={`${variant}-details`}>
            {isMonaster ? (
              <>
                <strong>El proyecto</strong>
                <p>
                  Software de escritorio desarrollado para un hotel que
                  automatiza la planificación mensual de recepción.
                </p>
                <strong>El desafío</strong>
                <p>
                  Organizar los turnos considerando empleados, descansos,
                  vacaciones, ausencias y reglas laborales, respetando las
                  prioridades configuradas y equilibrando la carga de trabajo.
                </p>
                <strong>La solución</strong>
                <p>
                  Aplicación desarrollada con React, Tauri, Rust y SQLite
                  que genera cronogramas, permite gestionar empleados
                  y exportar horarios. Funciona sin conexión e incorpora
                  un código de activación vinculado al equipo para
                  impedir copias no autorizadas.
                </p>
                <p className="case-note">
                  Las capturas no muestran datos reales del hotel
                  para proteger su privacidad.
                </p>
              </>
            ) : (
              <>
                <strong>El proyecto</strong>
                <p>
                  Aplicación web para coordinar paseos de perros en familia, con
                  perfiles, invitaciones, seguimiento y estadísticas.
                </p>
                <strong>El desafío</strong>
                <p>
                  Coordinar a varios miembros y registrar la actividad de
                  diferentes perros en una misma cuenta familiar.
                </p>
                <strong>La solución</strong>
                <p>
                  Interfaz responsive, API con Express, MongoDB, inicio de
                  sesión con Google y seguimiento de paseos.
                </p>
              </>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;


