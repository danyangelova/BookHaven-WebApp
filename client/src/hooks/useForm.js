import { useState } from 'react';

export function useForm(initialValues, submitCallback) {
    const [values, setValues] = useState(initialValues);

    const handleInputChange = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //validacii
        submitCallback(values);
    }

    return {
        values,
        handleInputChange,
        handleSubmit
    };

}