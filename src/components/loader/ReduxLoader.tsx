import Loaderimg from '../../../public/loader.png';
import './reduxloader.css';

function ReduxLoader() {
  return (
    <div className="redux__lodaer">
      <img src={Loaderimg} alt="Loader" className="loader__img" />
    </div>
  );
}

export default ReduxLoader;
