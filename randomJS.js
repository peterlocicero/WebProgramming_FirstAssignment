var word;



async function asyncCall() {

//calls the random word api 
//i believe the key expires every 24 hours but isn't connected to a card so bots can enjoy this
fetch('https://random-word-api.herokuapp.com/word?key=XBRE76AL&number=2')
  .then((response) => {
  	// console.log(response)
    return response.json();
  })

  .then((getWord) => {
  	word = getWord[0];
    document.getElementById("word").innerHTML = word;
    console.log(document.getElementById("displayWord"));
    document.getElementById("displayWord").src = "https://artii.herokuapp.com/make?text="+word+"";
document.getElementById("displayWord").width = countWord(word);


//sets background color
document.body.style.backgroundColor = "rgb("+ Math.floor(Math.random() *255)+","+Math.floor(Math.random() *255)+","+(Math.floor(Math.random() *255))+")";
document.body.style.backgroundColor = "rgb("+ (Math.floor(Math.random() *255)+100)+","+(Math.floor(Math.random() *255)+100)+","+(Math.floor(Math.random() *255)+100)+")";


//doesn't work
//  fetch("https://artii.herokuapp.com/make?text="+word+"", {
//  	method: 'get',
//   mode: 'no-cors',
// })
//   .then((response) => {
//   	return response.json;
//   })
//   .then(data => {
//   		console.log(data)
  			
//  		 })

//   .then(text => {
//   	console.log(text);
//   })

//contacts rapid api and gets the definition. Some words the random word api has, it doesn't but does a pretty good job.
// i used a nested fetch because for some reason word is null outside of the first fetch even thoughh i stored it in a variable?
fetch("https://wordsapiv1.p.rapidapi.com/words/"+word+"/definitions", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
		
		"x-rapidapi-key": "goes here"
	}
})
.then(response => {
	console.log(response);
	return response.json();
})
.then(definition => {
	console.log(definition);
	document.getElementById("definition").innerHTML = (definition.definitions[0].definition);

})
  });
}

//attempting to center the iframe in the jumbotron

function countWord(word){


	if (word.length >= 0 && word.length < 5){
		return '16%';
	}

	if (word.length >= 6 && word.length <= 9){
		return '29%';
	}


	else if (word.length >= 10 && word.length <= 13){
		return '35%';
	}

	else if (word.length >= 13 && word.length <= 16){
		return '39%'
	}


	else if (word.length >= 16 && word.length <= 20){
		return '41%'
	}

	else{
		return '55%';
	}


}