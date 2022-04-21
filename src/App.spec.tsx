import {render, screen} from '@testing-library/react';
import Login from './pages/Login';

test('Enter button to be disabled', () => {
  test('renders learn react link', () => {
    render(<Login />);
    const enterButton = screen.getByRole('button', {name: 'Enter'})
    expect(enterButton).toBeDisabled()
  });
})