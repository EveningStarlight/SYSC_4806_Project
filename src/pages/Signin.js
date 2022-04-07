import { Box, Center, Button, VStack } from '@chakra-ui/react';
import { Formik } from 'formik';
import { Navigate } from 'react-router-dom';

import { Frame } from '../components/frame';
import { EmailField } from '../components/inputs/EmailField';
import { PasswordField } from '../components/inputs/PasswordField';
import {
    getRequirement,
    schemaToValidation,
} from '../utilities/fieldRequirements';
import { signIn, isUserLoggedin } from '../utilities/login';

function Signin({ setLoggedIn, ...props }) {
    const validationSchema = schemaToValidation({
        email: getRequirement('email'),
        password: getRequirement('password'),
    });
    if (isUserLoggedin()) {
        return <Navigate to="/" />;
    }

    return (
        <Frame title="Sign In">
            <Box px="4" mx="auto" overflow="hidden" w="100%">
                <Formik
                    validationSchema={validationSchema}
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    onSubmit={async (values) => {
                        await signIn({
                            email: values.email,
                            password: values.password,
                        });
                        setLoggedIn(isUserLoggedin());
                    }}
                >
                    {({ handleSubmit, isSubmitting, handleChange }) => (
                        <form
                            onSubmit={handleSubmit}
                            autoComplete="on"
                            id="form"
                        >
                            <Center>
                                <VStack w="100%" spacing="20px">
                                    <EmailField name="email" mb={4} />

                                    <PasswordField name="password" mb={2} />

                                    <Button
                                        type="submit"
                                        colorScheme="purple"
                                        isLoading={isSubmitting}
                                        mb={5}
                                    >
                                        Sign In
                                    </Button>
                                </VStack>
                            </Center>
                        </form>
                    )}
                </Formik>
            </Box>
        </Frame>
    );
}

export { Signin };
