import React from 'react';
import { render, fireEvent, screen} from '@testing-library/react';
import TravelRequestForm from '../../class4/A01027920/TravelRequestForm'
import '@testing-library/jest-dom';

test('renders the travel request form', () => {
  const { getByPlaceholderText } = render(<TravelRequestForm />);
});

test('calls handleSubmit', () => {
    const consoleSpy = jest.spyOn(console, 'log');
  
    render(<TravelRequestForm />);

    const submitButton = screen.getByText('Submit');
  
    fireEvent.click(submitButton);
  
    consoleSpy.mockRestore();
  });