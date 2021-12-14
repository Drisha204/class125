nosex=0;
nosey=0;
dif=0;
lw=0;
rw=0;
function setup()
{
    video =createCapture(VIDEO);
    video.size(700,700);

    canvas=createCanvas(750,500);
    canvas.position(900,150);

    posenet=ml5.poseNet(video,modelloaded);
    posenet.on('pose',gotposes);
}
function modelloaded()
{
console.log('model is loaded');

}
function gotposes(results)
{
if (results.length>0)
{
console.log(results);
nosex=results[0].pose.nose.x;
nosey=results[0].pose.nose.y;
console.log("nosex="+nosex+"nosey="+nosey);
lw=results[0].pose.leftWrist.x;
rw=results[0].pose.rightWrist.x;
dif=floor(lw-rw);
console.log("lw="+lw+"rw="+rw+"dif="+dif);
}
}
function draw()
{
    background('#05ffa1');
    document.getElementById("side").innerHTML="width and height of square is"+dif+"px";
    fill('#c5bffb');
    stroke('#c5bffb');
    square(nosex,nosey,dif);
}