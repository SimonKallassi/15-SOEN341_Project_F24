import { render, screen } from '@testing-library/react';
import Home from '../../pages/index';
import '@testing-library/jest-dom';

test("Displays welcome message", () => {
    render(<Home />);
    const welcomeElement = screen.getByRole('heading', { level: 1, name: /Welcome to/i });
    expect(welcomeElement).toHaveTextContent("Welcome to PeerEvaluator");
});

test("Has Get Started button linking to Login", () => {
    render(<Home />);
    expect(screen.getByText("Get Started").closest('a')).toHaveAttribute('href', '/Login');
});
