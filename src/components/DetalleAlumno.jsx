import { useParams } from 'react-router-dom';

const DetalleAlumno = ({ alumnos }) => {
  const { id } = useParams();
  const alumno = alumnos.find(a => a.lu === id);

  if (!alumno) return <p>Alumno no encontrado</p>;

  return (
    <div>
      <h2>Detalle del Alumno</h2>
      <ul>
        <li><strong>LU:</strong> {alumno.lu}</li>
        <li><strong>Nombre:</strong> {alumno.nombre}</li>
        <li><strong>Apellido:</strong> {alumno.apellido}</li>
        <li><strong>Curso:</strong> {alumno.curso}</li>
        <li><strong>Email:</strong> {alumno.email}</li>
        <li><strong>Domicilio:</strong> {alumno.domicilio}</li>
        <li><strong>Teléfono:</strong> {alumno.telefono}</li>
      </ul>
    </div>
  );
};

export default DetalleAlumno;