import InputHook from '../../components/InputHook/InputHook';
import LinkToHome from '../../components/LinkToHome/LinkToHome';
import style from './FormHook.module.css';

function FormHook() {
  return (
    <>
      <div className={style.container}>
        <div className={style.title}>
          <h3 className={style.text}>FormHook</h3>
        </div>
        <div>
          <InputHook />
        </div>
        <LinkToHome />
      </div>
    </>
  );
}

export default FormHook;
