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
    const { getByRole } = render(<CreateSurvey />);
    let question3 = screen.queryByText(/Question 3/i);
    expect(question3).toBeNull();
    const addQuestionButton = getByRole('button', {
        name: /Add Question/,
    });
    userEvent.click(addQuestionButton);
    question3 = screen.getByText(/Question 3/i);
    expect(question3).toBeInTheDocument();
});

test('Remove Question', () => {
    const { getAllByRole } = render(<CreateSurvey />);
    let question1 = screen.getByText(/Question 1/i);
    expect(question1).toBeInTheDocument();
    const removeQuestionButton = getAllByRole('button', {
        name: /Remove Question/,
    });
    userEvent.click(removeQuestionButton[0]);
    question1 = screen.queryByText(/Question 1/i);
    expect(question1).toBeNull();
});
