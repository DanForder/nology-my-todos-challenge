import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./List.scss";

const List = ({ emptyText, items = [], removeItem, toggleCheck }) => {
  if (items.length === 0) {
    return <p>{emptyText}</p>;
  }

  return (
    <ul className="list">
      {items.map((item, index) => {
        return (
          <li key={item.text + index} className="list__item">
            <input
              className="list__input"
              type="checkbox"
              id={`todo-${index}`}
              checked={item.checked}
              onChange={() => toggleCheck(index)}
            />
            <label className="list__label" htmlFor={`todo-${index}`}>
              {item.text}
            </label>
            <button
              className="list__delete"
              aria-label="Delete todo item"
              onClick={() => removeItem(item)}
            >
              <FontAwesomeIcon icon={faTrashAlt} />
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
