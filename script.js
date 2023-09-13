const players = ["John", "Bob", "Alice", "Poppy"];
const person = {
  name: "John Doe",
  age: 80,
};

// Create a reference to players
const team = players;

// Create a shallow copy of players using the spread operator
const team1 = [...players];

// Create a shallow copy of the person object using Object.assign
const cap1 = Object.assign({}, person);

// You can also use the object destructuring to create a shallow copy of the person object
// const cap1 = { ...person };

// Log the variables to verify the results
console.log(team);   // This will refer to the original players array
console.log(team1);  // This will be a copy of the players array
console.log(cap1);   // This will be a copy of the person object