import { describe, expect, test } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import userEvent from '@testing-library/user-event';
import App from '../src/App';
import React from 'react';

describe('App', () => {
  test('Должно появиться поле ввода задачи, кнопка добавления и основная обертка Todo', () => {
    render(<App />);

    const inputField = screen.getByRole('textbox');
    const addButton = screen.getByRole('button', { name: 'Добавить' });

    expect(inputField).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
  });
  test('Должна добавиться задача в список после ввода названия и нажатия на кнопку', async () => {
    const user = userEvent.setup();

    const inputField = screen.getByPlaceholderText(
      'Сделать удаление завершенных и всех'
    );
    const addButton = screen.getByRole('button', { name: 'Добавить' });

    await user.type(inputField, 'Новая задача');
    await user.click(addButton);

    await waitFor(() => {
      expect(screen.getByText('Новая задача')).toBeInTheDocument();
      expect(inputField).toHaveValue('Новая задача');
    });
  });
});
