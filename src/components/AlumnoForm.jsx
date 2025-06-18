import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const AlumnoForm = ({ alumnos = [], onSave }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const alumnoExistente = alumnos.find(a => a.lu === id);

  const [formData, setFormData] = useState({
    lu: '', nombre: '', apellido: '', curso: '',
    email: '', domicilio: '', telefono: ''
  });

  useEffect(() => {
    if (alumnoExistente) {
      setFormData(alumnoExistente);
    }
  }, [alumnoExistente]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.lu || !formData.nombre || !formData.apellido) {
      alert('Completa los campos obligatorios.');
      return;
    }
    onSave(formData);
    navigate('/alumnos');
  };

  return (
    <div>
      <h2>{alumnoExistente ? 'Editar Alumno' : 'Agregar Alumno'}</h2>
      <form onSubmit={handleSubmit}>
        <input name="lu" placeholder="LU" value={formData.lu} onChange={handleChange} required disabled={!!alumnoExistente} />
        <input name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} required />
        <input name="apellido" placeholder="Apellido" value={formData.apellido} onChange={handleChange} required />
        <input name="curso" placeholder="Curso" value={formData.curso} onChange={handleChange} />
        <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <input name="domicilio" placeholder="Domicilio" value={formData.domicilio} onChange={handleChange} />
        <input name="telefono" placeholder="Teléfono" value={formData.telefono} onChange={handleChange} />
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default AlumnoForm;