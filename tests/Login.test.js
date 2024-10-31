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
