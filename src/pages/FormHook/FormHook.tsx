import InputHook from '../../components/InputHook/InputHook';
import LinkToHome from '../../components/LinkToHome/LinkToHome';
import style from './FormHook.module.css';

function FormHook() {
  return (
    <>
      <div className={style.container}>
        <LinkToHome />
        <div className={style.title}>
          <h3 className={style.text}>Controlled</h3>
        </div>
        <div className={style.wrapper}>
          <InputHook />
        </div>
      </div>
    </>
  );
}

export default FormHook;
