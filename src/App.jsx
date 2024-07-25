import AddTodo from './components/AddTodo';
import AppName from './components/AppName';
import TodoItems from './components/TodoItems';

function App() {

  const todoItems = [
    {
      id: 1,
      name: 'Buy Milk',
      dueDate: '4/10/23',
    },
    {
      id: 2,
      name: 'Go to School',
      dueDate: '5/12/24',
    },
    {
      id: 3,
      name: 'Go to School 2',
      dueDate: '5/12/24',
    },
    {
      id: 4,
      name: 'Go to School 3',
      dueDate: '5/12/24',
    },
  ]

  return (
    <>
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems} />
    </>
  )
}

export default App
