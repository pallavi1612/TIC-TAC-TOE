console.log("Welcome to MyTicTacToe");
let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
let isgameover = false;

//Function to chamge the turn
const changeTurn = ()=>{
    return turn ==="X" ? "0" : "X"
}

//Function to check Win
const checkWin= ()=>{
    let boxText = document.getElementsByClassName("boxText");
     let wins =[
        [0,1,2 ,7,8,0],
        [3,4,5 ,7, 18, 0],
        [6,7,8, 7, 28, 0],
        [0,3,6,-3, 17, 90],
        [1,4,7, 7, 17, 90],
        [2,5,8, 17, 18, 90],
        [0,4,8, 7, 17, 45],
        [2,4,6, 7, 17 , 135],
     ]
     wins.forEach(e=>{
        if((boxText[e[0]].innerText=== boxText[e[1]].innerText) && (boxText[e[2]].innerText===boxText[e[1]].innerText) && (boxText[e[0]].innerText!=="")){
        document.querySelector('.info').innerText = boxText[e[0]].innerText + "won"
        isgameover= true
        document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width="210px"
        document.querySelector(".line").style.width = "20vw"
        document.querySelector(".line").style.transform = `translate(${e[3]}vw , ${e[4]}vw) rotate(${e[5]}deg)`
        

      
     }
     })
}

//Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxText = element.querySelector('.boxText');
    element.addEventListener('click',()=>{
       
        if(boxText.innerText===''){
            boxText.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!isgameover){
            document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;
            }
        }
    })
})

//add onClick listener to reset button

reset.addEventListener('click',()=>{
    let boxTexts = document.querySelectorAll('.boxText');
    Array.from(boxTexts).forEach(element=>{
        element.innerText=""
    });
    
    turn = "X";
    isgameover = false
    document.querySelector(".line").style.width = "0px"
    document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;
   document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width="0px"
     
   
          
    
})  

