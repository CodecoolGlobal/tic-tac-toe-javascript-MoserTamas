let gameTurn = 0;
let currentPlayer;
let board;

// this function will be called whenever the user changes
// the `select` input labeled `please select game mode`
function setGameMode(selectedValue) {
    switch (selectedValue) {
        case 'human-human':
            isPlayerXHuman = true;
            isPlayerYHuman = true;
            break;
        case 'human-ai':
            isPlayerXHuman = true;
            isPlayerYHuman = false;
            break;
    }
    resetBoard();

    setHTMLvisibilityForInputGameMode(false);
    setHTMLvisibilityForInputHumanCoordinates(true);
    setHTMLvisibilityForInputAiCoordinatesInput(false);
    setHTMLvisibilityForButtonLabeledReset(true);
    displayMessage("Player X's turn");
    if (isPlayerYHuman === false){
        setHTMLvisibilityForInputAiCoordinatesInput(true)
    }
    }

// this function is called whenever the user presses the `enter`
// key in the input box labeled `enter coordinates`
// paramerter: input - the content of the input box
function processHumanCoordinate(input) {
    console.log(`'processHumanCoordinate('${input}')`);

  if (isPlayerXHuman === true && isPlayerYHuman === false){

    if (gameTurn % 2 === 0) {
        currentPlayer = 'diamond';
        setHTMLvisibilityForInputAiCoordinatesInput(true)
        setHTMLvisibilityForInputHumanCoordinates(false)
        displayMessage("Player Pets turn");
    } else {
        currentPlayer = 'pets';
        setHTMLvisibilityForInputAiCoordinatesInput(false)
        setHTMLvisibilityForInputHumanCoordinates(true)
        displayMessage("Player Diamond turn");
    }}

    else {
        if (gameTurn % 2 === 0) {
            currentPlayer = 'diamond';
            displayMessage("Player Pets turn");
        } else {
            currentPlayer = 'pets';
            displayMessage("Player Diamond turn");
    }
    }
    let coordinates = extractCoordinates(input);

    // üres cella ?
    if (board[coordinates.x][coordinates.y] === '') {
        board[coordinates.x][coordinates.y] = currentPlayer;

        const winningPlayer = getWinningPlayer(board);
        if (winningPlayer) {
            displayMessage(`Player ${currentPlayer} has won !`);
        }

        gameTurn += 1;
        displayBoard(board);

        // TODO: add a message stating either
        // Player X's turn
        // Player O's turn
        // It's a tie
        // Player X won 
        // Player O won 

        // TODO: add conditions to hide the coordinates screen for 
        // the human player & show for the button to generate AI 
        // coordinates


    } else if (isPlayerXHuman === true && isPlayerYHuman === true){
        gameTurn -= 2;
        displayMessage("Position is already taken on board");
    } else if (isPlayerXHuman === true && isPlayerYHuman === false){
        gameTurn -= 2;
        displayMessage("Position is already taken on board");
        setHTMLvisibilityForInputAiCoordinatesInput(false);
        setHTMLvisibilityForInputHumanCoordinates(true)
    }

getWinningPlayer(board)
}


// this function is called whenever the user presses
// the button labeled `Generate AI coordinates`
function processAICoordinate() {
   // if (isPlayerYHuman === false){
    //setHTMLvisibilityForInputAiCoordinatesInput(false)}
  
    
    let row = ["a","b","c"]
    let random = Math.floor(Math.random()*3)
    let x = row[random]
    let y = Math.floor(Math.random()*3)+1
    if(board[random][y-1] === ""){
    processHumanCoordinate(x+y);
    setHTMLvisibilityForInputAiCoordinatesInput(false)
    setHTMLvisibilityForInputHumanCoordinates(true)
    }else{
        processAICoordinate()
    }
}

// this function is called when the user clicks on 
// the button labeled `Restart Game`
function resetGame() {
    resetBoard();
    displayBoard(board);
    setHTMLvisibilityForInputGameMode(true)
    setHTMLvisibilityForButtonLabeledReset(false)
    setHTMLvisibilityForInputHumanCoordinates(false)
    setHTMLvisibilityForInputAiCoordinatesInput(false)
    document.getElementsByClassName('mode')[0].getElementsByTagName('option')[0].selected = "selected";
    console.log("resetGame()");
    displayMessage("")
    gameTurn = 0
    //location.reload()
}




// this function should change from A1..C3 to coordinates
// that are present in the `board` global variable
function extractCoordinates(input) {


    // const colIndexes = 'ABCDEF';
    // const row = (colIndexes.split('')).indexOf(input[0].toUpper());
    // const col = parseInt(input[1]) - 1;

    let coordinates = {
        x: 0,
        y: 0
    }

    if (input == 'a1') {
        coordinates.x = 0;
        coordinates.y = 0;
    } else if (input == 'a2') {
        coordinates.x = 0;
        coordinates.y = 1;
    } else if (input == 'a3') {
        coordinates.x = 0;
        coordinates.y = 2;
    } else if (input == 'b1') {
        coordinates.x = 1;
        coordinates.y = 0;
    } else if (input == 'b2') {
        coordinates.x = 1;
        coordinates.y = 1;
    } else if (input == 'b3') {
        coordinates.x = 1;
        coordinates.y = 2;
    } else if (input == 'c1') {
        coordinates.x = 2;
        coordinates.y = 0;
    } else if (input == 'c2') {
        coordinates.x = 2;
        coordinates.y = 1;
    } else if (input == 'c3') {
        coordinates.x = 2;
        coordinates.y = 2;
    } else {
        displayMessage("Invalid coordinate entered");
        coordinates.x = 4;
        coordinates.y = 4;
        // ?   
    }
    // this is a sample of what should be returned if the
    // the user had typed `A1`
    // you need to add the to also treat other cases (A2..C3)
    return coordinates;
}

// this function should return `X` or `O` or undefined (carefull it's not a string )
// based on interpreting the values in the board variable
function getWinningPlayer(board) {
 
//     displayMessage("It's a tie!");
//     setHTMLvisibilityForInputHumanCoordinates(false)
//     setHTMLvisibilityForInputAiCoordinatesInput(false)
// return undefined;}
// for(let i = 0; i < board.length; i++){
//     for(let j = 0; j <board[i].length; i++){
        
//     }
// }


if (board[0][0] == "diamond" && board[0][1] == "diamond" && board[0][2] == "diamond" ){
        displayMessage("Pets won!");
        setHTMLvisibilityForInputHumanCoordinates(false)
        setHTMLvisibilityForInputAiCoordinatesInput(false)
        
    } else if(board[1][0] == "diamond" && board[1][1] == "diamond" && board[1][2] == "diamond" ){
        displayMessage("Diamond won!");
        setHTMLvisibilityForInputHumanCoordinates(false)
        setHTMLvisibilityForInputAiCoordinatesInput(false)
        
    } else if(board[2][0] == "diamond" && board[2][1] == "diamond" && board[2][2] == "diamond" ){
        displayMessage("Diamond won!");
        setHTMLvisibilityForInputHumanCoordinates(false)
        setHTMLvisibilityForInputAiCoordinatesInput(false)
     //oszlopok   
    } else if(board[0][0] == "diamond" && board[1][0] == "diamond" && board[2][0] == "diamond" ){
        displayMessage("Diamond won!");
        setHTMLvisibilityForInputHumanCoordinates(false)
        setHTMLvisibilityForInputAiCoordinatesInput(false)
        
    } else if(board[0][1] == "diamond" && board[1][1] == "diamond" && board[2][1] == "diamond" ){
        displayMessage("Diamond won!");
        setHTMLvisibilityForInputHumanCoordinates(false)
        setHTMLvisibilityForInputAiCoordinatesInput(false)
        
    } else if(board[0][2] == "diamond" && board[1][2] == "diamond" && board[2][2] == "diamond" ){
        displayMessage("Diamond won!");
        setHTMLvisibilityForInputHumanCoordinates(false)
        setHTMLvisibilityForInputAiCoordinatesInput(false)
        //Diagonally
    } else if(board[0][0] == "diamond" && board[1][1] == "diamond" && board[2][2] == "diamond" ){
        displayMessage("Diamond won!");
        setHTMLvisibilityForInputHumanCoordinates(false)
        setHTMLvisibilityForInputAiCoordinatesInput(false)
        
    } else if(board[2][0] == "diamond" && board[1][1] == "diamond" && board[0][2] == "diamond" ){
        displayMessage("Diamond won!");
        setHTMLvisibilityForInputHumanCoordinates(false)
        setHTMLvisibilityForInputAiCoordinatesInput(false)
       //Sorok 
    } else if(board[0][0] == "pets" && board[0][1] == "pets" && board[0][2] == "pets" ){
        displayMessage("Pets won!");
        setHTMLvisibilityForInputHumanCoordinates(false)
        setHTMLvisibilityForInputAiCoordinatesInput(false)
        
    } else if(board[1][0] == "pets" && board[1][1] == "pets" && board[1][2] == "pets" ){
        displayMessage("Pets won!");
        setHTMLvisibilityForInputHumanCoordinates(false)
        setHTMLvisibilityForInputAiCoordinatesInput(false)
        
    } else if(board[2][0] == "pets" && board[2][1] == "pets" && board[2][2] == "pets" ){
        displayMessage("Pets won!");
        setHTMLvisibilityForInputHumanCoordinates(false)
        setHTMLvisibilityForInputAiCoordinatesInput(false)
        //Oszlopok
    } else if(board[0][0] == "pets" && board[1][0] == "pets" && board[2][0] == "pets" ){
        displayMessage("Pets won!");
        setHTMLvisibilityForInputHumanCoordinates(false)
        setHTMLvisibilityForInputAiCoordinatesInput(false)
        
    } else if(board[0][1] == "pets" && board[1][1] == "pets" && board[2][1] == "pets" ){
        displayMessage("Pets won!");
        setHTMLvisibilityForInputHumanCoordinates(false)
        setHTMLvisibilityForInputAiCoordinatesInput(false)
        
    } else if(board[0][2] == "pets" && board[1][2] == "pets" && board[2][2] == "pets" ){
        displayMessage("Pets won!");
        setHTMLvisibilityForInputHumanCoordinates(false)
        setHTMLvisibilityForInputAiCoordinatesInput(false)
        //Diagonally
    } else if(board[0][0] == "pets" && board[1][1] == "pets" && board[2][2] == "pets" ){
        displayMessage("Pets won!");
        setHTMLvisibilityForInputHumanCoordinates(false)
        setHTMLvisibilityForInputAiCoordinatesInput(false)
        
    } else if(board[2][0] == "pets" && board[1][1] == "pets" && board[0][2] == "pets" ){
        displayMessage("Pets won!");
        setHTMLvisibilityForInputHumanCoordinates(false)
        setHTMLvisibilityForInputAiCoordinatesInput(false) } 
    else if (board[0][0] != "" && board[0][1] != "" && board[0][2] != "" &&
        board[1][0] != "" && board[1][1] != "" && board[1][2] != "" &&
        board[2][0] != "" && board[2][1] != "" && board[2][2] != ""){
            displayMessage("It's a tie!");
        setHTMLvisibilityForInputHumanCoordinates(false)
        setHTMLvisibilityForInputAiCoordinatesInput(false)
        }
    }
        
   





    