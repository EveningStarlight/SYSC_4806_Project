import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import getAllByRole from '@testing-library/dom';
import { CreateSurvey } from '../CreateSurvey';

test('Redirect to Create Survey Form Page', () => {
    render(<CreateSurvey />);
    const titleLabel = screen.getByText(/Title of Survey:/i);
    expect(titleLabel).toBeInTheDocument();
});

test('Add Question', () => {
    const { getByRole, getAllByRole } = render(<CreateSurvey />);
    let questions = getAllByRole('question').length;
    const addQuestionButton = getByRole('button', {
        name: /Add Question/,
    });
    userEvent.click(addQuestionButton);
    expect(getAllByRole('question').length).toBe(questions + 1);
});

test('Remove Question', () => {
    const { getByRole, getAllByRole } = render(<CreateSurvey />);
    let questions = getAllByRole('question').length;
    const removeQuestionButton = getAllByRole('button', {
        name: /Remove Question/,
    });
    userEvent.click(removeQuestionButton[0]);
    expect(getAllByRole('question').length).toBe(questions - 1);
});
