import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./TextField.scss";

const TextField = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setValue("");
    onSubmit(e.target[0].value);
  };

  return (
    <form className="text-field" onSubmit={handleSubmit}>
      <input
        className="text-field__input"
        type="text"
        aria-label="Write a new todo item"
        placeholder="Add your task here..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        className="text-field__button"
        type="submit"
        aria-label="Submit new task"
      >
        <FontAwesomeIcon icon={faCirclePlus} />
      </button>
    </form>
  );
};

export default TextField;
