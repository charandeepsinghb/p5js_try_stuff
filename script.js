function setup() {
    createCanvas(400, 400);
}
let x = 0;
function draw() {
    // init part
    // background(220);
    frameRate(10);
    line(20, 380, 380, 380);
    line(20, 20, 20, 380);

    point(x * 8 + 200, 360 + -x*x);

    x++;
    
    // console.log(x);
}
