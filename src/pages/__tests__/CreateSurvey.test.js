import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import getAllByRole from '@testing-library/dom';
import { CreateSurvey } from '../CreateSurvey';
import { BrowserRouter as Router } from 'react-router-dom';

test('Redirect to Create Survey Form Page', () => {
    render(
        <Router>
            <CreateSurvey />
        </Router>,
    );
    const titleLabel = screen.getByText(/Title of Survey:/i);
    expect(titleLabel).toBeInTheDocument();
});

test('Add Question', () => {
    const { getByRole, getAllByRole } = render(
        <Router>
            <CreateSurvey />
        </Router>,
    );
    let questions = getAllByRole('question').length;
    const addQuestionButton = getByRole('button', {
        name: /Add Question/,
    });
    userEvent.click(addQuestionButton);
    expect(getAllByRole('question').length).toBe(questions + 1);
});

test('Remove Question', () => {
    const { getByRole, getAllByRole } = render(
        <Router>
            <CreateSurvey />
        </Router>,
    );
    let questions = getAllByRole('question').length;
    const removeQuestionButton = getAllByRole('button', {
        name: /Remove Question/,
    });
    userEvent.click(removeQuestionButton[0]);
    expect(getAllByRole('question').length).toBe(questions - 1);
});
