lips_x=0;
lips_y=0;

function preload(){
    lips =loadImage('https://i.postimg.cc/pyMyQpDH/Lipstick-removebg-preview.png')
}

function setup() {
canvas1=createCanvas(300,300)
canvas1.center();
video= createCapture(VIDEO);
video.size(300, 300);
video.hide();

posenet= ml5.poseNet(video,modelLoaded)
posenet.on('pose' ,gotPoses);
}

function gotPoses(results){
    if (results.length > 0){
        console.log(results)
        console.log("nose-x =" + results[0].pose.nose.x);
        lips_x =results[0].pose.nose.x-20;
        console.log("nose-y =" + results[0].pose.nose.y);
        lips_y =results[0].pose.nose.y-10;
    }
    }
    
    function modelLoaded() {
    console.log("Posent Is Intialized");
    }
    
    function snapshot() {
        save("Lipstick_image.png");
    }
    
    function draw() {
        image(video, 0, 0, 300, 300);
        // fill(255,0,0);
        // stroke(255,0,0);
        // circle(nose_x,nose_y,20);
        image(lips,lips_x,lips_y,50,50)
    }




