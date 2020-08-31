// // TODO
// var Cookies = () => (
//   <li>cookies</li>
// );

// var Bananas = () => (
//   <li>bananas</li>
// );

// var GroceryListItem = (props) => (
// <li>{props.groceryitem}</li>
// );

// var GroceryList = () => ( //grocery list "component"
//   <ul>
//     <Cookies />
//     <Bananas />
//   </ul>
// ); // cookies & bananas = "nested react components"

// ReactDOM.render(<GroceryList />, document.getElementById("app"));



//
//

// REFACTORED CODE w/Props
// component properties -> pass data into components inside mustaches {}

// stateless functional components are great when all you need to do is receive props and render JSX.
// Note: props are immutable and cannot be changed once passed in from a parent

// var GroceryListItem = (props) => (
//   <ul>
//     <li>{props.groceryitem[0]}</li>
//     <li>{props.groceryitem[1]}</li>
//   </ul>
//   );

//   var GroceryList = () => ( //grocery list "component"
//    <div>
//      <h2>My Grocery List</h2>
//      <GroceryListItem groceryitem={['cookies', 'bananas']}/>
//    </div>
//   );

//   ReactDOM.render(<GroceryList />, document.getElementById("app"));



  //
  //

// CLASS COMPONENTS - NON-STATELESS
// To make applications interactive, our components need to do more than simply receive props. Sometimes components need to store data that cannot be explicitly passed in as props and re-render this data changes.
// React makes this possible with class components. To demonstrate this, we'll refactor each <li> of our TodoList into a TodoListItem class component:

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    };
  }
  //when a list item is cliked we'll toggle the 'done' boolean and our component's
  // 'render' method will run again
  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }
  render() {
    // making the style conditional on our 'state' lets us update it based on
    // user interaction
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };

    // you can pass inline styles using reacts 'style' attribute to any component
    // snake-cased css properties become camelCased this this object
    return (
    <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.groceryItem}</li>
    );
  }
}

var GroceryList = (props) => (
  <ul>
    {props.groceryItems.map(groceryItem =>
      <GroceryListItem groceryItem={groceryItem} />
      )}
  </ul>
);

ReactDOM.render(<GroceryList groceryItems={['bananas', 'cookies']}/>, document.getElementById("app"));

// GroceryList('bananas', 'tacos')

// making list items crossed out after clicked will live on the 'state' object of the 'GroceryListItem' component.
// state is only available on class components. we can initialize a class component's state in its constructor. to update the state, invoke 'this.setState'
// hwever 'this.setState' is called, the component re-renders


