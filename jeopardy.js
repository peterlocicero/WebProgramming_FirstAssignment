// const fs = require('fs');

// let jsonData = fs.readFileSync('questions.json');
// console.log(jQuestions);
// let questions = JSON.parse(jQuestions);
let categoryArray = [];
let topics = [];




questions.forEach( function(element, index) {
    if (categoryArray.includes(element.category)){
    }
    else{
    categoryArray.push(element.category);
}
});


function groupBy(objectArray, property) {
  return objectArray.reduce(function (acc, obj) {
    let key = obj[property]
    if (!acc[key]) {
      acc[key] = []
    }
    acc[key].push(obj)
    return acc
  }, {})
}

let questionArray = groupBy(questions, 'category')

for (var i=0; i < 6; i++){
  topics.push([Math.floor(Math.random() * categoryArray.length) ]);
  document.getElementById(`div${i+1}`).innerHTML =questionArray[categoryArray[topics[i]]][0].category;
}

// for (var j=6; i<12; j++){
//     document.getElementById(`div${j+1}`).innerHTML = questionArray[categoryArray[topics[0]]][0].value;
// }

var c = 0;
var d = 0;
var e = 0;
var f= 0 ;
var g = 0;
var h = 0;

for (var j=7; j< 43; j+=6){
  if (c < questionArray[categoryArray[topics[0].length]])
  document.getElementById(`div${j}`).innerHTML = questionArray[categoryArray[topics[0]]][c].value;
  console.log(questionArray[categoryArray[topics[0]]][c].value);
  c++;
}

for (var j=8; j< 43; j+=6){
  document.getElementById(`div${j}`).innerHTML = questionArray[categoryArray[topics[0]]][d].value;
  console.log(questionArray[categoryArray[topics[0]]][d].value);
  d++;
}
for (var j=9; j< 43; j+=6){
  document.getElementById(`div${j}`).innerHTML = questionArray[categoryArray[topics[0]]][e].value;
  console.log(questionArray[categoryArray[topics[0]]][e].value);
  e++;
}
for (var j=10; j< 43; j+=6){
  document.getElementById(`div${j}`).innerHTML = questionArray[categoryArray[topics[0]]][f].value;
  console.log(questionArray[categoryArray[topics[0]]][f].value);
  f++;
}
for (var j=11; j< 43; j+=6){
  document.getElementById(`div${j}`).innerHTML = questionArray[categoryArray[topics[0]]][g].value;
  console.log(questionArray[categoryArray[topics[0]]][g].value);
  g++;
}
for (var j=12; j< 43; j+=6){
  document.getElementById(`div${j}`).innerHTML = questionArray[categoryArray[topics[0]]][h].value;
  console.log(questionArray[categoryArray[topics[0]]][h].value);
  h++;
}




console.log(c);
//console.log(questionArray[categoryArray[topics[0]]][0].value);





// topics.forEach(function (element, index) {
//   console.log(element[]);
// });

// console.log(groupedPeople['HISTORY'].length);
// groupedPeople[categoryArray[0]].forEach( function(element, index){
//   console.log(element.question, element.answer);
// })
