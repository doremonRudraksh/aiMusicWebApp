peter_pan_song  = "";
harry_potter_song  = "";


function setup(){
    canvas = createCanvas(600,531);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);

}

function preload(){
    harry_potter_song = loadSound("music.mp3");
    peter_pan_song = loadSound("music2.mp3");
}

function draw(){
    image(video, 0, 0, 600, 531);
}
