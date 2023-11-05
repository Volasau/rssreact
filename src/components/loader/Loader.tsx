import Loaderimg from '../../../public/loader.png';

function Loader() {
  return (
    <div className="loader">
      <img src={Loaderimg} alt="Loader" className="loader__img" />
    </div>
  );
}

export default Loader;
