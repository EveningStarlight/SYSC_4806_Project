import { Button, Flex, ChakraProvider, Spacer } from '@chakra-ui/react';

import theme from '../theme/theme';

import { Home } from '../pages/Home';
import { Signin } from '../pages/Signin';
import { CreateAccount } from '../pages/CreateAccount';
import { AnswerSurvey } from '../pages/AnswerSurvey';
import { AnswerSurveyList } from '../pages/AnswerSurveyList';
import { CreateSurvey } from '../pages/CreateSurvey';
import { DisplaySurveys } from '../pages/UserSurveysPage';
import { SurveyCreated } from '../pages/SurveyCreated';
import { SurveyAnswered } from '../pages/SurveyAnswered';
import { Answers } from '../pages/Answers';
import { MissingPage } from '../pages/MissingPage';

import { isUserLoggedin, toggleSignIn } from '../utilities/login';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link as RouteLink,
} from 'react-router-dom';

function App() {
    return (
        <ChakraProvider theme={theme}>
            <Router>
                <Flex mx={10} mt={5}>
                    <RouteLink to="/">
                        <Button m={3}>Home</Button>
                    </RouteLink>
                    <Spacer />
                    {isUserLoggedin() ? (
                        <RouteLink to="/">
                            <Button
                                m={3}
                                onClick={() => {
                                    toggleSignIn();
                                }}
                            >
                                Sign Out
                            </Button>
                        </RouteLink>
                    ) : (
                        <>
                            <RouteLink to="/Signin">
                                <Button m={3} colorScheme="purple">
                                    Sign In
                                </Button>
                            </RouteLink>
                            <RouteLink to="/createAccount">
                                <Button m={3}>Create Account</Button>
                            </RouteLink>
                        </>
                    )}
                </Flex>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/createAccount" element={<CreateAccount />} />
                    <Route path="/survey" element={<AnswerSurveyList />} />
                    <Route path="/survey/:id" element={<AnswerSurvey />} />
                    <Route path="/createSurvey" element={<CreateSurvey />} />
                    <Route path="/answers/:id" element={<Answers />} />
                    <Route path="/UserSurvey" element={<DisplaySurveys />} />
                    <Route path="/surveyCreated" element={<SurveyCreated />} />
                    <Route
                        path="/surveyAnswered"
                        element={<SurveyAnswered />}
                    />
                    <Route path="*" element={<MissingPage />} />
                </Routes>
            </Router>
        </ChakraProvider>
    );
}

export default App;
