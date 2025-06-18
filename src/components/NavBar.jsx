import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav style={{ padding: '1rem', backgroundColor: '#eee' }}>
    <Link to="/">Inicio</Link> |{' '}
    <Link to="/alumnos">Lista de Alumnos</Link> |{' '}
    <Link to="/alumnos/nuevo">Nuevo Alumno</Link> |{' '}
    <Link to="/acerca">Acerca de</Link>
  </nav>
);

export default NavBar;