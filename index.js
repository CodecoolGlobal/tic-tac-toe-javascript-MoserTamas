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

    if (gameTurn % 2 === 0) {
        currentPlayer = 'diamond';
        displayMessage("Player Pets turn");
    } else {
        currentPlayer = 'pets';
        displayMessage("Player Diamond turn");
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


    } else {
        displayMessage("Position is already taken on board");
    }


}

// this function is called whenever the user presses
// the button labeled `Generate AI coordinates`
function processAICoordinate() {
    console.log(`processAICoordinate()`);
   
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
    




    return undefined;
}