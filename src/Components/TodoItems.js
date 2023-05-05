import todoAnimation from './todoAnimation';

function TodoItems({ items, onToggle, onDelete, newItem }) {
    todoAnimation(newItem);
    return (
        <div className={newItem ? 'todo-items__new todo-items' : 'todo-items'}>{
            items.map((item, index) => (
                <div className={newItem && index === 0 ? 'todo-item todo-item__first' : 'todo-item'} key={item.id}>
                    <label>
                        <input type="checkbox" checked={item.completed} onChange={() => onToggle(item.id)} />
                        <span>{item.text}</span>
                    </label>
                    <button onClick={() => onDelete(item.id)}>Remove</button>
                </div>
            ))}
        </div>

    );
}

export default TodoItems;