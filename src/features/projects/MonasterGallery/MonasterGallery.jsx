import CoverflowGallery from "../CoverflowGallery/CoverflowGallery";
import "./MonasterGallery.css";

const images = [
  ["cronograma.webp", "Cronograma"],
  ["pendientes.webp", "Pendientes"],
  ["solicitudes.webp", "Solicitudes"],
  ["empleados.webp", "Empleados"],
  ["estadisticas.webp", "Estadísticas"],
  ["configuracion.webp", "Configuración"],
  ["ingrese_contraseña.webp", "Inicio de sesión"],
  ["cambiar_contraseña.webp", "Cambiar contraseña"],
];

export default function MonasterGallery({ onClose }) {
  return <CoverflowGallery title="Monaster" folder="monaster" images={images} onClose={onClose} />;
}
