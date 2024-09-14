
function Food() {

    const food1 = "Pizza";
    const food2 = "Burger";

  return (
    <div>
        <h2>Food</h2>
      <h3>My favourite food is {food1}</h3>
      <h3>My favourite food is {food2.toUpperCase()}</h3>
    </div>

  );
}

export default Food;