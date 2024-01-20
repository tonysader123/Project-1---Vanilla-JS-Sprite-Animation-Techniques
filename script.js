/*this section of the code defines our object animation which contains the properties for each state of animation
******************************************************************************************************************************
*/
class animation{
    constructor(name,frameNum, rowNum){
        this._name = name;
        this._frameNum = frameNum;
        this._rowNum = rowNum;
    }
}

//declare the states
const idle = new animation('idle', 7, 0);
const jump = new animation('jump', 7, 1);
const fall = new animation('fall', 7, 2);
const run = new animation('run', 9, 3);
const dizzy = new animation('dizzy', 11, 4);
const sit = new animation('sit', 5, 5);
const roll = new animation('roll', 7, 6);
const bite = new animation('bite', 7, 7);
const ko = new animation('ko', 12, 8);
const getHit = new animation('getHit', 4, 9);

//will be changed based on selection or game
let playerState = idle;
let selectedAnimation = 'fall';

//map the selected state to our playerState from the dropdown
const dropdown = document.getElementById('animations');
dropdown.addEventListener('change',function(e){
    selectedAnimation = e.target.value;
    switch (selectedAnimation.valueOf()){
        case 'idle': 
            playerState = idle;
            break;
        case 'jump': 
            playerState = jump;
            break;
        case 'fall': 
            playerState = fall;
            break;
        case 'run': 
            playerState = run;
            break;
        case 'dizzy': 
            playerState = dizzy;
            break;
        case 'sit': 
            playerState = sit;
            break;
        case 'roll': 
            playerState = roll;
            break;
        case 'bite': 
            playerState = bite;
            break;
        case 'ko': 
            playerState = ko;
            break;
        case 'getHit': 
            playerState = getHit;
            break;
    }
})



/*this section of the code contains our connections and initialization of our canvas
******************************************************************************************************************************
*/
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

//import sprite canvas
const playerImage = new Image();
playerImage.src = './shadow_dog.png';


//size of 1 sprite, global variables
const spriteWidth = 575;
const spriteHeight = 523;


/*this section of the code contains our animation loop
******************************************************************************************************************************
*/
//variables to be used to identify which frame to display in drawImage
let frameX = 0;
let frameY = 0;

//frame rate
let gameFrame = 0;
const staggerFrames = 6;


//animation loop
function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH, CANVAS_HEIGHT);

    //this logic cycles from 0 to n where n = max number of frames before the animation loops. 
    let position  = Math.floor(gameFrame/staggerFrames) % playerState._frameNum; 
    frameX = spriteWidth * position;
    frameY = playerState._rowNum;
    //draw image is used here to crop our sprite from our sprite sheet and display it
    ctx.drawImage(playerImage, frameX, frameY*spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    
    //cycle through the image to animate based on stagger frames


    gameFrame++;
    requestAnimationFrame(animate);
}
animate();
