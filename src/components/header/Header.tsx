import './header.css';
import Search from '../form/Form';
import Logo from '../../../public/logo.png';

function Header() {
  return (
    <div className="header">
      <img src={Logo} className="header__logo" alt="Logo" />
      <Search />
    </div>
  );
}

export default Header;
