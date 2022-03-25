import { Button, Flex, ChakraProvider } from '@chakra-ui/react';

import theme from '../theme/theme';

import { Home } from '../pages/Home';
import { AnswerSurvey } from '../pages/AnswerSurvey';
import { AnswerSurveyList } from '../pages/AnswerSurveyList';
import { CreateSurvey } from '../pages/CreateSurvey';
import { DisplaySurveys } from '../pages/UserSurveysPage';
import { SurveyCreated } from '../pages/SurveyCreated';
import { SurveyAnswered } from '../pages/SurveyAnswered';
import { Answers } from '../pages/Answers';
import { MissingPage } from '../pages/MissingPage';

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
