import React, { useState } from 'react';
import TodoItems from './TodoItems';
import TodoForm from './TodoForm';

function App() {
  const [items, setItems] = useState([
    { id: 1, text: 'Eat', completed: false },
    { id: 2, text: 'Sleep', completed: true }
  ]);

  const [newItem, setNewItem] = useState(false);

  const handleAddItem = (event, text) => {
    event.preventDefault();

    setNewItem(false);

    if (!text.trim()) {
      return
    }

    setItems([{ id: Date.now(), text, completed: false }, ...items]);
    setNewItem(true);

    return true
  };

  const handleToggleItem = (id) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handleDeleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className='todo'>
      <TodoForm handleAddItem={handleAddItem} />
      <TodoItems items={items} newItem={newItem} onDelete={handleDeleteItem} onToggle={handleToggleItem} />
    </div>
  );
}

export default App;