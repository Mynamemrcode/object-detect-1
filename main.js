Status = ""; 
object=[];
image = document.getElementById("id");     
function me() {
    window.location = "me.html"
}
function bd() {
    window.location = "bd.html"
}
function comp() {
    window.location = "comp.html"
}
function plan() {
    window.location = "plan.html"
}
function heli() {
    window.location = "heli.html"
}
function preload() {

}
function setup() {
    canvas = createCanvas(800,500);
    canvas.center();

    obdt = ml5.objectDetector('cocossd', modeload);

    document.getElementById("stat").innerHTML = "Status : Detecting Objects";
}
function modeload() {
    console.log("Loaded");
    Status=true;
    obdt.detect(image, got);
}
function got(result, error) {
    if(error) {
        console.log(error);
    }
    if(result) {
        console.log(result);
        object = result;
    }

}
function draw() {
    if(Status != "") {
        for(var i=0; i < object.length; i++){
            document.getElementById("stat").innerHTML = "Status : Detected Object, Highlighting";
            fill("blue");
            percentenator = floor(object[i].confidence * 100);
            console.log(object[i].confidence);
            text(object[i].label+percentenator+"%"+ object[i].x, object[i].y);
            noFill()
            stroke("blue");
            rect(object[i].x, object[i].y, object[i].width, object[i].height);
        }

    }
}