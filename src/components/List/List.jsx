import "./List.scss";

const List = ({ emptyText, items = [] }) => {
  if (items.length === 0) {
    return <p>{emptyText}</p>;
  }

  return (
    <ul className="list">
      {items.map(({ checked, content }, index) => {
        return (
          <li class="list__item">
            <input
              class="list__input"
              type="checkbox"
              id={`todo-${index}`}
              checked={checked}
            />
            <label class="list__label" for={`todo-${index}`}>
              ${content}
            </label>
            <button class="list__delete" aria-label="Delete todo item">
              <i class="far fa-trash-alt" aria-hidden="true"></i>
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
