import './App.css';
import FlatDetail from "./components/FlatDetail.jsx"
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import Home from "./components/Home.jsx"
import Contact from "./components/Contact.jsx"
import About from "./components/About.jsx"
import Blog from "./components/Blog.jsx"
import BlogDetail from "./components/BlogDetail.jsx"
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/flat/:slug" element={<FlatDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
