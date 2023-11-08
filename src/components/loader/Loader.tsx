import Loaderimg from '../../../public/loader.png';
import './loader.css';

function Loader() {
  return (
    <div className="body__loader">
      <div className="loader">
        <img src={Loaderimg} alt="Loader" className="loader__img" />
      </div>
    </div>
  );
}

export default Loader;
