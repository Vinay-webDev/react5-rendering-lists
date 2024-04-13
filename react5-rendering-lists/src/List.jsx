
/* we need to convert array of strings to arrays of list items */
/* inorder do to we have a built-in method map() */
/* this map() takes in a callback basically a function expression 
or an arrow function. we need to pass in a function expression or \
an arrow function */ 
function List() {

    const fruits = ["apple","orange","mango","watermelon","banana"];
    fruits.sort();
    /* don't forget to have fruit inside curly braces
     because we putting javascript ****/ 
    const listItems = fruits.map(fruit => <li> {fruit}  </li>)
    
    return(
        <>
          {/*<ul> {listItems} </ul> */}
          <ol> {listItems} </ol>
        </>
    );
}

export default List

