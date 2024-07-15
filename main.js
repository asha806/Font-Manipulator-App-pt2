function setup(){
    video = createCapture(VIDEO);
    video.size(400,400);
    video.position(68,225);

    canvas = createCanvas(800,400);
    canvas.position(430,130);

    poseNet = ml5.poseNet(video,modelDone);
    poseNet.on('pose',gotposes);
}

function draw(){
    background("#5196e3");
}

function modelDone(){
    console.log("PoseNet Is Initialized");
}

function gotposes(results,error){
    if(error){
        console.error(error);
    }
    if(results.length > 0){
        console.log(results);

        console.log("rightWrist-x = "+results[0].pose.rightWrist.x + " rightWrist-y = "+results[0].pose.rightWrist.y);
        console.log("leftWrist-x = "+results[0].pose.leftWrist.x + " leftWrist-y = "+results[0].pose.leftWrist.y);
    }
}