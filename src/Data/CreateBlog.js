import logo from "../assets/logo.svg";

const blog = {
  name: "Frontend Diaries",
  about: "My name is Bev, a frontend developer passionate about React, UI design, and building interactive web applications.",
  image: logo,
  posts: [
    {
      id: 1,
      title: "Getting Started with React",
      date: "May 17, 2026",
      preview: "When I first started learning React, components were confusing. Here's the approach that finally made them click for me.",
      author: "Bev",
      readingTime: "4 min read"
    },
    {
      id: 2,
      title: "Understanding Props",
      date: "May 17, 2026",
      preview: "Props are used to pass data from parent to child components...",
      author: "Bev",
      readingTime: "3 min read"
    },
    {
      id: 3,
      title: "State Management Basics",
      date: "May 12, 2026",
      preview: "State allows React components to change their output over time...",
      author: "Bev",
      readingTime: "5 min read"
    }
  ]
};

export default blog;