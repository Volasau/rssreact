import React, { SyntheticEvent, useRef, useState } from 'react';
import { initialState } from '../../data/country';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { addForm } from '../../redux/formSlice';
import style from './InputUn.module.css';
import { changeCoding } from '../../function/functions';
import { useNavigate } from 'react-router-dom';
import { schemaUn } from '../../yup/yup';

const UncontrolledForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const [validationErrors, setValidationErrors] =
    useState<yup.ValidationError[]>();

  const handleSubmit = async (event: SyntheticEvent) => {
    event?.preventDefault();

    const data = {
      firstName: nameRef.current?.value || '',
      age: parseInt(ageRef.current?.value || '0', 10),
      email: emailRef.current?.value || '',
      password: pasRef.current?.value || '',
      confirmPassword: conpasRef.current?.value || '',
      gender: genderRef.current?.value || '',
    };

    try {
      await schemaUn.validate(data, { abortEarly: false });

      setValidationErrors([] || null);
      const image64 =
        pictureRef.current && pictureRef.current.files
          ? await changeCoding(pictureRef.current.files[0])
          : '';
      dispatch(
        addForm({
          firstName: nameRef.current?.value || '',
          age: parseInt(ageRef.current?.value || '0', 10),
          email: emailRef.current?.value || '',
          password: pasRef.current?.value || '',
          confirmPassword: conpasRef.current?.value || '',
          gender: genderRef.current?.value || '',
          country: countryRef.current?.value || '',
          picture: image64,
        })
      );
      navigate('/');
    } catch (error) {
      if (yup.ValidationError.isError(error)) {
        console.error('Validation error:', error.inner);
        setValidationErrors(error.inner || []);
      } else {
        console.error('Other error:', error);
      }
    }
  };

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
            name="name"
            ref={nameRef}
            autoComplete="on"
          />
          <div className={style.place__error}>
            {validationErrors?.map((validationError, index) =>
              validationError.path === 'firstName' ? (
                <p
                  className={style.error}
                  key={index}
                >{`${validationError.message}`}</p>
              ) : null
            )}
          </div>

          <label htmlFor="age">Age</label>
          <br />
          <input
            className={style.input__fild}
            type="text"
            id="age"
            name="age"
            maxLength={3}
            ref={ageRef}
          />
          <div className={style.place__error}>
            {validationErrors?.map((validationError, index) =>
              validationError.path === 'age' ? (
                <p
                  className={style.error}
                  key={index}
                >{`${validationError.message}`}</p>
              ) : null
            )}
          </div>

          <label htmlFor="email">E-mail</label>
          <br />
          <input
            className={style.input__fild}
            type="text"
            id="email"
            name="email"
            ref={emailRef}
            autoComplete="on"
          />
          <div className={style.place__error}>
            {validationErrors?.map((validationError, index) =>
              validationError.path === 'email' ? (
                <p
                  className={style.error}
                  key={index}
                >{`${validationError.message}`}</p>
              ) : null
            )}
          </div>

          <label htmlFor="password">Password</label>
          <br />
          <input
            className={style.input__fild}
            type="password"
            id="password"
            name="password"
            ref={pasRef}
          />
          <div className={style.place__error}>
            {validationErrors?.map((validationError, index) =>
              validationError.path === 'password' ? (
                <p
                  className={style.error}
                  key={index}
                >{`${validationError.message}`}</p>
              ) : null
            )}
          </div>

          <label htmlFor="confirm-password">Confirm Password</label>
          <br />
          <input
            className={style.input__fild}
            type="password"
            id="confirm-password"
            name="confirmPassword"
            ref={conpasRef}
          />
          <div className={style.place__error}>
            {validationErrors?.map((validationError, index) =>
              validationError.path === 'confirmPassword' ? (
                <p
                  className={style.error}
                  key={index}
                >{`${validationError.message}`}</p>
              ) : null
            )}
          </div>

          <label htmlFor="gender">Gender</label>
          <br />
          <select id="gender" name="gender" ref={genderRef}>
            <option value="">Select Gender</option>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
          <div className={style.place__error}>
            {validationErrors?.map((validationError, index) =>
              validationError.path === 'gender' ? (
                <p
                  className={style.error}
                  key={index}
                >{`${validationError.message}`}</p>
              ) : null
            )}
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
            {initialState.countries.map((country, index) => (
              <option key={index} value={country} />
            ))}
          </datalist>
          <div className={style.place__error}>
            {validationErrors?.map((validationError, index) =>
              validationError.path === 'country' ? (
                <p
                  className={style.error}
                  key={index}
                >{`${validationError.message}`}</p>
              ) : null
            )}
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
};

export default UncontrolledForm;
