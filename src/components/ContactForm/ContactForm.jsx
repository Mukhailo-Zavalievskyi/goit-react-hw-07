import { Formik, Form, Field } from 'formik';
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import css from './ContactForm.module.css';
import { addContact } from '../../redux/contactsOps';

export default function ContactForm() {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const dispatch = useDispatch();
  const handleAdd = (values, actions) => {
    const { name, number } = values;
    dispatch(addContact({ name, number }));
    actions.resetForm();
  };
  return (
    <Formik initialValues={{ name: '', number: '' }} onSubmit={handleAdd}>
      <Form className={css.form}>
        <div className={css.field}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field type="text" name="name" id={nameFieldId} />
        </div>
        <div className={css.field}>
          <label htmlFor={numberFieldId}>Number</label>
          <Field type="text" name="number" id={numberFieldId} />
        </div>
        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
