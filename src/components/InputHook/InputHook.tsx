import React from 'react';
import style from './InputHook.module.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { countries } from '../../data/country';
import { useNavigate } from 'react-router-dom';

const schema = yup
  .object({
    firstName: yup
      .string()
      .required('Name is required')
      .matches(/^[A-Z]/, 'Should start with a capital letter'),
    age: yup.number().positive().integer().required('Age is required'),
    email: yup
      .string()
      .email('Invalid email format')
      .matches(/^.+@.+\..+$/, 'Invalid email format')
      .required('Email is required'),
    password: yup
      .string()
      .required('Password is required')
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])/,
        'must contain min 1 digit, 1 lowercase letter, 1 uppercase letter, and 1 special character'
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords must match')
      .required('Confirm Password is required'),
    terms: yup
      .boolean()
      .oneOf([true], 'Accept terms and conditions is required'),
    country: yup.string().required('Country is required'),
    gender: yup.string().required('Gender is required '),
    picture: yup
      .mixed()
      .test(
        'fileType',
        'File not selected or not in PNG JPEG format',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (files: any) => {
          if (!files || !files.length) return false;

          const file = files[0];
          const allowedExtensions = ['png', 'jpeg'];
          const fileExtension = file.name.split('.').pop()?.toLowerCase();

          return fileExtension && allowedExtensions.includes(fileExtension);
        }
      )
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .test('fileSize', 'File size exceeds 5MB limit', (files: any) => {
        if (!files || !files.length) return true;

        const file = files[0];
        const maxSizeInBytes = 5 * 1024 * 1024;
        return file.size <= maxSizeInBytes;
      })
      .required('Picture is required'),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

function InputHook() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: 'all',
  });
  const onSubmit = (data: FormData) => {
    console.log(data);
    navigate('/');
  };

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
        <select id="country" {...register('country')}>
          <option value="">Select Country</option>
          {countries.map((country, index) => (
            <option key={index} value={country.Country}>
              {country.Country}
            </option>
          ))}
        </select>
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

        <button className={style.btn__submit} type="submit">
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default InputHook;
