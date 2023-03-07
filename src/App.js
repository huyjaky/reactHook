import logo from './logo.svg';
import './App.scss';
import Nav from './components/nav/Nav';
import FormTodo from './components/TodoApps/FormTodo';

function App() {
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FormTodo />
      </header>
    </div>
  );
}

export default App;
