import React from 'react'
import {Field,ErrorMessage,useField} from 'formik'
import {FormField} from 'semantic-ui-react'

import Error from './error'

function Input({name,label,...rest}) {
    const [,meta] = useField(name);

    return (
        <FormField error={meta.touched && meta.error}>
            <label htmlFor={name}>{label}</label>
            <Field id={name} name={name} {...rest}/>
            <ErrorMessage name={name} component={Error}/>
        </FormField>
    )
}

export default Input
