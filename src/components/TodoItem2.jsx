function TodoItem2() {
    const todoName = 'Go to College'
    const todoDate = ' 5/08/24'
    return (
        <div className="container">
            <div className="row kg-row">
                <div className="col-6">{todoName}</div>
                <div className="col-4">{todoDate}</div>
                <div className="col-2">
                    <button className="btn btn-danger kg-button">Delete</button>
                </div>
            </div>
        </div>
    )
}

export default TodoItem2