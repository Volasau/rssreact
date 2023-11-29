import Header from '../../components/Header/Header';
import style from './Home.module.css';

function Home() {
  return (
    <>
      <div className={style.container}>
        <div className={style.header}>
          <Header />
        </div>
        <div className={style.title}>
          <h3 className={style.text}>Forms HOME</h3>
        </div>
      </div>
    </>
  );
}

export default Home;
