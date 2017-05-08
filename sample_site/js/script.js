
var myImage = document.getElementById("communityPics");

var imageArray = ["images/healthy-vegetables-restaurant-nature.jpg", "images/bread.jpg","images/eggplants.jpg","images/garden.jpg", "images/garden_2.jpg","images/herb-wall.jpg", "images/leaves.jpg", "images/harshal-hirve-44494.jpg", "images/peter-wendt-123928.jpg", "images/nachos.jpg", "images/irina-blok-13584.jpg", "images/food-81981.jpg", "images/healthy-vegetables-restaurant-nature.jpg"];
var imageIndex = 0;
//set image src to Array index
function changeImage() {
    myImage.setAttribute("src",imageArray[imageIndex]);
    imageIndex++;
    if (imageIndex >= imageArray.length) {
        imageIndex = 0;
    }
}

// setInterval 5 seconds
var intervalInterrupt = setInterval(changeImage,4000);


//add validation for forms
//add events for active and blur on forms
