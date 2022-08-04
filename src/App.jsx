import { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import TextField from "./components/TextField/TextField";

const App = () => {
  const [todoItems, setTodoItems] = useState([]);

  const removeItem = (id) => {
    setTodoItems((prevState) =>
      prevState.filter((element) => element.id !== id)
    );
  };

  const addItem = (text) => {
    if (!text) return alert("please enter a todo");
    setTodoItems((prevState) => [
      ...prevState,
      { text, checked: false, id: Math.random() },
    ]);
  };

  const handleReset = () => {
    setTodoItems([]);
  };

  const toggleCheck = (id, checkValue) => {
    setTodoItems((prevState) =>
      prevState.map((todo) => {
        if (id === todo.id) todo.checked = checkValue;
        return todo;
      })
    );
  };

  return (
    <div className="app">
      <Header handleReset={handleReset} />
      <TextField onSubmit={addItem} />
      <List
        emptyText="Nothing to see here yet... Add a task in the field above! ☝️"
        items={todoItems}
        removeItem={removeItem}
        toggleCheck={toggleCheck}
      />
    </div>
  );
};

export default App;
