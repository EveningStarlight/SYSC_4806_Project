import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AnswerSurvey } from '../AnswerSurvey';

test('Redirect to Answer Survey Form Page', () => {
    render(<AnswerSurvey />, { wrapper: MemoryRouter });
    const linkElement = screen.getByText(/a simple survey asking your name!/i);
    expect(linkElement).toBeInTheDocument();
});
