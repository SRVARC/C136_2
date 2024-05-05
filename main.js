status = "";

function preload()
{

}

function setup()
{
    canvas = createCanvas(480,450);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video,0,120,480,450);
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("Status").innerHTML = "Status : Detecting Objects";
    document.getElementById("search").value;
}

function modelLoaded()
{
    console.log("Model Loaded !");
    status = true;
}