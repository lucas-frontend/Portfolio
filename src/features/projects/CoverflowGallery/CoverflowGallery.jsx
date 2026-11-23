import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import "./CoverflowGallery.css";

export default function CoverflowGallery({ title, folder, images, onClose }) {
  const [current, setCurrent] = useState(0);
  const [zoom, setZoom] = useState(false);
  const closeRef = useRef(null);
  const total = images.length;

  const move = step =>
    setCurrent(i => (i + step + total) % total);

  const url = file =>
    `/projects/${folder}/${encodeURIComponent(file)}`;

  useEffect(() => {
    const oldOverflow = document.body.style.overflow;
    const oldFocus = document.activeElement;

    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = e => {
      if (e.key === "Escape") {
        if (zoom) setZoom(false);
        else onClose();
        return;
      }
      if (zoom) return;

      if (e.key === "ArrowRight") {
        e.preventDefault();
        move(1);
      }

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        move(-1);
      }
    };

    document.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = oldOverflow;
      document.removeEventListener("keydown", onKey);
      oldFocus?.focus?.();
    };
  }, [onClose, total, zoom]);

  const positionOf = index => {
    const distance = (index - current + total) % total;
    return distance > total / 2 ? distance - total : distance;
  };

  return createPortal(
    <div
      className="cf-backdrop"
      onMouseDown={e => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <section
        className="cf-panel"
        role="dialog"
        aria-modal="true"
        aria-label={`Galería de ${title}`}
      >
        <header className="cf-header">
          <strong>{title} <span>· Galería</span></strong>
          <button ref={closeRef} onClick={onClose} aria-label="Cerrar">×</button>
        </header>

        <div className="cf-stage">
          {images.map(([file, label], index) => {
            const position = positionOf(index);
            const visible = Math.abs(position) <= 2;

            return (
              <div
                key={file}
                className="cf-card"
                role={position === 0 ? "button" : undefined}
                tabIndex={position === 0 ? 0 : -1}
                onClick={() => {
                  if (position === 0) setZoom(true);
                }}
                onKeyDown={e => {
                  if (position === 0 && (e.key === "Enter" || e.key === " ")) {
                    e.preventDefault();
                    setZoom(true);
                  }
                }}
                data-pos={visible ? position : "hidden"}
                aria-hidden={position !== 0}
                style={{ zIndex: 10 - Math.abs(position) }}
              >
                <img
                  src={url(file)}
                  alt={position === 0 ? `${title}: ${label}` : ""}
                  draggable="false"
                />
              </div>
            );
          })}

          <button
            className="cf-arrow cf-prev"
            onClick={() => move(-1)}
            aria-label="Imagen anterior"
          >
            ‹
          </button>

          <button
            className="cf-arrow cf-next"
            onClick={() => move(1)}
            aria-label="Imagen siguiente"
          >
            ›
          </button>
        </div>

        <nav className="cf-dots" aria-label="Seleccionar imagen">
          {images.map(([file, label], index) => (
            <button
              key={file}
              onClick={() => setCurrent(index)}
              aria-label={`Ver ${label}`}
              aria-current={index === current ? "true" : undefined}
            />
          ))}
        </nav>

        <footer className="cf-footer">
          <div>
            <strong>{images[current][1]}</strong>
            <span>{current + 1} / {total}</span>
          </div>

          
        </footer>
      </section>
      {zoom && (
        <div
          className="cf-fullscreen"
          role="dialog"
          aria-modal="true"
          aria-label={`Imagen ampliada: ${images[current][1]}`}
          onMouseDown={e => {
            if (e.target === e.currentTarget) setZoom(false);
          }}
        >
          <button
            type="button"
            className="cf-fullscreen-close"
            onClick={() => setZoom(false)}
            aria-label="Cerrar imagen ampliada"
            autoFocus
          >
            ×
          </button>
          <img
            src={url(images[current][0])}
            alt={`${title}: ${images[current][1]}`}
            draggable="false"
          />
        </div>
      )}
    </div>,
    document.body
  );
}


