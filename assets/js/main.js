const canvasOOP = document.getElementById("canvasOOP");
const canvasRandom = document.getElementById("canvasRandom");
const canvasMultiple = document.getElementById("canvasMultiple");

const ctx = canvasOOP.getContext("2d");
const ctxRandom = canvasRandom.getContext("2d");
const ctxMultiple = canvasMultiple.getContext("2d");

canvasOOP.height = 200;
canvasOOP.width = 300;

canvasRandom.height = 200;
canvasRandom.width = 300;

canvasMultiple.height = 200;
canvasMultiple.width = 300;

canvasOOP.style.background = "#ff8";
canvasRandom.style.background = "#e6f7f6";
canvasMultiple.style.background = "#fcfb97";

class Circle {

  constructor(x, y, radius, color, text, backcolor, textColor) {
    this.posX = x;
    this.posY = y;
    this.radius = radius;
    this.color = color;
    this.text = text;
    this.backcolor = backcolor;
    this.textColor = textColor;
  }

  draw(context) {

    context.beginPath();

    context.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2, false);
    context.fillStyle = this.backcolor;
    context.fill();

    context.lineWidth = 5;
    context.strokeStyle = this.color;
    context.stroke();

    context.textAlign = "center";
    context.textBaseline = "middle";
    context.font = "bold 20px cursive";
    context.fillStyle = this.textColor;
    context.fillText(this.text, this.posX, this.posY);

    context.closePath();
  }
}

//// CÍRCULO ALEATORIO

let randomRadius = Math.floor(Math.random() * 40 + 30);

let randomX = randomRadius + Math.random() * (canvasRandom.width - 2 * randomRadius);
let randomY = randomRadius + Math.random() * (canvasRandom.height - 2 * randomRadius);

let miCirculoRandom = new Circle( randomX, randomY, randomRadius, "green","Tec","rgb(83,186,52)","rgb(255,231,93)");

miCirculoRandom.draw(ctxRandom);

//// CÍRCULO CENTRADO

let miCirculo = new Circle(canvasOOP.width / 2, canvasOOP.height / 2, 45,"rgb(92,7,96)", "Tec",  "rgb(255,8,206)",
  "rgb(66,245,239)");

miCirculo.draw(ctx);


let MaxCircle = 10;

function randomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

for (let i = 0; i < MaxCircle; i++) {

  let r = Math.floor(Math.random() * 30 + 20);

  let x = Math.random() * (canvasMultiple.width - r * 2) + r;
  let y = Math.random() * (canvasMultiple.height - r * 2) + r;

  let circle = new Circle(
    x,
    y,
    r,
    randomColor(),
    i + 1,
    randomColor(),
    randomColor()
  );

  circle.draw(ctxMultiple);
}