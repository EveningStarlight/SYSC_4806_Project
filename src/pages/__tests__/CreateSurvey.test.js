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
    let inputs = getAllByRole('textbox').length;
    const addQuestionButton = getByRole('button', {
        name: /Add Question/,
    });
    userEvent.click(addQuestionButton);
    expect(getAllByRole('textbox').length).toBe(inputs + 1);
});

test('Remove Question', () => {
    const { getByRole, getAllByRole } = render(<CreateSurvey />);
    let inputs = getAllByRole('textbox').length;
    const removeQuestionButton = getAllByRole('button', {
        name: /Remove Question/,
    });
    userEvent.click(removeQuestionButton[0]);
    expect(getAllByRole('textbox').length).toBe(inputs - 1);
});
