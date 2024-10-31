import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../pages/Login';
import '@testing-library/jest-dom';
jest.spyOn(window, 'alert').mockImplementation(() => {});

test("Shows error if username is empty", () => {
    render(<Login />);
    fireEvent.change(screen.getByPlaceholderText("Password"), { target: { value: "password123" } });
    fireEvent.click(screen.getByText("Login"));
    expect(window.alert).toHaveBeenCalledWith('Please fill the username.'); // Check alert content
});

test("Shows error if password is empty", () => {
    render(<Login />);
    fireEvent.change(screen.getByPlaceholderText("Username"), { target: { value: "user@example.com" } });
    fireEvent.click(screen.getByText("Login"));
    expect(window.alert).toHaveBeenCalledWith('Please enter your password.'); // Check alert content
});


test("Submits form if both fields are filled", () => {
    render(<Login />);
    fireEvent.change(screen.getByPlaceholderText("Username"), { target: { value: "user@example.com" } });
    fireEvent.change(screen.getByPlaceholderText("Password"), { target: { value: "password123" } });
    fireEvent.click(screen.getByText("Login"));
    expect(window.alert).toHaveBeenCalledWith('Submit clicked!'); // Check alert content
});

