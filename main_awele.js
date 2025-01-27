
class gameState {
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
    
    constructor(A, B, C, D, E, F, G, H, I, J, K, L){
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
 
    function displayBoard(board){
        console.log("   A B C D E F")
        console.log(" 1 " + board.A + " " + board.B + " " + board.C + " " + board.D + " " + board.E + " " + board.F)
        console.log(" 2 " + board.G + " " + board.H + " " + board.I + " " + board.J + " " + board.K + " " + board.L)
        console.log("   G H I J K L")
    }

    function isEmpty(board){
        for (var key in board){
            if (board[key] != 0){
                return false;
            }
        }
        return true;
    }
let newGame = new gameState(0,0,0,0,0,0,0,0,0,0,0,0);

    displayBoard(newGame);
    console.log(isEmpty(newGame));
    

