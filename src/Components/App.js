import '../styles/App.sass';

import React, { useState } from 'react';

function TodoItem({ item, onToggle, onDelete }) {
  return (
    <div>
      <label>
        <input type="checkbox" checked={item.completed} onChange={() => onToggle(item.id)} />
        {item.text}
      </label>
      <button onClick={() => onDelete(item.id)}>-</button>
    </div>
  );
}

function App() {
  const [items, setItems] = useState([
    { id: 1, text: 'Eat', completed: false },
    { id: 2, text: 'Sleep', completed: true }
  ]);

  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleAddItem = () => {
    if (text.trim()) {
      setItems([...items, { id: Date.now(), text, completed: false }]);
      setText('');
    }
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
    <div className='App'>
      <div>
        <input type="text" value={text} onChange={handleTextChange} />
        <button onClick={handleAddItem}>+</button>
      </div>
      <div>
        {items.map((item) => (
          <TodoItem key={item.id} item={item} onToggle={handleToggleItem} onDelete={handleDeleteItem} />
        ))}
      </div>
    </div>
  );
}

export default App;