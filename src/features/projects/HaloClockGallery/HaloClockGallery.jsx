import CoverflowGallery from "../CoverflowGallery/CoverflowGallery";
import "./HaloClockGallery.css";

const images = [
  ["inicio.png", "Inicio"],
  ["mis perros.png", "Mis Perros"],
  ["historial.png", "Historial"],
  ["estadisticas.png", "Estadísticas"],
  ["mi familia.png", "Mi Familia"],
  ["notificaciones.png", "Notificaciones"],
  ["configuracion.png", "Configuración"],
  ["mi cuenta.png", "Mi Cuenta"],
  ["inicio sesion.png", "Inicio de sesión"],
];

export default function HaloClockGallery({ onClose }) {
  return <CoverflowGallery title="HaloClock" folder="haloclock" images={images} onClose={onClose} />;
}
