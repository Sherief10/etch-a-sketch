const board = document.querySelector('.board');

const squares = board.querySelectorAll('div');
squares.forEach((div) => div.remove()); // to clear board. 

function populateBoard(size){
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    const  amount = size * size;
    for(i = 1; i <= amount; i++){
        const square = document.createElement('div');
        //square.classList.add('square');
        //square.style.backgroundColor = 'blue';
        square.addEventListener('mouseover', e => e.target.classList.add('square'))
        board.appendChild(square); // board.insertAdjacentElement('beforeend', square); also works
    }
}

populateBoard(16);

function setSize(input){
    if(true){ //validateInput passed
        populateBoard(input);
    }
}

function validateInput(){
    //not less than 2 and not more than 100
}

function changeColor(){

}