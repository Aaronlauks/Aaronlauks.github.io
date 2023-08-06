// HIDE GLOBE COLOR WHEN HOVERD
function showText() {
    document.getElementById("text").style.display = "block";
    document.getElementById("globe").style.filter = "grayscale(0%) drop-shadow(16px 16px 20px black)";
}
// SHOW GLOBE COLOR WHEN HOVERED
function hideText() {
    document.getElementById("text").style.display = "none";
    document.getElementById("globe").style.filter = "grayscale(80%) drop-shadow(16px 16px 20px black)";
}

let board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
];
let gameEnd = false;
let turns = 0;
let playerStart = true;

function playerSelect(space) {
    // Reset the game if it has ended when clicked.
    if (gameEnd) {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                let id = 'b';
                id += i + 1;
                id += j + 1;
                document.getElementById(id).src = "images/blank.png";
            }
        }
        board = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
        ];
        gameEnd = false;
        turns = 0;
        // swap starting players
        if (playerStart) {
            playerStart = false;
            placeX();
        } else playerStart = true;

        return;
    }
    let indexArray = space.split('');
    if (board[indexArray[1] - 1][indexArray[2] - 1] !== "") return alert("This space is occupied!");
    document.getElementById(space).src = "images/circle.png";
    board[indexArray[1] - 1][indexArray[2] - 1] = "O";

    // check if O has won
    if (
        board[0][0] == "O" && board[0][1] == "O" && board[0][2] == "O" || board[1][0] == "O" && board[1][1] == "O" && board[1][2] == "O" || board[2][0] == "O" && board[2][1] == "O" && board[2][2] == "O" ||
        board[0][0] == "O" && board[1][0] == "O" && board[2][0] == "O" || board[0][1] == "O" && board[1][1] == "O" && board[2][1] == "O" || board[0][2] == "O" && board[1][2] == "O" && board[2][2] == "O" ||
        board[0][0] == "O" && board[1][1] == "O" && board[2][2] == "O" || board[0][2] == "O" && board[1][1] == "O" && board[2][0] == "O"
    ) {
        gameEnd = true;
        return alert("You have WON!!!");
    }
    if (playerStart && turns == 4 || !playerStart && turns == 3) {
        gameEnd = true;
        return alert("IT'S A DRAW! bruh");
    }
    placeX();
    // Check if X has won
    if (
        board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X" || board[1][0] == "X" && board[1][1] == "X" && board[1][2] == "X" || board[2][0] == "X" && board[2][1] == "X" && board[2][2] == "X" ||
        board[0][0] == "X" && board[1][0] == "X" && board[2][0] == "X" || board[0][1] == "X" && board[1][1] == "X" && board[2][1] == "X" || board[0][2] == "X" && board[1][2] == "X" && board[2][2] == "X" ||
        board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X" || board[0][2] == "X" && board[1][1] == "X" && board[2][0] == "X"
    ) {
        gameEnd = true;
        return alert("You have LOST!!! >:(((");
    }
    turns += 1;
}

//function to place X on the board
function placeX() {
    let x, y;
    while (true) {
        x = Math.floor(Math.random() * 3);
        y = Math.floor(Math.random() * 3);
        if (board[x][y] == "") break;
    }
    board[x][y] = 'X';
    let id = 'b';
    id += x + 1;
    id += y + 1;
    document.getElementById(id).src = "images/x.png";
}