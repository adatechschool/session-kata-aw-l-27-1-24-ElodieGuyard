
class gameState {
    scorePlayerA;
    scorePlayerB;
    A= 0;
    B= 0;
    C= 0;
    D= 0;
    E= 0;
    F= 0;
    G= 0;
    H= 0;
    I= 0;
    J= 0;
    K= 0;
    L= 0;
    
    constructor(scorePlayerA, scorePlayerB, A, B, C, D, E, F, G, H, I, J, K, L){
        this.scorePlayerA = scorePlayerA;
        this.scorePlayerB = scorePlayerB;
        this.A = A;
        this.B = B;
        this.C = C;
        this.D = D;
        this.E = E;
        this.F = F;
        this.G = G;
        this.H = H;
        this.I = I;
        this.J = J;
        this.K = K;
        this.L = L;
    }
}

function displayBoard(game){
    console.log("   A B C D E F")
    console.log(" A " + game.A + " " + game.B + " " + game.C + " " + game.D + " " + game.E + " " + game.F)
    console.log(" B " + game.G + " " + game.H + " " + game.I + " " + game.J + " " + game.K + " " + game.L)
    console.log("   G H I J K L")
}

function isEmpty(game){
    for (var key in game){
        if (game[key] != 0){
            return false;
        }
    }
    return true;
}

function gainScore(player, seed){
    player += seed;
    return player; // ?
}

function nextBox(currentBox, direction){
    if (direction === 'saw'){
        switch (currentBox) {
            case 'A':
                currentBox = 'B';
                break
            case 'B':
                currentBox = 'C';
                break
            case 'C':
                currentBox = 'D';
                break
            case 'D':
                currentBox = 'E';
                break
            case 'E':
                currentBox = 'F';
                break
            case 'F':
                currentBox = 'G';
                break
            case 'G':
                currentBox = 'H';
                break
            case 'H':
                currentBox = 'I';
                break
            case 'I':
                currentBox = 'J';
                break
            case 'J':
                currentBox = 'K';
                break
            case 'K':
                currentBox = 'L';
                break
            case 'L':
                currentBox = 'A';
                break
        } 
        return currentBox;
        
    } else {
        switch (currentBox) {
            case 'A':
                currentBox = 'L';
                break
            case 'B':
                currentBox = 'A';
                break
            case 'C':
                currentBox = 'B';
                break
            case 'D':
                currentBox = 'C';
                break
            case 'E':
                currentBox = 'D';
                break
            case 'F':
                currentBox = 'E';
                break
            case 'G':
                currentBox = 'F';
                break
            case 'H':
                currentBox = 'G';
                break
            case 'I':
                currentBox = 'H';
                break
            case 'J':
                currentBox = 'I';
                break
            case 'K':
                currentBox = 'J';
                break
            case 'L':
                currentBox = 'K';
                break
        } 
        return currentBox;
    }
}

let currentGame = new gameState(0,0,0,0,0,0,0,0,0,0,0,0,0,0);

displayBoard (currentGame);
console.log("Empty board : " + isEmpty(currentGame));
console.log("Player A current score : "+ gainScore(currentGame.scorePlayerA, 3));
console.log("Player B current score : "+ currentGame.scorePlayerB);
console.log("NextBox : " + nextBox('D','saw'))


