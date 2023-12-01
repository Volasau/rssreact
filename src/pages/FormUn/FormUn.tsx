import LinkToHome from '../../components/LinkToHome/LinkToHome';
import style from './FormUN.module.css';

function FormUN() {
  return (
    <>
      <div className={style.container}>
        <div className={style.title}>
          <h3 className={style.text}>Uncontrolled</h3>
        </div>
        <LinkToHome />
      </div>
    </>
  );
}

export default FormUN;
