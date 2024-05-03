// Prompt user for froyo order
const userInputString = prompt(
  "Please enter your foryo order separated by commas:",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

const promptArray = userInputString.split(",");


function displayOrder(orderArray) {
  const userOrder = {};
  for (let i = 0; i < orderArray.length; i++) {
    if (userOrder[orderArray[i]]) {
      userOrder[orderArray[i]] = userOrder[orderArray[i]] + 1;
    } else {
      userOrder[orderArray[i]] = 1;
    }
  }
  return userOrder;
}


