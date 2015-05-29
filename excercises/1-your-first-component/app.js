////////////////////////////////////////////////////////////////////////////////
// Excercise:
//
// Render `DATA` to the page
// - put the title in an h1
// - only render mexican food (hint: arrays have a "filter" method)
// - sort the items in alphabetical order by name
//   (might want to use `sort-by` https://github.com/staygrimm/sort-by#example)
////////////////////////////////////////////////////////////////////////////////

var React = require('react');
var sortBy = require('sort-by');

var DATA = {
  title: 'Menu',
  items: [
    { id: 1, name: 'tacos', type: 'mexican' },
    { id: 2, name: 'burrito', type: 'mexican' },
    { id: 3, name: 'tostada', type: 'mexican' },
    { id: 4, name: 'hush puppies', type: 'southern' }
  ]
};

var Menu = React.createClass({
  render () {
    var mexicanFood = DATA.items.filter(
      item => item.type === 'mexican'
    )
    .sort(sortBy('name'))
    .map((item) => <li>{item.name}</li>);

    return (
      <div>
        <h1>{DATA.title}</h1>
        <ul>
          {mexicanFood}
        </ul>
      </div>
    );
  }
});


//////////////////////////////
//   INSTRUCTOR'S VERSION   //
//////////////////////////////

// var Menu = React.createClass({
//   render () {
//     var mexicanFood = DATA.items.filter((food) => {
//       return food.type === 'mexican';
//     })
//     .sort(sortBy('name'))
//     .map(function(item) {
//       return <li>{item.name}</li>
//     });

//     return (
//       <div>
//         <h1>{DATA.title}</h1>
//         <ul>
//           {mexicanFood}
//         </ul>
//       </div>
//     );
//   }
// });


React.render(<Menu/>, document.body, () => {
  // var meals = DATA.map((n) => <li>{n}</li>);
  require('./tests').run();
});





//////////////////////////////
//          NOTES           //
//////////////////////////////

// var { h1, div, ul, li } = React.DOM

// var element = (
//   div({},
//     h1({}, "Hello"),
//     ul({},
//        li({}, "Cari with a C"),
//        li({}, "Hunter with an H"),
//        li({}, "Aly with an A, L, and Y")
//     )
//   )
// );

// var App = React.createClass({
//   render () {
//     return (
//       <div>
//         <h1>Hello from the Composite</h1>
//           <ul>
//             <li>Hello</li>
//             <li>Goodbye</li>
//           </ul>
//       </div>
//     )
//   }
// })

// App = React.createFactory(App);

// React.render(App({}), document.body);

///////////////////////////////////////

// var numbers = ['one', 'two', 'three'];

// var App = React.createClass({
//   render () {
//     var items = numbers.map((n) => <li>{n}</li>);
//     return (
//       <div>
//         <ul>
//           {items}
//         </ul>
//       </div>
//     );
//   }
// })

// React.render(<App/>, document.body);