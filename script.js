const can = {
  x: 400,
  y: 400
};

const envs = {
  fr: -0.1
}

function setup() {
  createCanvas(can.x, can.y);
}

let ball = createBall(20, 20);
function draw() {
  background(220);

  drawBall(ball);

  applyGravity(ball);
  // frameRate(3);
}

function createBall(x, y) {
  return {
    pX: x,
    pY: y,
    pYD: y,
    a: 1,
    v: 1
  };
}

function applyGravity(ball) {
  ball.pY += ball.v * ball.a;
  if (ball.pY < 390) {
    ball.v += ball.a + envs.fr;
  } else {
    ball.v += -ball.a + envs.fr;
  }
  if (ball.pY < 390) {
    ball.pYD = ball.pY;
  } else {
    ball.pYD = 390 - (ball.pY - 390);
  }
  // console.log(ball.pY);
}

function drawBall(ball) {
  ellipse(ball.pX, ball.pYD, 20);
}
