import TodoItem from "./TodoItem"
import styles from './TodoItems.module.css'

function TodoItems({ todoItems }) {
    return (
        <div className={styles.itemsContainer}>
            {todoItems.map(items => <TodoItem key={items.id} todoDate={items.dueDate} todoName={items.name} />)}
        </div>
    )
}

export default TodoItems