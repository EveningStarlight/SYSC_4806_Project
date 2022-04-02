import { object, ref, string } from 'yup';
import {
    array as arrayProp,
    object as objectProp,
    string as stringProp,
} from 'prop-types';

const getSchema = (options) => {
    return {
        email: string()
            .required('Email cannot be empty')
            .email('Invalid email'),
        matchEmail: string()
            .required('Email cannot be empty')
            .matches(options?.matches, 'User email does not match'),
        displayName: string().required('Display name cannot be empty'),
        password: string().required('Password cannot be empty'),
        passwordNew: string()
            .required('Password cannot be empty')
            .min(12, 'Password must be at least 12 characters long'),
        confirmPassword: string()
            .required('Password confirmation cannot be empty')
            .oneOf([ref('password')], 'Passwords must match'),
    };
};

const filterSchema = (keyArray, options) => {
    const schema = getSchema(options);

    return keyArray.reduce((selectedSchema, currentKey) => {
        selectedSchema[currentKey] = schema[currentKey];
        return selectedSchema;
    }, {});
};

export const getRequirement = (key, options) => {
    return getSchema(options)[key];
};

export const schemaToValidation = (schema) => {
    return object().shape(schema);
};

export const createValidationSchema = (keyArray, options) => {
    return schemaToValidation(filterSchema(keyArray, options));
};

getRequirement.propTypes = {
    keyArray: stringProp.isRequired,
};

schemaToValidation.propTypes = {
    schema: objectProp.isRequired,
};

createValidationSchema.propTypes = {
    keyArray: arrayProp.isRequired,
};
