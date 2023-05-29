
var someVar = document.getElementById('img-id').getAttribute('someVar')
// var someVar1 = document.getElementById('img-id').getAttribute('someVar1')

switch(someVar)
{
  case "index":
    var imageLocation = "./images/1.png"
    break;
  case "ff1":
    var imageLocation = "images/ff1.png"
    break;
  case "gf1":
    var imageLocation = "images/gf1.jpeg" 
    break;


}



const panoramaImage = new PANOLENS.ImagePanorama(imageLocation);
const imageContainer = document.querySelector(".image-container");

const viewer = new PANOLENS.Viewer({
  container: imageContainer,
  
});

viewer.add(panoramaImage);
