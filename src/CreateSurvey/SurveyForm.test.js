import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import getAllByRole from '@testing-library/dom'
import { NewSurvey } from './SurveyForm';

test('Redirect to Create Survey Form Page', () => {
    render(<NewSurvey />);
    const linkElement = screen.getByText(/Title of Survey:/i);
    expect(linkElement).toBeInTheDocument();
});

test('Add Question', () => {
    const { getByRole } = render(<NewSurvey />);
    let linkElement = screen.queryByText(/Question 3/i);
    expect(linkElement).toBeNull();
    const addQuestionButton = getByRole('button', {
        name: /Add Question/,
      })
    userEvent.click(addQuestionButton);
    linkElement = screen.getByText(/Question 3:/i);
    expect(linkElement).toBeInTheDocument();
});

test('Remove Question', () => {
    const { getAllByRole } = render(<NewSurvey />);
    let linkElement = screen.getByText(/Question 1/i);
    expect(linkElement).toBeInTheDocument();
    const removeQuestionButton = getAllByRole('button', {
        name: /Remove Question/,
      })
    userEvent.click(removeQuestionButton[0]);
    linkElement = screen.queryByText(/Question 3:/i);
    expect(linkElement).toBeNull();
});