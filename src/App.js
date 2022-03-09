import './App.css';
import theme from './theme/theme';
import { Home } from './home';
import { Survey } from './survey';
import { NewSurvey } from './CreateSurvey/SurveyForm';
import { Button, Flex, ChakraProvider } from '@chakra-ui/react';

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
                    <Route path="/survey" element={<Survey />} />
                    <Route path="/createSurvey" element={<NewSurvey />} />
                </Routes>
            </Router>
        </ChakraProvider>
    );
}

export default App;
