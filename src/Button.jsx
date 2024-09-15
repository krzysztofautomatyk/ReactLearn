function Button() {
    
  

/* Exmaple 1
  const handleClick2 = (name) => console.log(`Hello ${name}`);
  return <button onClick={() =>handleClick2("John")}>Click me </button>;
*/

/* Exmaple 2
  let count = 0;
  const handleClick = (name) => {
    if (count < 3) {
      count++;
      console.log(`Hello ${name} you clicked ${count} times`);
    } else {
      console.log(`Hello ${name} stop clicking`);
    }
  };
  return <button onClick={() => handleClick("Leon")}>Click me</button>;
*/

/* Exmaple 3
const handleClick = (e) => console.log(e);    
return <button onClick={(e)=>handleClick(e)}>Click me</button>;
*/

/* Exmaple 4
const handleClick = (e) => e.target.textContent = "Clicked 👍";    
return <button onDoubleClick={(e)=>handleClick(e)}>Click me</button>;
*/

const handleClick = (e) => e.target.textContent = "Clicked 👍";    
return <button onDoubleClick={(e)=>handleClick(e)}>Click me</button>;

 
  }

export default Button;
