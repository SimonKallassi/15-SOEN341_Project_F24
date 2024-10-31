import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../pages/Login';
import '@testing-library/jest-dom';
jest.spyOn(window, 'alert').mockImplementation(() => {});

