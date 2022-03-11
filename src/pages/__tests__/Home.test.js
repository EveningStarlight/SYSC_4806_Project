import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import getAllByRole from '@testing-library/dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { Home } from '../Home';

test('Is page title rendering', () => {
    render(
        <Router>
            <Home />
        </Router>,
    );
    const pageTitle = screen.getByText(/Survey Gorilla/i);
    expect(pageTitle).toBeInTheDocument();
});
