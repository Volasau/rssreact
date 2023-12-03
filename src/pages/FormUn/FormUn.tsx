import InputUn from '../../components/InputUn/InputUn';
import LinkToHome from '../../components/LinkToHome/LinkToHome';
import style from './FormUn.module.css';

function FormUN() {
  return (
    <>
      <div className={style.container}>
        <LinkToHome />
        <div className={style.title}>
          <h3 className={style.text}>Uncontrolled</h3>
        </div>
        <div className={style.wrapper}>
          <InputUn />
        </div>
      </div>
    </>
  );
}

export default FormUN;
