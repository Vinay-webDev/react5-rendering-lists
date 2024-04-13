/* we need to convert array of strings to arrays of list items */
/* inorder do to we have a built-in method map() */
/* this map() takes in a callback basically a function expression 
or an arrow function. we need to pass in a function expression or \
an arrow function */ 
/*
function List() {

    const fruits = ["apple","orange","mango","watermelon","banana"];
    fruits.sort();
    /* don't forget to have fruit inside curly braces
     because we putting javascript */ /*
     
    const listItems = fruits.map(fruit => <li> {fruit}  </li>)
    
    return(
        <>
          <ul> {listItems} </ul>
          <ol> {listItems} </ol>
        </>
    );
}

export default List */
///////////////////////////////////////////////////////////////////////// 

function List() {
  const fruits = [{id:1, name:"apple", calories: 95},
                  {id:2, name:"orange", calories: 56},
                  {id:3, name:"banana", calories: 88},
                  {id:4, name:"watermelon" , calories: 89},
                  {id:5, name:"mango", calories: 100}]
               
  const listItems = fruits.map(fruit => 
                                 <li key={fruit.id} > {fruit.name}
                                : &nbsp; <b>{fruit.calories}</b> </li>)
  return(
     <ol> {listItems} </ol>
  );
}
/* I forgot to export and suffered a lot😭😭😭😭 
please don't forget to export*/
export default List




















