import { render, screen } from '@testing-library/react';
import { describe, test, expect, beforeEach } from 'vitest';
import App from './App';
import blog from './Data/CreateBlog';

describe('App', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('renders the blog title', () => {
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading.textContent).toBe(blog.name);
  });

  test('renders the about section with the author description', () => {
    expect(screen.getByText(blog.about)).toBeTruthy();
  });

  test('renders the blog logo image with correct alt text', () => {
    const image = screen.getByRole('img', { name: /blog logo/i });
    expect(image).toBeTruthy();
  });

  test('renders all article previews', () => {
    const articles = screen.getAllByRole('article');
    expect(articles).toHaveLength(blog.posts.length);
  });

  test('renders each article title and preview text', () => {
    blog.posts.forEach((post) => {
      expect(screen.getByText(post.title)).toBeTruthy();
      expect(screen.getByText(post.preview)).toBeTruthy();
    });
  });

  test('renders the footer copyright', () => {
    expect(screen.getByText(/© 2026 Code With Bev/i)).toBeTruthy();
  });
});
