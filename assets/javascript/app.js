// Giphy API Key: PXyBdtBKhwr5zsbH773K4W58yrUOQG3r


 // Start with a short Array for Good Doggies

    var doggies = ["pug", "labrador", "pitbull"];

// auto create dynamic doogie buttons when user type their favorite dogs
for (var i = 0; i < doggies.length; i++) {
    //console.log (doggies.length);

    var newDoggie = $("<button>");
    newDoggie.addClass ("doggieButton");
    newDoggie.attr("data-name", doggies[i]);
    newDoggie.text(doggies[i]);
    $("#buttonAppear").append(newDoggie);

}

$(".doggieButton").on("click", function (){

// populate the array items to the doggie-btns

    var dog= $(this).attr("data-name");
    var queryURL = "https:api.giphy.com/v1/gifs/search?q=" + dog + "&api_key=PXyBdtBKhwr5zsbH773K4W58yrUOQG3r";
    //Ajax Call HERE
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
    for(var i = 0; i < results.length; i++){
            var dogDiv = $("<div>");
            var p = $("<p>");
            // console.log(p)
            p.text("Rating: " + results[i].rating);
            // console.log(results[i].rating)
            var dogImg = $("<img>");
            dogImg.attr("src", results[i].images.fixed_height.url);
            console.log(results[i].images.fixed_height.url);
            dogImg.append(p); 
            dogDiv.append(dogImg);
             // prepend to the dom
            $("#doggieGif").prepend(dogImg);
        }
    });
});


$("#add-doggie").on("click", function (event){
    // console.log(event)
    event.preventDefault();
    // grab the input from the searchbox
    var newDoggie = $("#search").val().trim();
    // add search term to a new button and append to html
    var doggieButton = $("<button>")
    // console.log(doggieButton);
    doggieButton.addClass("cartoonButton");
    // give the new button an attribute of its index
    doggieButton.attr("data-name", newDoggie)
    // give the button its text
    doggieButton.text(newDoggie)
    // console.log(doggieButton)
    $("#buttonDoggie").append(doggieButton)
    // console.log(newDoggie);
    // push new search to the topics array 
    topics.push(newDoggie);
    console.log(dog);
});


//if doogie-btn is clicked
//function
        // Get the GIF for the corresponding topic-btn
        // display 10 static imgs in the page
        // if img is clicked and !animate 
            // change static image for animated gif
        // if img is clicked and animate
            // change animated gif to static img
    // if btn from the form is clicked
        // get input value
        // push it to the topic-array
