import AddTodo from './components/AddTodo';
import AppName from './components/AppName';
import TodoItem1 from './components/TodoItem1';
import TodoItem2 from './components/TodoItem2';

function App() {
  const myName = "aqs";
  const fullName = () => {
    return "Qadir Salman"
  }
  return (
    <>
      <AppName />
      <AddTodo />
      <div className='items-container'>
        <TodoItem1 />
        <TodoItem2 />
      </div>

      <h1>Hello, {fullName()} - {myName}</h1>
    </>
  )
}

export default App
