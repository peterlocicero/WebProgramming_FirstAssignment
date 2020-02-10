cardArray = []
suitArray=["Hearts","Spades", "Diamonds","Clubs"];
valueArray= [" J", "Q", "K","A"];
var score = 0;
var dealerScore = 0;

//assigns the rest of the numbers to the valueArray because i'm lazy and don't want to write them out
for (var i =2; i <= 10; i++ ){
	valueArray.push(i);
}

//card class 
class Cards{
	constructor(suit,value){
		this.suit = suit;
		this.value = value;
		
	}
	print(){
		return(`${this.value} of ${this.suit}`);
	}

	//gets the appropiate symbol for the suit
	getSuit(){

		if (this.suit=='Spades'){
			return '♠';
		}

		else if (this.suit=='Hearts'){
			return '♥';
		}
		else if (this.suit=='Diamonds'){
			return '♦';
		}

		else if (this.suit=='Clubs'){
			return'♣';
		}


	}
	//ascii text display
	display(){
		return(` <br>    _________________________________ <br> 
			|${this.value} --------------------------------| <br>
			|----------------------------------| <br>
			|----------------------------------| <br>
			|----------------------------------| <br>
		 	|----------------${this.getSuit()}----------------| <br>
			|----------------------------------| <br> 
		 	|----------------------------------| <br> 
			|----------------------------------|  <br>
			|-------------------------------- ${this.value}| <br>
			|----------------------------------|<br>`);
	}

	points(){
		if(typeof this.value == 'number'){
			return this.value;
		}
		else if (this.value != 'A'){
			return 10;
		}
		else{
			if (score > 11){
				return 1;
			}
			else{
				return 11;
			}
		}
	}

}

function drawCard(){
	card = cardArray.shift();

	$('#cDisplay').html(card.display());
	$('#drawn').html(card.print());

	return card.points();

}



//takes the 4 suits and assigns each of them one of every type of value to get 52 cards
function createDeck(){
	for (var c =0; c < 4; c++){
		for (var v = 0; v < valueArray.length; v++){
			cardArray.push(new Cards(suitArray[c],valueArray[v]));
		}
	}
	cardArray.sort(function(a, b){return 0.5 - Math.random()});
}


createDeck();

document.getElementById("button1").addEventListener("click", function(){

	drawCard();

	$('#remaining').html(`${cardArray.length} cards remaining`);

	if(cardArray.length == 0){
		createDeck();
	}


}); 

document.getElementById("draw").addEventListener("click", function(){


	$("#button2").hide();
	$("#button3").hide();
	$("#button4").hide();
	$("#button6").hide();
	off();
	

}); 


document.getElementById("button5").addEventListener("click", function(){


	$("#button1").hide();

	$("#button2").show();
	$("#button3").show();
	$("#button4").hide();
	$("#button6").show();

	score += drawCard();

	$("#button2").attr("disabled", false);
	$("#button3").attr("disabled", false);


	$('#remaining').html(`The current score is: ${score}`);

	$("#button5").hide();

	

}); 


document.getElementById("button6").addEventListener("click", function(){


	$("#button1").show();

	$("#button2").hide();
	$("#button3").hide();
	$("#button4").hide();
	$("#button5").show();

	score = 0;

	drawCard();
	$('#remaining').html(`${cardArray.length} cards remaining`);


	$("#button6").hide();

	

}); 











document.getElementById("blackjack").addEventListener("click", function(){
	score += drawCard();
	$("#button1").hide();
	$("#button4").hide();
	$("#button5").hide();
	off();


});


document.getElementById("button2").addEventListener("click", function(){
	score += drawCard();
	$('#remaining').html(`The current score is: ${score}`);


	if (score > 21){
		$('#remaining').html(`You lose! You busted with ${score}`);
		$("#button2").attr("disabled", true);
		$("#button3").attr("disabled", true);
		$("#button4").show();

	}

	else if (score == 21){
		$('#remaining').html(`You Win!`);
		$("#button2").attr("disabled", true);
		$("#button3").attr("disabled", true);
		$("#button4").show();

	}

	if(cardArray.length == 0){
		createDeck();
	}

});

document.getElementById("button3").addEventListener("click", function(){
	if(cardArray.length == 0){
		createDeck();
	}

		$("#button2").attr("disabled", true);
		$("#button3").attr("disabled", true);

		while (dealerScore < 18){
			if(cardArray.length == 0){
				createDeck();
			}
			dealerScore += drawCard();
			console.log(dealerScore);
		}


		if (score > dealerScore){
			$('#remaining').html(`You Win! Player score: ${score} Dealer score: ${dealerScore}`);
			$("#button4").show();
		}

		else if (dealerScore > 21 && score <= 21){
			$('#remaining').html(`You Win! Player score: ${score} Dealer score: ${dealerScore}`);
			$("#button4").show();
		}

		else{
			$('#remaining').html(`You Lose! Player score: ${score} Dealer score: ${dealerScore}`);
			$("#button4").show();
		}



	});


document.getElementById("button4").addEventListener("click", function(){
		score = 0;
		dealerScore = 0;
		score += drawCard();
		$('#remaining').html(`The current score is: ${score}`);
		$("#button2").attr("disabled", false);
		$("#button3").attr("disabled", false);

		$("#button4").hide();

		if(cardArray.length == 0){
		createDeck();
	}

	});













function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}

