import style from './InputHook.module.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { schema, FormDatas } from '../../yup/yup';
import { useDispatch } from 'react-redux';
import { addForm } from '../../redux/formSlice';
import { Inputes } from '../../type/types';
import { changeCoding } from '../../function/functions';

function InputHook() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm<FormDatas>({
    resolver: yupResolver(schema),
    mode: 'all',
  });
  const onSubmit = async (data: Inputes) => {
    const { firstName, age, email, password, gender, picture, country } = data;
    const image64 = picture ? await changeCoding(picture[0]) : '';

    dispatch(
      addForm({
        firstName,
        age,
        email,
        password,
        gender,
        picture: image64,
        country,
      })
    );
    navigate('/');
  };

  const counries = useSelector((state: RootState) => state.countries.countries);

  const password = watch('password', '');
  const getPasswordStrength = (password: string) => {
    const hasNumber = /\d/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+]/.test(password);

    const requirementsMetCount = [
      hasNumber,
      hasUppercase,
      hasLowercase,
      hasSpecialChar,
    ].filter(Boolean).length;

    if (requirementsMetCount === 1) {
      return 'very_weak';
    } else if (requirementsMetCount === 2) {
      return 'weak';
    } else if (requirementsMetCount === 3) {
      return 'medium';
    } else if (requirementsMetCount === 4) {
      return 'strong';
    } else {
      return '';
    }
  };

  return (
    <div className={style.container}>
      <form className={style.form__hook} onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name</label>
        <br />
        <input
          className={style.input__fild}
          id="name"
          {...register('firstName')}
        />
        <div className={style.place__error}>
          <p className={style.error}>{errors.firstName?.message}</p>
        </div>

        <label htmlFor="age">Age</label>
        <br />
        <input
          className={style.input__fild}
          id="age"
          maxLength={3}
          {...register('age')}
        />
        <div className={style.place__error}>
          <p className={style.error}>{errors.age?.message}</p>
        </div>

        <label htmlFor="email">Email</label>
        <br />
        <input
          className={style.input__fild}
          id="email"
          {...register('email')}
        />
        <div className={style.place__error}>
          <p className={style.error}>{errors.email?.message}</p>
        </div>

        <label htmlFor="pass">Password</label>
        <br />
        <input
          className={style.input__fild}
          id="pass"
          type="password"
          {...register('password')}
        />
        <div className={style.place__error}>
          <p className={style.error}>{errors.password?.message}</p>
        </div>

        <div className={style.passwordStrength}>
          <p>
            strength password:
            <span className={style[getPasswordStrength(password)]}>
              {getPasswordStrength(password)}
            </span>
          </p>
        </div>

        <label htmlFor="conpass">Confirm Password</label>
        <br />
        <input
          className={style.input__fild}
          id="conpass"
          type="password"
          {...register('confirmPassword')}
        />
        <div className={style.place__error}>
          <p className={style.error}>{errors.confirmPassword?.message}</p>
        </div>

        <label htmlFor="gender">Gender</label>
        <br />
        <select id="gender" {...register('gender')}>
          <option value="">Select Gender</option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <div className={style.place__error}>
          <p className={style.error}>{errors.gender?.message}</p>
        </div>

        <label htmlFor="country">Country</label>
        <br />
        <input
          className={style.input__fild}
          list="country-list"
          id="country"
          placeholder="Select Country"
          {...register('country')}
        />
        <datalist id="country-list">
          {counries.map((country, index) => (
            <option key={index} value={country} />
          ))}
        </datalist>
        <div className={style.place__error}>
          <p className={style.error}>{errors.country?.message}</p>
        </div>

        <label htmlFor="picture">Upload Picture</label>
        <br />
        <input
          className={style.input__picture}
          id="picture"
          type="file"
          accept=".png, .jpg"
          {...register('picture')}
        />
        <div className={style.place__error}>
          <p className={style.error}>{errors.picture?.message}</p>
        </div>

        <label htmlFor="accept">Accept </label>
        <input id="accept" type="checkbox" {...register('terms')} />
        <div className={style.place__error}>
          <p className={style.error}>{errors.terms?.message}</p>
        </div>

        <button className={style.btn__submit} type="submit" disabled={!isValid}>
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default InputHook;
