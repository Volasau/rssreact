import InputUn from '../../components/InputUn/InputUn';
import LinkToHome from '../../components/LinkToHome/LinkToHome';
import style from './FormUn.module.css';

function FormUN() {
  return (
    <>
      <div className={style.container}>
        <div className={style.title}>
          <h3 className={style.text}>Uncontrolled</h3>
        </div>
        <div className={style.wrapper}>
          <InputUn />
        </div>
        <LinkToHome />
      </div>
    </>
  );
}

export default FormUN;
