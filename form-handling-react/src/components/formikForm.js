import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const initialValues = {
    name: '',
    email: '',
};

const validate = values => {
    const errors = {};
    if (!values.name) {
        errors.name = 'Required';
    }
    if (!values.email) {
        errors.email = 'Required';
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address';
    }
    return errors;
};

const onSubmit = (values, { setSubmitting, resetForm }) => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
    resetForm();
};

function FormikForm() {
    return (
        <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={onSubmit}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <Field type="text" name="name" id="name" />
                        <ErrorMessage name="name" component="div" style={{ color: 'red' }} />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <Field type="email" name="email" id="email" />
                        <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
                    </div>
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    );
}

export default FormikForm;