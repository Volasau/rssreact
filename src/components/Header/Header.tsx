import { Link } from 'react-router-dom';
import style from './Header.module.css';

function Header() {
  return (
    <>
      <nav className={style.container}>
        <ul className={style.navigation}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/formun">Uncontrolled</Link>
          </li>
          <li>
            <Link to="/formhook">Controlled</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
