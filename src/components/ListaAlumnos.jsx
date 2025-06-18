import { useNavigate } from 'react-router-dom';

const ListaAlumnos = ({ alumnos, onDelete }) => {
  const navigate = useNavigate();

  const handleEliminar = (lu) => {
    if (confirm('¿Estás segura de eliminar este alumno?')) {
      onDelete(lu);
    }
  };

  return (
    <div>
      <h2>Lista de Alumnos</h2>
      {alumnos.length === 0 ? (
        <p>No hay alumnos cargados.</p>
      ) : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>LU</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Curso</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {alumnos.map((alumno) => (
              <tr key={alumno.lu}>
                <td>{alumno.lu}</td>
                <td>{alumno.nombre}</td>
                <td>{alumno.apellido}</td>
                <td>{alumno.curso}</td>
                <td>
                  <button onClick={() => navigate(`/alumnos/${alumno.lu}`)}>Ver</button>
                  <button onClick={() => navigate(`/alumnos/${alumno.lu}/editar`)}>Editar</button>
                  <button onClick={() => handleEliminar(alumno.lu)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ListaAlumnos;