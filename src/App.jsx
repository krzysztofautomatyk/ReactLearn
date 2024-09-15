import List  from "./List"

function App() {

  const fruits = [
    {id:1 ,name:"Apple",calories:95},
    {id:2 ,name:"Banana",calories:15}, 
    {id:3 ,name:"Cherry",calories:9}, 
    {id:4 ,name:"Annanas ",calories:195}, 
    {id:5 ,name:"Elderberry",calories:53}
  ];

  const vegetables = [
    { id: 1, name: "Carrot", calories: 25 },
    { id: 2, name: "Broccoli", calories: 55 },
    { id: 3, name: "Spinach", calories: 23 },
    { id: 4, name: "Potato", calories: 77 },
    { id: 5, name: "Tomato", calories: 18 }
  ];

  /*  
  const vegetables = [
 
  ];
*/

  return (
    <>
      {fruits.length > 0 ? <List items={fruits} category="Fruits" /> : <p>No fruits available</p>}  
      {vegetables.length > 0 && <List items={vegetables} category="Vegetables" />}
    </>
  );
}

export default App
