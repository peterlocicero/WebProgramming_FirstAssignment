// const fs = require('fs');
//
// let jsonData= fs.readFileSync('questions.json');
// let questions= JSON.parse(jsonData);

let categories = []
let jeopardy = [];
let jepArray = [];



questions.forEach( function(element, index) {
    if (categories.includes(element.category)){

    }
    else{
    categories.push(element.category);
}
});

//
// for (var i = 0; i < 50; i++){
//   // console.log(questions[i].category);
//   if (jeopardy.some(item => item.category === questions[i].category)) {
// }
//   else{
//      jeopardy.push(createObject(questions[i]));
//    }
// }
//

jeopardy = categorizedQuestions(questions);


function categorizedQuestions(questions) {
  return  questions.reduce((obj, {category, question, value, answer}) => {
    const questionObject = {question, value, answer}
    obj[category] = (obj[category] || []).concat(questionObject);
    return obj;
  }, {});
}




function openNav(jQuestion) {
document.getElementById('light').style.display='block';
document.getElementById('light').innerHTML=(jQuestion);
document.getElementById('fade').style.display='block';


}

function closeNav() {
  document.getElementById('light').style.display='none';
  document.getElementById('fade').style.display='none';
}


var light="light";
  document.getElementById(`light`).addEventListener("click", function(){ closeNav() });

for (var i =0; i < 6; i++){
  let randomNumber = Math.floor(Math.random() * categories.length);

  while (jeopardy[categories[randomNumber]].length != 5){
    randomNumber = Math.floor(Math.random() * categories.length);
  }

  jepArray[i] =jeopardy[categories[randomNumber]];

  document.getElementById('title'+i).innerHTML+= `<h1 class="categoryText"> ${categories[randomNumber]}</h1>`;

  jepArray[i].forEach( function(element, index) {
    // jepArray[i][index].question += (` Answer: ${jepArray[i][index].answer}`)
    document.getElementById(i).innerHTML+= `<div onclick="openNav(${jepArray[i][index].question})"> ${jepArray[i][index].value} </div>`
  });
}

console.log(jepArray);
