import PropTypes from "prop-types";

function List(props) {
  const category = props.category;
  const itemsList = props.items;

  const listItems = itemsList.map((items) => (
    <li key={items.id}>
      {items.name} : &nbsp;
      <b>{items.calories}</b>
    </li>
  ));

  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ol className="items">{listItems}</ol>
    </>
  );
}

List.defaultProps = {
  category: "Category",
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number,
    })
  ),
};

List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.array,
};

export default List;
