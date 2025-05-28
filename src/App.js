import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import User from './components/User'
import Todos from './components/Todos'
import Projects from './components/Projects'
import EditTodo from './components/EditTodo'
import Calender from './components/Calender'
import AddNewTodo from './components/AddNewTodo'

function App() {
  return (
    <div className='App'>
      <Header>
        <User />
        <AddNewTodo />
        <Calender />
        <Projects />
      </Header>
      <Main>
        <Todos />
        <EditTodo />

      </Main>
    </div>
  );
}

export default App;