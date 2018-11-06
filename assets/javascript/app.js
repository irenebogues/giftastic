// Giphy API Key: PXyBdtBKhwr5zsbH773K4W58yrUOQG3r


 // Start with a short Array for Good Doggies
  var doggies = ["pug", "labrador", "pitbull"];


// auto create dynamic doggie buttons when user type their favorite dogs
function doggieExpress(dogName){

    var doggie = $(this).attr("data-name");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + doggie + "&api_key=PXyBdtBKhwr5zsbH773K4W58yrUOQG3r&limit=10";


$.ajax({
url: queryURL,
method: "GET"
}).done(function (response) {

   // console.log(queryURL);

   var doggieDiv = $("<div class='dog'>");
   var results = response.data;

   $("#dog-view").empty();
   for (var i = 0; i < doggies.length; i++) {

 //Filtering for an appropriate rating (PG-13 and under)
 if (results[i].rating !== "r" && results[i].rating !== "pg-13") {

    // Generating div with class "item"
    var doggieDiv = $("<div class='item'>");

    //Generating a div to hold the giphys
    var doggieDiv = $("<div>");

    //Storing rating response
    var rating = response.data.rating;

    //Fetching URL for image
    var imgURL = response.rating;

    //Generating <p> and rating
    var p = $("<p>").text("Rating: " + results[i].rating);

    //Generating image tag
    var doggie = $("<img>");

    //Defining src attribute of the images pulled
    doggie.attr("src", results[i].images.fixed_height.url);

    //Appending rating to giphy
    doggieDiv.append(p);
    doggieDiv.append(doggie);

    //Setting src and URL attributes to giphy
    var image = $("<img>").attr("src", imgURL);

    //Appending the giphy
    doggieDiv.append(image);

    //Prepending new giphys above previosly called giphys
    $("#dog-view").prepend(doggieDiv);
  }
}
});
};

//Calling renderButtons function
function renderButtons() {

//Prevents repeated buttons -- Do not remove.
$("#faveDogs").empty();

//For Loop
for (var i = 0; i < doggies.length; i++) {

//Generating buttons
var a = $("<button>");
//Adding class of dog
a.addClass("doggie");
//Adding data-attribute
a.attr("data-name", doggies[i]);
//Adding button text
a.text(doggies[i]);
//Appending the button to HTML
$("#faveDogs").append(a);
}
}

//On.click function; prevents duplication of initial buttons
$("#add-dog").on("click", function (event) {
event.preventDefault();

//Stores user input from the textbox
var doggie = $("#dog-input").val().trim();

//Removes previous giphys on.click
$("doggie").empty();

//Adds Users input from the textbox to array
doggies.push(doggie);

//Calls renderButtons function for User input buttons
renderButtons();
});

//Adds a click event listener to elements with a class of "dog"
$(document).on("click", ".doggie", displayGifInfo);

//Calls the renderButtons function for the intial buttons as defined in the array
renderButtons();



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
