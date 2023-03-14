import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import AddBlog from './components/Blog/addBlog/AddBlog';
import Blog from './components/Blog/Blog';
import BlogDetail from './components/Blog/BlogDetail/BlogDetail';
import CountDownview from './components/CountDownClock/CountDownView';
import Detail from './components/Covid19/CityDetail/Detail';
import ShowCovid19 from './components/Covid19/ShowCovid19';
import Nav from './components/nav/Nav';
import FormTodo from './components/TodoApps/FormTodo';
import logo from './logo.svg';
import { ToastContainer } from 'react-toastify';
import Youtube from './components/Blog/Youtube/Youtube';

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
            <Route path="/youtube" element={<Youtube />} />
          </Routes>
        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
