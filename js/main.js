
// ------------------- SLIDESHOW -------------------
let pictures = ["../images/biochemistryChemicals.jpg", "../images/Thermodynamics.png",
    "../images/HealthyHeart.png", "../images/Cardio.png"]; // grabs the location of each images
// and putting it all into an array.
let current = 0;    // This will set the current image that is seen on the web page

let slide = (value) => {    // Creating a slide function with the parameter as value
    current += value;   // This will change the image (causing the slideshow)
    if (current > pictures.length - 1) {    // When the last image is viewed on the web page
        // and a value is added to current from the previous statement, the slideshow will restart to 
        // the first image.
        current = 0;
    }   // When the current is subtracted by 1 from setting the value as -1, and it is the 
    // first image, the slideshow will go the last image.
    if (current < 0) {
        current = pictures.length - 1;
    }
    document.getElementById("imageSlideshow").src = pictures[current];  // This is grabbing 
    // the id of the image and changing its source to each index of the array.
}
// ------------------- SLIDESHOW -------------------

// ------------------- MODAL ------------------
let oneModal = modalVal => {
    document.getElementById(`modalDesign${modalVal}`).style.display = "block";  // grab the id of the element and add a value to it so that it will call on different modals. It will then display it block,which will result in the modal popping up.
}

let closeModal = modalVal => {
    document.getElementById(`modalDesign${modalVal}`).style.display = "none";   // simimlar to the function above except that it will hide the modal.
}
// ------------------- MODAL -------------------

// ------------------- CALCULATE RMR -------------------
let weight;
let height;
let age;

const convertToNum = () => {
    weight = parseInt(document.getElementById("weight").value);
    height = parseInt(document.getElementById("height").value);
    age = parseInt(document.getElementById("age").value);
    // These will all take the string value and convert it to a Number datatype.
}

const RMR = () => {
    convertToNum(); // this will allow me to use the value I assigned to each variables in the convertToNum function: weight, height, and age.
    weight = (weight / 2.204) * 9.65;
    height = (height * 2.54) * 1.84;
    age *= 4.67
    // The above three are a part of the Harris-Benedict equation
    document.getElementById("empty").innerHTML = (Math.round((655.1 + weight + height + age)) + " kcal");   // This will give me the sum total and replace it with the "0000 kcal" tag value
}
// ------------------- CALCULATE RMR -------------------

// ------------------- CALCULATE TDEE -------------------
let TDEEresult;

const convertToNum2 = () => {
    TDEEresult = parseInt(document.getElementById("RMRData").value);
}   // Convert string input into Number datatype

const sedentary = () => {
    convertToNum2();
    TDEEresult *= 1.2;
    document.getElementById("TDEEresult").innerHTML = Math.round(TDEEresult) + " kcal";
}   // Set the first equation 

const Lactive = () => {
    convertToNum2();
    TDEEresult *= 1.375;
    document.getElementById("TDEEresult").innerHTML = Math.round(TDEEresult) + " kcal";
}   // Set the second equation 

const Mactive = () => {
    convertToNum2();
    TDEEresult *= 1.55;
    document.getElementById("TDEEresult").innerHTML = Math.round(TDEEresult) + " kcal";
}   // Set the third equation 

const Vactive = () => {
    convertToNum2();
    TDEEresult *= 1.725;
    document.getElementById("TDEEresult").innerHTML = Math.round(TDEEresult) + " kcal";
}   // Set the fourth equation 

const Eactive = () => {
    convertToNum2();
    TDEEresult *= 1.9;
    document.getElementById("TDEEresult").innerHTML = Math.round(TDEEresult) + " kcal";
}   // Set the fifth equation 
// All these will allow the user to see what their TDEE's are in each scenario of the chosen activity level.
// ------------------- CALCULATE TDEE -------------------

// ------------------- CANVAS -------------------
const canvas = document.getElementById("canvas");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let context = canvas.getContext("2d"); // creates a 2D object
let x = Math.random() * innerWidth; //sets the location of the circle in the x-axis random within the length of innerWidth
let y = Math.random() * innerHeight; //sets the location of the circle in the y-axis random within the length of innerHeight
let velocityY = 10; // how fast the circle is moving in the y-axis
let velocityX = 10; // how fast the circle is moving in the x-axis
let w = 256;
let h = 256;

let move = () => {
    requestAnimationFrame(move);    // Repeat the function over and over like a loop
    context.clearRect(0, 0, innerWidth, innerHeight);   // This will clear the previous position as the image moves

    context.beginPath();    // The image will now begin moving in a set path
    context.rect(x, y, w, h);   // This is the size of the rectangle
    // context.arc(x, y, radius, 0, Math.PI * 2, false);
    const img = document.getElementById("jordan");
    context.drawImage(img, x, y);   // draws an image to a canvas and sets what position it will be placed in.
    context.fillStyle = img;    // fill the box with an image

    if (x + w > innerWidth || x < 0) {  // if the edge of the image hits the end of the page on the x-axis, it must move in the opposite direction
        velocityX = -velocityX;
    }

    if (y + h > innerHeight || y < 0) {    // same thing as above except in the y-axis
        velocityY = -velocityY;
    }

    x += velocityX; // the image will keep moving in the x-axis
    y += velocityY; // the image will keep moving in the y-axis
}
move();
// ------------------- CANVAS -------------------
