import { Button, Flex, ChakraProvider } from '@chakra-ui/react';

import theme from '../theme/theme';

import { Home } from '../pages/Home';
import { AnswerSurvey } from '../pages/AnswerSurvey';
import { CreateSurvey } from '../pages/CreateSurvey';

import { DisplaySurveys } from '../pages/UserSurveysPage';
import { SurveyCreated } from '../pages/SurveyCreated';
import { SurveyAnswered } from '../pages/SurveyAnswered';

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
                <Flex>
                    <RouteLink to="/">
                        <Button m={3}>Home</Button>
                    </RouteLink>
                </Flex>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/survey/:id" element={<AnswerSurvey />} />
                    <Route path="/createSurvey" element={<CreateSurvey />} />
                    <Route path="/UserSurvey" element={<DisplaySurveys />} />

                    <Route path="/surveyCreated" element={<SurveyCreated />} />
                    <Route
                        path="/surveyAnswered"
                        element={<SurveyAnswered />}
                    />
                </Routes>
            </Router>
        </ChakraProvider>
    );
}

export default App;
