import { Box, Center, Button, VStack } from '@chakra-ui/react';
import { Formik } from 'formik';

import { Frame } from '../components/frame';
import { EmailField } from '../components/inputs/EmailField';
import { PasswordField } from '../components/inputs/PasswordField';
import {
    getRequirement,
    schemaToValidation,
} from '../utilities/fieldRequirements';
import { toggleSignIn } from '../utilities/login';
import { logIn } from '../utilities/login';

function Signin() {
    let signIn = (results) => {
        toggleSignIn();
        console.log('results: ', results);
    };
    const validationSchema = schemaToValidation({
        email: getRequirement('email'),
        password: getRequirement('password'),
    });

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
                        logIn({
                                email: values.email,
                                password: values.password,
                        });
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
