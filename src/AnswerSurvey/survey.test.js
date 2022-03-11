import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Survey } from './survey';

test('Redirect to Answer Survey Form Page', () => {
    render(<Survey />, {wrapper: MemoryRouter});
    const linkElement = screen.getByText(/a simple survey asking your name!/i);
    expect(linkElement).toBeInTheDocument();
});