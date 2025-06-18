import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import AcercaDe from './pages/AcercaDe';
import ListaAlumnos from './components/ListaAlumnos';
import DetalleAlumno from './components/DetalleAlumno';
import AlumnoForm from './components/AlumnoForm';

function App() {
  const [alumnos, setAlumnos] = useState([]);

  const agregarAlumno = (nuevo) => {
    setAlumnos([...alumnos, nuevo]);
  };

  const editarAlumno = (editado) => {
    setAlumnos(alumnos.map(a => a.lu === editado.lu ? editado : a));
  };

  const eliminarAlumno = (lu) => {
    setAlumnos(alumnos.filter(a => a.lu !== lu));
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acerca" element={<AcercaDe />} />
        <Route path="/alumnos" element={<ListaAlumnos alumnos={alumnos} onDelete={eliminarAlumno} />} />
        <Route path="/alumnos/nuevo" element={<AlumnoForm onSave={agregarAlumno} />} />
        <Route path="/alumnos/:id" element={<DetalleAlumno alumnos={alumnos} />} />
        <Route path="/alumnos/:id/editar" element={<AlumnoForm alumnos={alumnos} onSave={editarAlumno} />} />
      </Routes>
    </Router>
  );
}

export default App;
