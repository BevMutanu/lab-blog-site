import Header from './Components/Header';
import About from './Components/About';
import ArticleList from './Components/ArticleList';
import blog from './Data/CreateBlog';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Header name={blog.name} />
      <About image={blog.image} about={blog.about} />
      <ArticleList posts={blog.posts} />
      <Footer />
    </div>
  );
}

export default App;