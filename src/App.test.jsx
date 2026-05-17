import { render, screen } from '@testing-library/react';
import App from './App';
import blog from './Data/CreateBlog';

test('renders blog name', () => {
  render(<App />);
  const headerElement = screen.getByText(blog.name);
  expect(headerElement).toBeInTheDocument();
});

test('renders blog about section', () => {
  render(<App />);
  const aboutText = screen.getByText(blog.about);
  expect(aboutText).toBeInTheDocument();
});