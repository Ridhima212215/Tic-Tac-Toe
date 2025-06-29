console.log("Welcome to Tic Tac Toe")
let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X"
let isgameover = false;

//function to change the turn
const changeTurn = ()=>{
    return turn ==="X"?"0": "X" //It is a shorthand way to write an if-else
                              // checks the condition if turn=x if true return 0 ,if false return x
}

//function to check for a win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins=[
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true
            //HTMLCollection items can be accessed by their index, similar to an array.
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px"
            document.querySelector('.line').style.width = "20vw";
            document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
        }
    })
}

//Game logic
music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext')
    element.addEventListener('click', (e)=>{
        if(boxtext.innerText === '' && !isgameover){
            boxtext.innerText = turn ;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!isgameover){
                // "===" ompares two values for equality and ensures that both the value and the type are the same
                document.getElementsByClassName("info")[0].innerText = "Turn for "+ turn;

            }
        }
    })
})

/* document.querySelector(selector): Selects the first element that matches the specified CSS selector.
document.querySelectorAll(selector): Selects all elements that match the specified CSS selector.*/


//add onclick listener to reset button
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
         element.innerText = ""
    });
    turn = "X"
    isgameover = false
    document.querySelector(".line").style.width = "0"
    document.getElementsByClassName("info")[0].innerText = "Turn for "+ turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0"
})