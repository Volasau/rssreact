import LinkToHome from '../../components/LinkToHome/LinkToHome';
import style from './Error.module.css';

function Error() {
  return (
    <>
      <div className={style.title}>
        <div className={style.container}>
          <h3 className={style.text}>404 Error</h3>
          <h2 className={style.text}>Page not found</h2>
          <LinkToHome />
        </div>
      </div>
    </>
  );
}

export default Error;
