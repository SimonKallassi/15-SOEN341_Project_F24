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

test("Successful sign-up message if all fields are filled", async () => {
    render(<SignUp />);
    await act(async () => {
        fireEvent.change(screen.getByPlaceholderText("First name"), { target: { value: "John" } });
        fireEvent.change(screen.getByPlaceholderText("Last name"), { target: { value: "Doe" } });
        fireEvent.change(screen.getByPlaceholderText("Username"), { target: { value: "johndoe" } });
        fireEvent.change(screen.getByPlaceholderText("Email"), { target: { value: "john@example.com" } });
        fireEvent.change(screen.getByPlaceholderText("Password"), { target: { value: "password123" } });
        fireEvent.change(screen.getByPlaceholderText("Confirm Password"), { target: { value: "password123" } });
        fireEvent.click(screen.getByTestId('sign-up-button'));
    });

    await waitFor(() => {
        expect(window.alert).toHaveBeenCalledWith("Sign Up Successful! Welcome, John Doe");
    });
});
