import css from './ContactForm.module.css';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from 'yup';
import { nanoid } from 'nanoid';


const UserSchema = Yup.object().shape({
    name: Yup.string()
        .trim()
        .min(3, "Min 3 chars!!!")
        .max(50, "Max 50 chars!!!")
        .required("Is required!!!"),
    number: Yup.string()
        .trim()
        .min(3, "Min 3 chars!!!")
        .max(50, "Max 50 chars!!!")
        .required("Is required!!!"),
    
});
export default function ContactForm({onAdd}) {
    const handleSubmit = (values, actions) => {
        onAdd(
            {
            id: nanoid(), 
            name: values.name,
            number: values.number});
        console.log('handleSubmit', values)
        actions.resetForm();
}
    return (
        <Formik initialValues={{
            name: '',
            number:''
        }}
            validationSchema={UserSchema}
            onSubmit={handleSubmit}>
            <Form className={css.form}>
                <div>
                    <label htmlFor="name">Name</label>
                    <Field name="name" />
                    <ErrorMessage name="name" component="div" />
                </div>
                <div>
                    <label htmlFor="number">Number</label>
                    <Field name="number" />
                    <ErrorMessage name="number" component="div" />
                </div>
                <button type="submit">Add contact</button>
        </Form>    
    </Formik>
)
    
}