import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import SignUp from '../pages/SignUp';
import '@testing-library/jest-dom';

beforeAll(() => {
    window.alert = jest.fn();
});

test('Displays error if required fields are empty', async () => {
    render(<SignUp />);
    await act(async () => {
        fireEvent.click(screen.getByTestId('sign-up-button'));
    });

    await waitFor(() => {
        const errorElement = screen.getByTestId('error-message');
        expect(errorElement).toBeInTheDocument();
        expect(errorElement).toHaveTextContent('Please fill in all the fields');
    });
});

//
