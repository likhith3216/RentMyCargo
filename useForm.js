import { useState } from 'react';

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });

    if (!value) {
      setErrors({
        ...errors,
        [name]: `${name} is required`,
      });
    } else {
      const newErrors = { ...errors };
      delete newErrors[name];
      setErrors(newErrors);
    }
  };

  const handleSubmit = (callback) => (e) => {
    e.preventDefault();
    callback();
  };

  return { values, errors, handleChange, handleSubmit };
};

export default useForm;