import { useState } from 'react';

export function useForm(initialValues, submitCallback) {
    const [values, setValues] = useState(initialValues);


    const handleInputChange = (e) => {
        setValues(state => ( { ...state, [e.target.name]: e.target.value }))
    };



    const handleSubmit = async (e) => {
        e.preventDefault();

        await submitCallback(values);
        setValues(initialValues)
    }


    return {
        values,
        handleInputChange,
        handleSubmit,
        setValues,
    }
}