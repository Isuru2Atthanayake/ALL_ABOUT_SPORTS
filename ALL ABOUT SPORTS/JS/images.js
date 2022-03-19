

function myFunction(select) {
  if (select == 1) {
    document.getElementById("largeimg").src = "Photos/1.jpg";
     
    document.getElementById("sport-image-description").style.display = "block";
    document.getElementById("displaytext").innerHTML = "<h1>Badminton </h1><br>Badminton is a racquet sport played using racquets to hit a shuttlecock across a net. Although it may be played with larger teams, the most common forms of the game are singles (with one player per side) and doubles (with two players per side).Games employing shuttlecocks have been played for centuries across Eurasia,but the modern game of badminton developed in the mid-19th century among the British as a variant of the earlier game of battledore and shuttlecock.";

  } else if (select == 2) {
    document.getElementById("largeimg").src = "Photos/2.jpg";
     
    document.getElementById("sport-image-description").style.display = "block";
    document.getElementById("displaytext").innerHTML = "<h1>Football </h1><br>commonly known as simply football or soccer, is a team sport played with a spherical ball between two teams of 11 players. It is played by approximately 250 million players in over 200 countries and dependencies, making it the world's most popular sport.First played in Mid-19th century England and Team members are 11 per side (including goalkeeper) equipment used is a football and 2 goals eithersides";

  } else if (select == 3) {
    document.getElementById("largeimg").src = "Photos/3.jpg";
     
    document.getElementById("sport-image-description").style.display = "block";
    document.getElementById("displaytext").innerHTML = "<h1>Hockey</h1><br>Hockey is a sport in which two teams play against each other by trying to manoeuvre a ball or a puck into the opponent's goal using a hockey stick. There are many types of hockey such as bandy, field hockey, ice hockey and rink hockey.The first recorded use of the word hockey is in the 1773 book Juvenile Sports and Pastimes, to Which Are Prefixed, Memoirs of the Author: Including a New Mode of Infant Education by Richard Johnson (Pseud. Master Michel Angelo)";
  }else if (select == 4){
      document.getElementById("largeimg").src = "Photos/4.jpg";
     
    document.getElementById("sport-image-description").style.display = "block";
    document.getElementById("displaytext").innerHTML = "<h1>cricket </h1><br>cricket have been invented during Saxon or Norman times by children living in the Weald, an area of dense woodlands and clearings in south-east England.earlier it was spelled creckett.Cricket is a bat-and-ball game played between two teams of eleven players on a field at the centre of which is a 22-yard (20-metre) pitch with a wicket at each end, each comprising two bails balanced on three stumps They communicate with two off-field scorers who record the match's statistical information";
  } else if (select == 5) {
    document.getElementById("largeimg").src = "Photos/5.jpg";
     
    document.getElementById("sport-image-description").style.display = "block";
    document.getElementById("displaytext").innerHTML = "<h1> Basket ball </h1><br> Basketball is a game played between two teams of five players each on a rectangular court, usually indoors. Each team tries to score by tossing the ball through the opponent's goal, an elevated horizontal hoop and net called a basket.December 21, 1891; 129 years ago. Springfield, Massachusetts, U.S.";
  } else {

  }
}

function resetall() {
  var elements = document.getElementsByClassName('container1');
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.color = "black";
  }
  document.body.style.backgroundColor = "white";
  document.getElementById("sport-image-description").style.display = "none";
}

function colourchange(SelectedColor)
{
    document.bgColor=SelectedColor;
}

function changeColor(colour) {
  var elements = document.getElementsByClassName('container1');
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.color = colour;
  }
}

function fontcolor(form) {
  var selected = fontColor[fontColor.selectedIndex].value;

  if (selected == "color1") {
    changeColor("#ab5454");
  } else if (selected == "color2") {
    changeColor("#19bcf7");
  } else if (selected == "color3") {
    changeColor("#77188c");
  } else if (selected == "color4") {
    changeColor("#fafafa");
  } else if (selected == "color5") {
    changeColor("#d9161c");
  } else {

  }
}





	