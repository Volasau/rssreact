import { Info } from '../Info/Info';
import style from './InfoList.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

function InfoList() {
  const { formInfo } = useSelector((state: RootState) => state.form);
  const lastFormIndex = formInfo.length - 1;

  return (
    <>
      <div className={style.container}>
        {formInfo.map((tile, index) => (
          <Info
            key={`tile-${index}`}
            data={tile}
            className={index === lastFormIndex ? style.active : style.unactive}
          />
        ))}
      </div>
    </>
  );
}

export default InfoList;
