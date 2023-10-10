const players = ["John", "Bob", "Alice", "Poppy"];
const person = {
  name: "John Doe",
  age: 80,
};

// Create a reference to the array players
const team = players;

// Create a copy of the array players using the spread operator
const team1 = [...players];

// Create a copy of the object person using the spread operator
const cap1 = { ...person };