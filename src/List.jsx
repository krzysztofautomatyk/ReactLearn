

function List(props) {

    const fruits = [
      {id:1 ,name:"Apple",calories:95},
      {id:2 ,name:"Banana",calories:15}, 
      {id:3 ,name:"Cherry",calories:9}, 
      {id:4 ,name:"Annanas ",calories:195}, 
      {id:5 ,name:"Elderberry",calories:53}
    ];

    //fruits.sort((a, b) => a.calories - b.calories); // sort by calories in ascending order
    //fruits.sort((a, b) => b.calories - a.calories); // sort by calories in descending
    //fruits.sort((a, b) => a.name.localeCompare(b.name)); // sort by name in ascending order
    //fruits.sort((a, b) => b.name.localeCompare(a.name)); // sort by name in descending
/*
    const listItems = fruits.map((fruit => <li key={fruit.id}>
      {fruit.name} : &nbsp; 
      <b>{fruit.calories}</b></li>));
*/
    const lowCalories = fruits.filter(fruit => fruit.calories < 110);

    const listItems = lowCalories.map((lowCalories => <li key={lowCalories.id}>
                                                  {lowCalories.name} : &nbsp; 
                                                  <b>{lowCalories.calories}</b></li>));

return (
    <ol>
      {listItems}
    </ol>
    );
  }

export default List;