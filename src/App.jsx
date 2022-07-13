import { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import TextField from "./components/TextField/TextField";

const App = () => {
  const [todoItems, setTodoItems] = useState(["one", "two", "three"]);

  return (
    <div className="app">
      <Header />
      <TextField />
      <List
        emptyText="Nothing to see here yet... Add a task in the field above! ☝️"
        items={todoItems}
      />
    </div>
  );
};

export default App;
