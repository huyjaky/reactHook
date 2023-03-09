import logo from './logo.svg';
import './App.scss';
import Nav from './components/nav/Nav';
import FormTodo from './components/TodoApps/FormTodo';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShowCovid19 from './components/TodoApps/Covid19/ShowCovid19';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Routes>
            <Route path='/todoapp' element={<FormTodo />}/>
            {/* <Route path='/covid19' element={} /> */}
          </Routes>
          <ShowCovid19 />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
