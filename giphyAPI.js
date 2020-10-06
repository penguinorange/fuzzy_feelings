



// Event listener for our cat-button
$("#animal").on("click", function () {

    // Storing our giphy API URL for a random cat image
    var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=3tLQ2TOR00NfbftDClkOtbHe3G2oTIy4";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        // After the data from the AJAX request comes back

            // Saving the image_original_url property
            var imageUrl = response.data[0].images.downsized.url;

            // Creating and storing an image tag
            var catImage = $("<img>");

            // Setting the catImage src attribute to imageUrl
            catImage.attr("src", imageUrl);
            catImage.attr("alt", "cat image");

            // Prepending the catImage to the images div
            $("#images").prepend(catImage);
        });
    });




