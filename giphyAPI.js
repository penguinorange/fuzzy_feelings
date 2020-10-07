


// Event listener for our motive-button
$("#motive").on("click", function () {

    // Storing our giphy API URL for a random image
    var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=3tLQ2TOR00NfbftDClkOtbHe3G2oTIy4";

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




