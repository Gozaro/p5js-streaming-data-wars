let socket;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(55);

  textSize(18);
  fill(255, 255, 255);
  text('Love vs Porn', 10, 20);

  socket = io.connect('http://localhost:3000');

  socket.on('tweet1', function (data) {
    console.log('KEYWORD1:', data);
    drawElement1();
  });
  socket.on('tweet2', function (data) {
    console.log('KEYWORD2:', data);
    drawElement2();
  });
}

function drawElement1() {
  const posX = int(random(0, window.innerWidth));
  const posY = int(random(0, window.innerHeight));

  stroke(255, 197, 179);
  fill(0, 0, 0, 10);
  ellipse(posX, posY, 520, 520);
}

function drawElement2() {
  const posX = int(random(0, window.innerWidth));
  const posY = int(random(0, window.innerHeight));
  stroke(153, 232, 186);
  fill(0, 0, 0, 10);
  ellipse(posX, posY, 520, 520);
}
