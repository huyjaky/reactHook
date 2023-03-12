import logo from './logo.svg';
import './App.scss';
import Nav from './components/nav/Nav';
import FormTodo from './components/TodoApps/FormTodo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShowCovid19 from './components/Covid19/ShowCovid19';
import CountDownview from './components/CountDownClock/CountDownView';
import Detail from './components/Covid19/CityDetail/Detail';
import Blog from './components/Blog/Blog';
import BlogDetail from './components/Blog/BlogDetail/BlogDetail';
import AddBlog from './components/Blog/addBlog/AddBlog';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Routes>
            <Route path="/todoapp" element={<FormTodo />} />
            <Route path="/covid19" element={<ShowCovid19 />} />
            <Route path="/countdownclock" element={<CountDownview />} />
            <Route path="/covid19/:city" element={<Detail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/admin/blog/add-blog" element={<AddBlog />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
