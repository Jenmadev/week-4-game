  var targetNumber = 0;
  var imageArray = [
  "Assets/images/bluestone.jpg",
  "Assets/images/Diamond.jpg",
  "Assets/images/orangestone.jpg",
  "Assets/images/yellowdiamond.jpg"
];

  var wins = 0;
  var losses = 0;
  var counter = 0;

  for (var i = 0; i < 4; i++) {
    var imageCrystal = $("<img>"); //<img>
    imageCrystal.addClass("crystal-image"); //<img class="crystal-image">
    imageCrystal.attr("src", imageArray[i]); //<img class=.... src=....>
    $("#crystals").append(imageCrystal);
  }
  startGame();
	
	$(".crystal-image").on("click", function() {
	var crystalValue = $(this).attr("data-crystalvalue");
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    $("#guessTotal").text(counter);
    // alert("New score: " + counter);
    if (counter === targetNumber) {
      //alert("You win!");
      wins++;
      startGame();
    }

    else if (counter >= targetNumber) {
      // alert("You lose!!");
      losses++;
      startGame();
    }

  });	

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  } 

  function startGame(){
    //imageCrystal.attr("data-crystalvalue", getRandomInt(1,13));
    $(".crystal-image").each(function(i,l){
      $(l).attr("data-crystalvalue", getRandomInt(1,13));

    });
    targetNumber = getRandomInt(19,121);
    counter = 0;
    $("#numberToGuess").text(targetNumber);
    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#guessTotal").text(counter);
  }