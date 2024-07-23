import AddTodo from './components/AddTodo';
import AppName from './components/AppName';

function App() {
  const myName = "aqs";
  const fullName = () => {
    return "Qadir Salman"
  }
  return (
    <>
      <AppName />
      <AddTodo />
      <div className="container text-center">
        <div className="row">
          <div className="col-6">
            Buy Milk
          </div>
          <div className="col-4">
            4/10/23
          </div>
          <div className="col-2">
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            Go to College
          </div>
          <div className="col-4">
            5/08/24
          </div>
          <div className="col-2">
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>

      </div>
      <h1>Hello, {fullName()} - {myName}</h1>
    </>
  )
}

export default App
