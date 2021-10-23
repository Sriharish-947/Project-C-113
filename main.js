function preload()
{

}


function setup()
{
    canvas = createCanvas(1000, 1000);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}


function draw()
{
    fill("green");
    stroke("black");
    rect(875, 200, 50, 400);
    rect(75, 200, 50, 400);
    rect(100, 175, 800, 50);
    rect(100, 575, 800, 50);
    fill("red");
    stroke("black");
    circle(100, 200, 100);
    circle(100, 600, 100);
    circle(900, 600, 100);
    circle(900, 200, 100);


    image(video, 350, 250, 300, 300);
}