function setup() {
    createCanvas(400, 400);
}

function mean(arr) {
    let m = 0;
    arr.forEach((e) => {
        m += e;
    });
    return m / arr.length;
}

let a = [];

function spreadArray(arr, x, x1, y, y1) {
    let single =  (x1 - x) / arr.length;
    arr.forEach((e, ind) => {
        ellipse(ind * single, 10, 8);
    });
}

function draw() {
    background(220);
    frameRate(2);
    line(20, 380, 380, 380);
    line(20, 20, 20, 380);

    // ellipse(random(360) + 20, random(360) + 20, 8);

    line(40, 200, 360, 200);
    let rand = Math.floor(random(321) + 40);
    a.push(rand);
    // a.forEach((e)=>{
    // });
    // ellipse(mean(a), 200, 8);

    spreadArray(a, 0, 0, 400, 400);
    console.log(rand);
}
