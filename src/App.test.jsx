import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import blog from './Data/CreateBlog';

describe('App', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('renders the blog title', () => {
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent(blog.name);
  });

  test('renders the about section with the author description', () => {
    expect(screen.getByText(blog.about)).toBeInTheDocument();
  });

  test('renders the blog logo image with correct alt text', () => {
    const image = screen.getByRole('img', { name: /blog logo/i });
    expect(image).toBeInTheDocument();
  });

  test('renders all article previews', () => {
    const articles = screen.getAllByRole('article');
    expect(articles).toHaveLength(blog.posts.length);
  });

  test('renders each article title and preview text', () => {
    blog.posts.forEach((post) => {
      expect(screen.getByText(post.title)).toBeInTheDocument();
      expect(screen.getByText(post.preview)).toBeInTheDocument();
    });
  });

  test('renders the footer copyright', () => {
    expect(screen.getByText(/© 2026 Code With Bev/i)).toBeInTheDocument();
  });
});
