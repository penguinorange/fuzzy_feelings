

//call reload on page load
reload();

//add click functionality to radio buttons
Array.from(document.querySelectorAll('input[type="radio"]')).forEach(function (item, index) {
  item.addEventListener('click', save);
});

//Save Values
function save() {
  //Radiobuttons  
  var g1 = document.querySelector('input[name=radio]:checked');
  console.log(this)
  // the line below is an if else statement --> look up "ternary"
  // g1 = (g1) ? g1.value : '';   <------ this line of code is the same as the 5 lines immediately below
  if (g1) {
    g1 = g1.value
  } else {
    g1 = "";
  }
  console.log(g1)
  localStorage.setItem("g1", g1);
}
//Restoring saved Values
function reload() {
  // Radiobuttons
  // get a list of DOM elements
  // document.getElementById("radio-default").addEventListener("click", myFunction);

  // function myFunction() {
  //   $("#main-image").attr("src", "Assets/purrfect.gif");
  // }
  var G1 = Array.from(document.getElementsByName('radio'));
  var val1 = localStorage.getItem('g1');
  console.log(val1);
  for (var i = 0; i < G1.length; i++) {
    if (G1[i].value == val1) {
      G1[i].checked = true;
    }
  }
  console.log(animal, motive)
  console.log(giphyAPI)
  if (val1 === "motivational") {
    giphyAPI();
  }
  if (val1 === "animal") {
    animalAPI();
  }
}


// Event listener for our motive-button
$("#motive").on("click", giphyAPI);

  function giphyAPI() {

  var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=1OJfQRjf1GxgJO2SDQH5dAf6cVwWsNW0&q=motivation&limit=50&offset=0&rating=pg-13&lang=en";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    // After the data from the AJAX request comes back

    var imageArr = response.data;
    console.log(imageArr);

    // Generate random index based on number of keys
    var randIndex = Math.floor(Math.random() * imageArr.length);
    console.log(randIndex);

    var randImage = imageArr[randIndex].images.original.url;
    console.log(randImage);

    var imageUrl = randImage;

    $("#main-image").attr("src", imageUrl);
  });
  }



$("#animal").on("click", animalAPI)

  function animalAPI() {

    var queryURL = "https://api.tenor.com/v1/search?key=XZCXO6QH7OGC&q=animal";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    // After the data from the AJAX request comes back

    var imageArr = response.results;
    console.log(imageArr);

    // Generate random index based on number of keys
    var randIndex = Math.floor(Math.random() * imageArr.length);
    console.log(randIndex);

    var randImage = imageArr[randIndex].media[0].gif.url;
    console.log(randImage);

    var imageUrl = randImage;

    $("#main-image").attr("src", imageUrl);
  });


  }

