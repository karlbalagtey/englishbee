		var newGameBTN = document.getElementById("newGame");

		function newGame(){
			var menu = document.getElementById("navID");
			var playagainHide = document.getElementById("playAgainLost");
			var playagain = document.getElementById("playAgain");
			var gameInterface = document.getElementById("gameInterface");
			point = 0;
			playagainHide.style.display = "none";
			playagain.style.display = "none";
			gameInterface.style.display = "none";
			menu.style.display = "none";
			setName();
		}
		function getName(namePlayer){
			return namePlayer;
		}
		function setName(playerName){
			var playerNameBox = document.getElementById("playerName");
			playerNameBox.style.display = "block";

			var thePlayer = playerName;

		}
		function setLevel(level){
			var gamenav = document.getElementById("navID");
			var levelSet = document.getElementById("difficultyLevel");
			levelSet.style.display = "block";
			gamenav.style.display = "none";

			if(level === 'easy'){
				levelSet.style.display = "none";
				startGame('easy');
			}else if(level === 'medium'){
				levelSet.style.display = "none";
				startGame('medium');
			}else if(level === 'hard'){
				levelSet.style.display = "none";
				startGame('hard');
			}else{
			}

		}
		function checkAnswer(answer){
			var imgAnswer = document.getElementById("imgAnswer");

			if(imgAnswer.src.indexOf("easyimg1.png") != -1){
				if(answer === 'cat'){
					alert("Correct!");
					addPoint(1);
					startGame('easy');
				}else{
					counter(1);
					alert("Wrong Answer");
				}
			}else if(imgAnswer.src.indexOf("easyimg2.png") != -1){
				if(answer === 'dog'){
					alert("Correct!");
					addPoint(1);
					startGame('easy');
				}else{
					counter(1);
					alert("Wrong Answer");
				}
			}else if(imgAnswer.src.indexOf("easyimg3.png") != -1){
				if(answer === 'light'){
					alert("Correct!");
					addPoint(1);
					startGame('easy');
				}else{
					counter(1);
					alert("Wrong Answer");
				}
			}else if(imgAnswer.src.indexOf("easyimg4.png") != -1){
				if(answer === 'sky'){
					alert("Correct!");
					addPoint(1);
					startGame('easy');
				}else{
					counter(1);
					alert("Wrong Answer");
				}
			}else if(imgAnswer.src.indexOf("easyimg5.png") != -1){
				if(answer === 'egg'){
					alert("Correct!");
					addPoint(1);
					startGame('easy');
				}else{
					counter(1);
					alert("Wrong Answer");
				}
			}else if(imgAnswer.src.indexOf("mediumimg1.png") != -1){
				if(answer === 'religion'){
					alert("Correct!");
					addPoint(1);
					startGame('medium');
				}else{
					counter(1);
					alert("Wrong Answer");
				}
			}else if(imgAnswer.src.indexOf("mediumimg2.png") != -1){
				if(answer === 'peace'){
					alert("Correct!");
					addPoint(1);
					startGame('medium');
				}else{
					counter(1);
					alert("Wrong Answer");
				}
			}else if(imgAnswer.src.indexOf("mediumimg3.png") != -1){
				if(answer === 'security'){
					alert("Correct!");
					addPoint(1);
					startGame('medium');
				}else{
					counter(1);
					alert("Wrong Answer");
				}
			}else if(imgAnswer.src.indexOf("mediumimg4.png") != -1){
				if(answer === 'government'){
					alert("Correct!");
					addPoint(1);
					startGame('medium');
				}else{
					counter(1);
					alert("Wrong Answer");
				}
			}else if(imgAnswer.src.indexOf("mediumimg5.png") != -1){
				if(answer === 'pyschology'){
					alert("Correct!");
					addPoint(1);
					startGame('medium');
				}else{
					counter(1);
					alert("Wrong Answer");
				}
			}else if(imgAnswer.src.indexOf("hardimg1.png") != -1){
				if(answer === 'vacation'){
					alert("Correct!");
					addPoint(1);
					startGame('hard');
				}else{
					counter(1);
					alert("Wrong Answer");
				}
			}else if(imgAnswer.src.indexOf("hardimg2.png") != -1){
				if(answer === 'occupation'){
					alert("Correct!");
					addPoint(1);
					startGame('hard');
				}else{
					counter(1);
					alert("Wrong Answer");
				}
			}else if(imgAnswer.src.indexOf("hardimg3.png") != -1){
				if(answer === 'soundtrack'){
					alert("Correct!");
					addPoint(1);
					startGame('hard');
				}else{
					counter(1);
					alert("Wrong Answer");
				}
			}else if(imgAnswer.src.indexOf("hardimg4.png") != -1){
				if(answer === 'complicated'){
					alert("Correct!");
					addPoint(1);
					startGame('hard');
				}else{
					counter(1);
					alert("Wrong Answer");
				}
			}else if(imgAnswer.src.indexOf("hardimg5.png") != -1){
				if(answer === 'hole'){
					alert("Correct!");
					addPoint(1);
					startGame('hard');
				}else{
					counter(1);
					alert("Wrong Answer");
				}
			}else {
				alert("Cannot Match Source");
			}
		}
		var point = 0;
		function addPoint(x){
			var score = document.getElementById("playerScore");
			var playagain = document.getElementById("playAgain");
			var audioBox = document.getElementById("audioBox1");
			point = point + x;

			score.innerHTML = "Score: " + point;
			if(point === 5){
				alert("You won the game!");
				playagain.style.display = "block";
				audioBox.innerHTML = "<audio autoplay><source src='audio/victory.mp3' type='audio/mpeg'>Your browser does not support the audio element.</audio>";
			}
		}
		var ctr = 0;
		function counter(x){
			var score = document.getElementById("playerScore");
			var playagainLost = document.getElementById("playAgainLost");
			var answerBOX = document.getElementById("answerBOX");
			var audioBox = document.getElementById("audioBox2");
			ctr = ctr + x;

			if(ctr === 7){
				alert("You lost the game!");
				playagainLost.style.display = "block";
				answerBOX.style.display = "none";
				audioBox.innerHTML = "<audio autoplay><source src='audio/goodbye.mp3' type='audio/mpeg'>Your browser does not support the audio element.</audio>";	
			}
		}
		function startGame(level){
			var gameInterface = document.getElementById("gameInterface");
			var nameHolder = document.getElementById("nameHolder");
			var score = document.getElementById("playerScore");
			var imgHolder = document.getElementById("imgHolder");
			playerName.style.display = "none";
			gameInterface.style.display = "block";
			nameHolder.innerHTML = "Player Name: " + getName(document.getElementById('nameValue').value);

			if(level === 'easy'){
				imgHolder.innerHTML = "<img id='imgAnswer' src='img/easyimg"+randomNum()+".png' class='imgHolder'/>";	
			}else if(level === 'medium'){
				imgHolder.innerHTML = "<img id='imgAnswer' src='img/mediumimg"+randomNum()+".png' class='imgHolder'/>";	
			}else if(level === 'hard'){
				imgHolder.innerHTML = "<img id='imgAnswer' src='img/hardimg"+randomNum()+".png' class='imgHolder'/>";	
			}
			
		}
		function startGame2(level){
			var gameInterface = document.getElementById("gameInterface");
			var nameHolder = document.getElementById("nameHolder");
			var score = document.getElementById("playerScore");
			var imgHolder = document.getElementById("imgHolder");
			var playagain = document.getElementById("playAgain");
			var playagainLost = document.getElementById("playAgainLost");
			var answerBOX = document.getElementById("answerBOX");
			point = 0;
			ctr = 0;
			answerBOX.style.display = "block";
			playagain.style.display = "none";
			playagainLost.style.display = "none";
			playerName.style.display = "none";
			gameInterface.style.display = "block";
			nameHolder.innerHTML = "Player Name: " + getName(document.getElementById('nameValue').value);

			if(level === 'easy'){
				imgHolder.innerHTML = "<img id='imgAnswer' src='img/easyimg"+randomNum()+".png' class='imgHolder'/>";	
			}else if(level === 'medium'){
				imgHolder.innerHTML = "<img id='imgAnswer' src='img/mediumimg"+randomNum()+".png' class='imgHolder'/>";	
			}else if(level === 'hard'){
				imgHolder.innerHTML = "<img id='imgAnswer' src='img/hardimg"+randomNum()+".png' class='imgHolder'/>";	
			}
			
		}
		function getRandomNum() {
			return Math.floor((Math.random() * 5) + 1);
		}

		function hideMenu(id){
			var hideThis = document.getElementById(id);
			hideThis.style.display = "none";
		}
		function showInstr(id){
			id.style.display = "block";
		}
		function playMusic(){
			var music = document.getElementById("audioTag");
			music.play();
		}
		function pauseMusic(){
			var music = document.getElementById("audioTag");
			music.pause();
		}

		var uniqueRandoms = [];
		var numRandoms = 6;

		function randomNum() {
		    // refill the array if needed
		    if (!uniqueRandoms.length) {
		        for (var i = 1; i < numRandoms; i++) {
		            uniqueRandoms.push(i);
		        }
		    }
		    var index = Math.floor(Math.random() * uniqueRandoms.length);
		    var val = uniqueRandoms[index];

		    // now remove that value from the array
		    uniqueRandoms.splice(index, 1);

		    return val;

		}