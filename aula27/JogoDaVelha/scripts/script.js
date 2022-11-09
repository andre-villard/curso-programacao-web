swindow.addEventListener("DOMContentLoaded", () => {
    const tiles = Array.from(document.querySelectorAll(".titles"));

    const playerDisplay = document.querySelector(".display-player");

    const resetButtom = document.querySelector("#reset");

    const announcer = document.querySelector(".announcer");
    
    let board = ["","","","","","","","",""]
    let currentPlayer = "X";
    let isGameActive = true;

    const PLAYER_X_WON = 'PLAYER X WON';
    const PLAYER_O_WON = 'PLAYER O WON';

    const TIE = "TIE"

    /*INDEX DO TABULEIRO
    [O][1][2]
    [3][4][5]
    [6][7][8]
    */

    const winningConditions = [
        [0][1][2],
        [3][4][5],
        [6][7][8],
        [0][3][6],
        [1][4][7],
        [2][5][8],
        [0][4][8],
        [2][4][6],
    ]

    const isValidAction = tile => {
        if(tile.innerText === "X" || tile.innerText === "O" ){
        return false;
    } else {
        return true;
    }
}

    const updateBoard = index =>{
        board[index] = currentPlayer;
    }

    const changePlayer = () => {
        playerDisplay.classList.remove(`player${currentPlayer}`);
        currentPlayer = currentPlayer === "X" ? "X" : "O";
        playerDisplay.innerText = currentPlayer; 
        playerDisplay.classList.add(`player${currentPlayer}`)
    };

    const announce = type => {
        switch (type) {
            case PLAYER_O_WON:
                announcer.innerHTML = 'Player <span class="playerO">O</span> Won';
                break;
            case PLAYER_X_WON:
                announcer.innerHTML = 'Player <span class="playerX">X</span> Won';
                break;
            case TIE:
                announcer.innerHTML = "Tie";
        }
        announcer.classList.remove("hide");
    };

    const handleResultValidation = () => {
        let rouwon = false;
        for(let i = 0; i <= 7; i++) {
            const winConditions = winningConditions[i];
        const a = board[wincondition[0]];        
        const b = board[wincondition[1]];        
        const c = board[wincondition[2]];     
        
        if (a === "" || b === "" || c ===""){
            continue;
        }

        if (a === b && b === c){
            roundoWon = true;
            break;
        }
    }

    if (roundWon){
        announce(currentPlayer === "X" ? PLAYER_X_WON : PLAYER_O_WON);
        isGameActive = false;
        return;
    }

    if (!board.includes("")) {
        announce(TIE);
    }
};

const userAction = (tile, index) => {
//console.log(tle, index)
if (isValidAction(tile) && isGameActive) {
    tile.innerText = currentPlayer;
    tile.classList.add(`player${currentPlayer}`);

    updateBoard(index);

    handleResultValidation();
    changePlayer();
}
};

tiles.forEach((tile, index) => {
    tile.addEventListener("click", () => userAction(tile,index));
});

const resetBoard = () => {
    board = ["","","","","","","","","",];

    isGameActive = true;
    announcer.classList.add("hide");

    if(currentPlayer === "O"){
        changePlayer();
    }

    tiles.forEach(tile => {
        tile.innerText = "";
        tile.classList.remove("playerX");
        tile.classList.remove("playerO");
    });
};
resetButtom.addEventListener("click", resetBoard);

});
    
