import Header from '../../components/Header/Header';
import InfoList from '../../components/InfoList/InfoList';
import style from './Home.module.css';

function Home() {
  return (
    <>
      <div className={style.container}>
        <div className={style.header}>
          <Header />
        </div>
        <div className={style.title}>
          <h3 className={style.text}>HOME</h3>
        </div>
        <InfoList />
      </div>
    </>
  );
}

export default Home;
