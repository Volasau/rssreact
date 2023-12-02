import React, { useRef } from 'react';
import style from './InputUn.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
// import { useNavigate } from 'react-router-dom';

function InputUn() {
  // const navigate = useNavigate();

  const [
    nameRef,
    ageRef,
    emailRef,
    pasRef,
    conpasRef,
    genderRef,
    countryRef,
    pictureRef,
    acceptRef,
  ] = [
    useRef<HTMLInputElement | null>(null),
    useRef<HTMLInputElement | null>(null),
    useRef<HTMLInputElement | null>(null),
    useRef<HTMLInputElement | null>(null),
    useRef<HTMLInputElement | null>(null),
    useRef<HTMLSelectElement | null>(null),
    useRef<HTMLInputElement | null>(null),
    useRef<HTMLInputElement | null>(null),
    useRef<HTMLInputElement | null>(null),
  ];
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const formData = {
      firstName: nameRef.current?.value || '',
      age: parseInt(ageRef.current?.value || '0', 10),
      email: emailRef.current?.value || '',
      password: pasRef.current?.value || '',
      confirmPassword: conpasRef.current?.value || '',
      gender: genderRef.current?.value || '',
      country: countryRef.current?.value || '',
      picture: pictureRef.current?.files ? [{}] : {},
      terms: acceptRef.current?.checked || false,
    };

    console.log(formData);
    // navigate('/');
    event.preventDefault();
  };

  const countries = useSelector(
    (state: RootState) => state.countries.countries
  );

  return (
    <>
      <div className={style.container}>
        <form className={style.form__un} onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <br />
          <input
            className={style.input__fild}
            type="text"
            id="name"
            ref={nameRef}
          />
          <div className={style.place__error}>
            <p className={style.error}>{}</p>
          </div>

          <label htmlFor="age">Age</label>
          <br />
          <input
            className={style.input__fild}
            id="age"
            maxLength={3}
            ref={ageRef}
          />
          <div className={style.place__error}>
            <p className={style.error}>{}</p>
          </div>

          <label htmlFor="email">Email</label>
          <br />
          <input className={style.input__fild} id="email" ref={emailRef} />
          <div className={style.place__error}>
            <p className={style.error}>{}</p>
          </div>

          <label htmlFor="pass">Password</label>
          <br />
          <input
            className={style.input__fild}
            id="pass"
            type="password"
            ref={pasRef}
          />
          <div className={style.place__error}>
            <p className={style.error}>{}</p>
          </div>

          <label htmlFor="conpass">Confirm Password</label>
          <br />
          <input
            className={style.input__fild}
            id="conpass"
            type="password"
            ref={conpasRef}
          />
          <div className={style.place__error}>
            <p className={style.error}></p>
          </div>

          <label htmlFor="gender">Gender</label>
          <br />
          <select id="gender" ref={genderRef}>
            <option value="">Select Gender</option>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
          <div className={style.place__error}>
            <p className={style.error}>{}</p>
          </div>

          <label htmlFor="country">Country</label>
          <br />
          <input
            className={style.input__fild}
            list="country-list"
            id="country"
            name="country"
            ref={countryRef}
            placeholder="Select Country"
          />
          <datalist id="country-list">
            {countries.map((country, index) => (
              <option key={index} value={country} />
            ))}
          </datalist>
          <div className={style.place__error}>
            <p className={style.error}>{}</p>
          </div>

          <label htmlFor="picture">Upload Picture</label>
          <br />
          <input
            className={style.input__picture}
            id="picture"
            type="file"
            accept=".png, .jpg"
            ref={pictureRef}
          />
          <div className={style.place__error}>
            <p className={style.error}>{}</p>
          </div>

          <label htmlFor="accept">Accept </label>
          <input id="accept" type="checkbox" ref={acceptRef} />
          <div className={style.place__error}>
            <p className={style.error}>{}</p>
          </div>

          <button className={style.btn__submit} type="submit">
            SUBMIT
          </button>
        </form>
      </div>
    </>
  );
}

export default InputUn;
