import { render, screen } from '@testing-library/react';
import { SurveyCreated } from '../SurveyCreated';
import { BrowserRouter as Router } from 'react-router-dom';

test('Redirect to Survey Created Form Page', () => {
    render(
        <Router>
            <SurveyCreated />
        </Router>,
    );
    const pageTitle = screen.getByText(/Survey Created!/i);
    expect(pageTitle).toBeInTheDocument();
});
