const SingleItem = ({ item, removeItem, editItem }) => {
  //   const [isChecked, setIsChecked] = useState(item.completed);
  return (
    <div className="single-item">
      <input
        type="checkbox"
        // checked={isChecked}
        checked={item.completed}
        // onChange={() => setIsChecked(!isChecked)}
        onChange={() => editItem(item.id)}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: item.completed && "line-through",
        }}
      >
        {item.name}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        onClick={() => removeItem(item.id)}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;
