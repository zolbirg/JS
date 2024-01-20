//get DOM Elements Game
const scoreEl = document.getElementById('score');
const colorParts = document.querySelectorAll(".colors");
const containerEl = document.querySelector(".container");
const startBtn = document.querySelector("#start-btn");
const resultEl = document.querySelector("#score-result");
const wrapperEl = document.querySelector(".wrapper");

// current colors
const colorObj = {
    color1: {current: "#006400", new: "#00ff00"},
    color2: {current: "#800000", new: "#ff0000"},
    color3: {current: "#0000b8", new: "#0000ff"},
    color4: {current: "#808000", new: "#ffff00"},
};

//game variables
let randomColors = [];
let isPathGenerating = false;
let score = 0;
let clickCount = 0;

// function to get random
const getRandomColor = (colorObj) =>{
    const colorKeys = Object.keys(colorObj);
    return colorsKeys[Math.floor(Math.random() * colorKeys.length)];
};

//function to pause of time
const delay = async (time) =>{
    return await new Promise((resolve)=> setTimeout(resolve, time));
};

//function generate random color

const generateRandomPath = async () => {
    randomColors.push(getRandomColor(colorObj));
    score = randomColors.length;
    isPathGenerating = true;
    await showPath(randomColors);
}

const showPath = async (color) =>{
    scoreEl.innerText = score;
        for(let color of colors){
            const currentColor = document.querySelector(`.${color}`);
            await delay(500);
            currentColor.style.backgroundColor = colorObj[color].new;
            await delay (600);
            currentColor.style.backgroundColor = colorObj[color].current;
            await delay (600);
        }
        //set flag to indicate the game
        isPathGenerating = false;
};

//function to and game
const endGame = () =>{
    resultEl.innerHTML = `<span> Your score : </span> ${score}`;
    resultEl.classList.remove("hide");
    containerEl.classList.remove("hide");
    wrapperEl.classList.add("hide");
    startBtn.innerText = "Play Again";
    startBtn.classList.remove("hide");
};

//reset game

const resetGame = () =>{
    score = 0;
    clickCount = 0;
    randomColors = [];
    isPathGenerating = false;
    wrapperEl.classList.remove("hide");
    containerEl.classList.add("hide");
    generateRandomPath();
};

//function to handle a color being clicked

const handleColorClick = async (e) =>{

    if(isPathGenerating){
        return false;
    }

    if(e.target.classList.contains(randomColors[clickCount])){
        e.target.style.backgroundColor = colorObj[randomColors[clickCount]].new;
        await delay(500);
        e.target.stale.backgroundColor = colorObj[randomColors[clickCount]].current;
        clickCount++;

        if(clickCount === score){
            clickCount = 0;
            generateRandomPath();
        }

    }else{
        endGame();
    };
};

// event listeners
startBtn.addEventListener("click", resetGame);
colorParts.forEach((color)=> color.addEventListener("click", handleColorClick));
