


// Event listener for our motive-button
$("#motive").on("click", function () {

    // Storing our giphy API URL for a random image
    // var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=3tLQ2TOR00NfbftDClkOtbHe3G2oTIy4";

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
});

$("#animal").on("click", function () {

    // Storing our giphy API URL for a random image
    // var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=3tLQ2TOR00NfbftDClkOtbHe3G2oTIy4";

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
});


