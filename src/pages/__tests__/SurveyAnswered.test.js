import { render, screen } from '@testing-library/react';
import { SurveyAnswered } from '../SurveyAnswered';
import { BrowserRouter as Router } from 'react-router-dom';

test('Redirect to Survey Created Form Page', () => {
    render(
        <Router>
            <SurveyAnswered />
        </Router>,
    );
    const pageTitle = screen.getByText(/Thank You!/i);
    expect(pageTitle).toBeInTheDocument();
});
