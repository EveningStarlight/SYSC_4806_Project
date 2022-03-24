import { render, screen } from '@testing-library/react';
import { Route, Routes, MemoryRouter } from 'react-router-dom';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { AnswerSurvey } from '../AnswerSurvey';

test('Renders the test survey page', () => {
    render(
        <ChakraProvider>
            <MemoryRouter initialEntries={[`/survey/test`]}>
                <Routes>
                    <Route path="/survey/:id" element={<AnswerSurvey />} />
                </Routes>
            </MemoryRouter>
        </ChakraProvider>,
    );
    const description = screen.getByText(/The default test survey/i);
    expect(description).toBeInTheDocument();

    const question = screen.getByText(/How many stars is Subway?/i);
    expect(question).toBeInTheDocument();

    const choice = screen.getByText(/Vanilla/i);
    expect(choice).toBeInTheDocument();
});
