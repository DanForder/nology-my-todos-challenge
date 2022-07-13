import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./TextField.scss";

const TextField = () => {
  return (
    <form className="text-field">
      <input
        className="text-field__input"
        type="text"
        aria-label="Write a new todo item"
        placeholder="Add your task here..."
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
