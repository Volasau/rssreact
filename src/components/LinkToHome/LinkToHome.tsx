import { Link } from 'react-router-dom';
import style from './LinkToHome.module.css';

function LinkToHome() {
  return (
    <>
      <div className={style.container}>
        <Link className={style.title} to="/">
          Home
        </Link>
      </div>
    </>
  );
}

export default LinkToHome;
