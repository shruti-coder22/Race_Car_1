canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car_width = 100;
car_height = 100;

car1_x = 10;
car1_y = 10;

car2_x = 10;
car2_y = 10;

car_img_1 = "car_1.png";
car_img_2 = "car_2.png";

function add() {
    background_imgTag = new Image();
    background_imgTag.src = background_image;
    background_imgTag.onload = uploadbackground;

    c1_imgTag = new Image();
    c1_imgTag.src = rover_image;
    c1_imgTag.onload = uploadrover;
}

function uploadbackground() {
    ctx.drawImage(mars_imgTag,0,0,canvas.width,canvas.height);
}

function uploadcars() {
    ctx.drawImage(c1_imgTag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e) {
    var key_pressed = e.keyCode;
    console.log(key_pressed);

    if (key_pressed == 38) {
        c1_up();
        console.log("Up arrow key pressed");
    }

    if (key_pressed == 37) {
        c1_left();
        console.log("Left arrow key pressed");
    }

    if (key_pressed == 39) {
        c1_right();
        console.log("Right arrow key pressed");
    }

    if (key_pressed == 40) {
        c1_down();
        console.log("Down arrow key pressed");
    }
}

function c1_up() {
    if (rover_y >= 0) {
        rover_y = rover_y - 10;
        console.log("X = " + rover_x + "| Y = " + rover_y);
        uploadbackground();
        uploadrover();
    }
}

function c1_down() {
    if (rover_y <= 500) {
        rover_y = rover_y + 10;
        console.log("X = " + rover_x + "| Y = " + rover_y);
        uploadbackground();
        uploadrover();
    }
}

function c1_left() {
    if (rover_x >= 0) {
        rover_x = rover_x - 10;
        console.log("X = " + rover_x + "| Y = " + rover_y);
        uploadbackground();
        uploadrover();
    }
}

function c1_right() {
    if (rover_x <= 700) {
        rover_x = rover_x + 10;
        console.log("X = " + rover_x + "| Y = " + rover_y);
        uploadbackground();
        uploadrover();
    }
}
