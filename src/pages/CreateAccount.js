import { Box, Button, VStack } from '@chakra-ui/react';
import { Frame } from '../components/frame';
import { Formik } from 'formik';

import { EmailField } from '../components/inputs/EmailField';
import { PasswordConfirmation } from '../components/inputs/PasswordConfirmation';
import { createValidationSchema } from '../utilities/fieldRequirements';

function CreateAccount() {
    let signUp = (results) => {
        console.log('results: ', results);
    };
    return (
        <Frame title="Create an Account">
            <Formik
                validationSchema={createValidationSchema([
                    'email',
                    'password',
                    'confirmPassword',
                ])}
                initialValues={{
                    email: '',
                    password: '',
                    confirmPassword: '',
                }}
                onSubmit={async (values) => {
                    signUp({
                        variables: {
                            userName: values.email,
                            password: values.password,
                            confirmPassword: values.confirmPassword,
                        },
                    });
                }}
            >
                {({ handleSubmit, isSubmitting }) => (
                    <form id="form" onSubmit={handleSubmit}>
                        <VStack w="100%" spacing="20px">
                            <EmailField />

                            <PasswordConfirmation mb="4" />

                            <Box ml={{ lg: '12', md: '0' }} mb="4">
                                <Button
                                    type="submit"
                                    id="submitBtn"
                                    isLoading={isSubmitting}
                                    colorScheme="purple"
                                >
                                    Create Account
                                </Button>
                            </Box>
                        </VStack>
                    </form>
                )}
            </Formik>
        </Frame>
    );
}

export { CreateAccount };
