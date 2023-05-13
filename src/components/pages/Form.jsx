import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object({
    firstName: yup
      .string()
      .min(3, 'Your first name should be at least 3 characters.')
      .max(50, 'Your first name cannot be longer than 10 characters.')
      .required('Please enter your first name'),
    email: yup
    .string()
    .email()
    .required('Please enter a valid email address'),
    subject: yup
    .string()
    .min(3, 'Your subject should be at least 3 characters.')
    .max(100, 'Your subject cannot be longer than 100 characters.')
    .required('Please enter a subject'),
    body: yup
    .string()
    .min(3, 'Your message should be at least 3 characters.')
    .max(1000, 'Your message cannot be longer than 1000 characters.')
    .required('Please enter a message'),
  })
  .required();

export default function Form() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
      });
    
      function onSubmit(data) {
        console.log(data);
      }

      return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('firstName')} />
             <p>{errors.firstName?.message}</p>
             <input {...register('email')} />
             <p>{errors.email?.message}</p>
             <input {...register('subject')} />
             <p>{errors.subject?.message}</p>
             <input {...register('body')} />
             <p>{errors.body?.message}</p>
            <input type="submit" />
        </form>
      )
}