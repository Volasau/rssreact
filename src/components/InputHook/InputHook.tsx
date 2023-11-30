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
    age: yup.number().positive().integer().required(),
    email: yup
      .string()
      .email('Invalid email format')
      .required('Email is required'),
    password: yup
      .string()
      .required('Password is required')
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])/,
        'Password must contain at least 1 digit, 1 lowercase letter, 1 uppercase letter, and 1 special character'
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
        'Only PNG and JPEG file types are allowed',
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
        if (!files || !files.length) return false;

        const file = files[0];
        const maxSizeInBytes = 5 * 1024 * 1024; // 5MB
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
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormData) => {
    console.log(data);
    // Перенаправление на главную страницу
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input {...register('firstName')} />
      <p className={style.error}>{errors.firstName?.message}</p>

      <label htmlFor="age">Age</label>
      <input id="age" {...register('age')} />
      <p className={style.error}>{errors.age?.message}</p>

      <label>Email</label>
      <input {...register('email')} />
      <p className={style.error}>{errors.email?.message}</p>

      <label>Password</label>
      <input {...register('password')} />
      <p className={style.error}>{errors.password?.message}</p>

      <label>Confirm Password</label>
      <input {...register('confirmPassword')} />
      <p className={style.error}>{errors.confirmPassword?.message}</p>

      <label>Gender</label>
      <select {...register('gender')}>
        <option value="">Select Gender</option>
        <option value="male">male</option>
        <option value="female">female</option>
      </select>
      <p className={style.error}>{errors.gender?.message}</p>

      <label>Country</label>
      <select {...register('country')}>
        <option value="">Select Country</option>
        {countries.map((country, index) => (
          <option key={index} value={country.Country}>
            {country.Country}
          </option>
        ))}
      </select>
      <p className={style.error}>{errors.country?.message}</p>

      <label htmlFor="picture">Upload Picture</label>
      <input
        id="picture"
        type="file"
        accept=".png, .jpeg"
        {...register('picture')}
      />
      <p className={style.error}>{errors.picture?.message}</p>

      <label>Accept </label>
      <input type="checkbox" {...register('terms')} />
      <p className={style.error}>{errors.terms?.message}</p>

      <button type="submit">SUBMIT</button>
    </form>
  );
}

export default InputHook;
