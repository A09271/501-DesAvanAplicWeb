import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import FormMenu from '../../class4/A01027920/FormMenuEntry.tsx';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

test('renders the expense form from FormMenu', () => {
    const { getByPlaceholderText } = render(
      <MemoryRouter>
        <FormMenu />
      </MemoryRouter>
    );
    expect(getByPlaceholderText('Amount')).toBeInTheDocument();
    expect(getByPlaceholderText('Category')).toBeInTheDocument();
    expect(getByPlaceholderText('Description')).toBeInTheDocument();
  });
  
  test('calls handleSubmit with the correct values when submitted in ExpenseForm', () => {
    const consoleSpy = jest.spyOn(console, 'log');
  
    render(
      <MemoryRouter>
        <FormMenu />
      </MemoryRouter>
    );
  
    const amountInput = screen.getByPlaceholderText('Amount');
    const categoryInput = screen.getByPlaceholderText('Category');
    const descriptionTextarea = screen.getByPlaceholderText('Description');
    const submitButton = screen.getByText('Submit');
  
    fireEvent.change(amountInput, { target: { value: '100' } });
    fireEvent.change(categoryInput, { target: { value: 'Food' } });
    fireEvent.change(descriptionTextarea, { target: { value: 'Dinner with client' } });
  
    fireEvent.click(submitButton);
  
    expect(consoleSpy).toHaveBeenCalledWith('Expense:', {
      amount: '100',
      category: 'Food',
      description: 'Dinner with client',
    });
  
    consoleSpy.mockRestore();
  });