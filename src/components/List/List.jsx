import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./List.scss";

const List = ({ emptyText, items = [], removeItem, toggleCheck }) => {
  if (items.length === 0) {
    return <p>{emptyText}</p>;
  }

  return (
    <ul className="list">
      {items.map((item) => {
        return (
          <li key={item.id} className="list__item">
            <input
              className="list__input"
              type="checkbox"
              id={`todo-${item.id}`}
              checked={item.checked}
              onChange={(e) => toggleCheck(item.id, e.target.checked)}
            />
            <label className="list__label" htmlFor={`todo-${item.id}`}>
              {item.text}
            </label>
            <button
              className="list__delete"
              aria-label="Delete todo item"
              onClick={() => removeItem(item.id)}
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
