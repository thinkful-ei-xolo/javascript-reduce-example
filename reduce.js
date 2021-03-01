const prices = [4,5.5,7.2,8.8,100];

let total = 0;

for(let price of prices){
    total +=price;
}

let reduceTotal = prices.reduce((acc,price)=> acc+price,1000);

//console.log(`Total price: ${total}`);
//console.log(`Reduced total price is ${reduceTotal}`);

let people = [
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 20 },
    { name: 'Jane', age: 20 },
    { name: 'Jane', age: 20 },
    { name: 'Jane', age: 20 },
  ];
  
  function groupBy(objectArray, property) {
    return objectArray.reduce(function (acc, obj) {
      let key = obj[property]
      console.log(key);
      if (!acc[key]) {
        acc[key] = []
      }
      acc[key].push(obj)
      return acc
    },{})
  }
  
  let groupedPeople = groupBy(people, 'age')
  console.log(groupedPeople);