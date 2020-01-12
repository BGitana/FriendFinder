// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially set up to equal to a "dummy" customer.
// But it could have been an empty array as well.
// ===============================================================================
var friends = [
  {
    name: "Owen",
    photo: "https://media.giphy.com/media/1skTYzBWynK1y/giphy.gif",
    scores: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
  },
  {
    name: "Pavan",
    photo: "https://media.giphy.com/media/7q9LxggEzRiOk/giphy.gif",
    scores: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
  },
  {
    name: "Angel",
    photo: "https://media.giphy.com/media/AfpEltQudBg5y/giphy.gif",
    scores: [9, 1, 4, 4, 5, 1, 2, 5, 4, 1]
  },
  {
    name: "Karina",
    photo: "https://media.giphy.com/media/8SCntm1JiCS2s/giphy.gif",
    scores: [5, 1, 4, 3, 2, 6, 9, 8, 9, 9]
  },
  {
    name: "Tommy",
    photo: "https://media.giphy.com/media/xOBhCxh7Dk6SA/giphy.gif",
    scores: [5, 1, 4, 3, 2, 6, 9, 8, 9, 9]
  },
  {
    name: "Lisa",
    photo: "https://media.giphy.com/media/2ca9aemQxIQXS/giphy.gif",
    scores: [5, 1, 4, 3, 2, 6, 9, 8, 9, 9]
  },
  {
    name: "Nick",
    photo: "https://media.giphy.com/media/9OnUuWyjZ4VSU/giphy.gif",
    scores: [5, 1, 4, 3, 2, 6, 9, 8, 9, 9]
  },
  {
    name: "Jason",
    photo: "https://media.giphy.com/media/9M36yTC8BlRPG/giphy.gif",
    scores: [5, 1, 4, 3, 2, 6, 9, 8, 9, 9]
  },
  {
    name: "Nate",
    photo: "https://media.giphy.com/media/6mwSgAGomAo7K/giphy.gif",
    scores: [5, 1, 4, 3, 2, 6, 9, 8, 9, 9]
  },
  {
    name: "Ken",
    photo: "https://media.giphy.com/media/tTLvTaZruCBoc/giphy.gif",
    scores: [5, 1, 4, 3, 2, 6, 9, 8, 9, 9]
  }
];

//Below to export the array. This makes it accessible to other files using require.
module.exports = friends;
