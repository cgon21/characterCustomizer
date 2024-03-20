let typing;
let button;
let button2;
let slider;
let y = 60;
let cx, cy, size;
let dancing = false;
let rate = 5;
let irisColor;
let b;
let c;

function setup() {
    createCanvas(400, 400);
    textSize(32);
    text("Create your gorb!", 5, y);
    typing = select("#letters");
    button = select("#dance");
    button.mousePressed(buttonPressed);
    slider = select("#diameter");
    irisColor = select("#iris");
    b = createButton('Body');
    cx = width / 2;
    cy = height / 2;
    size = 0.5;
    slider.value(random(150, 500));

    let randomRed = floor(random(256));
    let randomGreen = floor(random(256));
    let randomBlue = floor(random(256));
    let randomColor = color(randomRed, randomGreen, randomBlue);
    let hexColor = "#" + hex(randomColor.levels[0], 2) + hex(randomColor.levels[1], 2) + hex(randomColor.levels[2], 2);
    irisColor.value(hexColor);

    b.value(random(['pink', 'brown', 'tan', 'beige', 'lightblue', 'lightgreen', 'lavender']));
}

function move() {
    if (keyIsDown(RIGHT_ARROW)) {
        cx += rate;
    }
    if (keyIsDown(LEFT_ARROW)) {
        cx -= rate;
    }
    if (keyIsDown(UP_ARROW)) {
        cy -= rate;
    }
    if (keyIsDown(DOWN_ARROW)) {
        cy += rate;
    }
    if (keyIsDown(65) && size >= 0.1) {
        size -= 0.05;
    }
    if (keyIsDown(83) && size <= 1.8) {
        size += 0.05;
    }
}

function draw() {
    textSize(10);

    background('white');

    fill('black');
    text("Hello!\nMy name is:\n\n\nA shrinks me\nS makes me grow\nArrow keys make me move\nR will reset my position", 5, 20);

    textSize(32);
    text(typing.value(), 70, y - 25);

    b.mousePressed(() => {
        c = random(['pink', 'brown', 'tan', 'beige', 'lightblue', 'lightgreen', 'lavender']);
        b.value(c);
    });

    fill(b.value());
    circle(cx, cy, 300 * size);

    // legs
    ellipse(cx + 40 * size, cy + 260 * size, 70 * size, 50 * size);
    ellipse(cx - 40 * size, cy + 260 * size, 70 * size, 50 * size);

    // body
    ellipse(cx, cy + 200 * size, 150 * size, 100 * size);

    // arms
    ellipse(cx + 100 * size, cy + 200 * size, 50 * size, 60 * size);
    ellipse(cx - 100 * size, cy + 200 * size, 50 * size, 60 * size);

    fill('white');
    circle(cx, cy, slider.value() / 1.8 * size);
    fill(irisColor.value());
    circle(cx, cy, slider.value() / 3.3 * size);
    fill('black');
    circle(cx, cy, slider.value() / 10 * size);

    if (dancing) {
        cx += random(-5, 5);
        cy += random(-5, 5);
    }
    move();

}


function buttonPressed() {
    dancing = !dancing;
}

function keyPressed() {
    if (key === "r") {
        cx = width / 2;
        cy = height / 2;
        size = 0.5;
    }
}

