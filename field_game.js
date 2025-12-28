const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(field) {
        this.field = field;
        this.playerPosition = { x: 0, y: 0 };
        this.field[this.playerPosition.y][this.playerPosition.x] = pathCharacter;
    }

    print() {
        for (let row of this.field) {
            console.log(row.join(''));
        }
    }

    move(direction) {
        let { x, y } = this.playerPosition;
        switch (direction) {
            case 'w':
                y--;
                break;
            case 'a':
                x--;
                break;
            case 's':
                y++;
                break;
            case 'd':
                x++;
                break;
            default:
                console.log("Invalid move. Use 'w', 'a', 's', 'd' to move.");
                return;
        }

        if (y < 0 || y >= this.field.length || x < 0 || x >= this.field[0].length) {
            console.log("Out of bounds! Game over.");
            process.exit();
        }

        const nextCell = this.field[y][x];
        if (nextCell === hole) {
            console.log("You fell into a hole! Game over.");
            process.exit();
        } else if (nextCell === hat) {
            console.log("You found your hat! You win!");
            process.exit();
        } else {
            this.playerPosition = { x, y };
            this.field[y][x] = pathCharacter;
        }
    }

    startGame() {
        while (true) {
            this.print();
            const move = prompt("Enter your move (w/a/s/d): ");
            this.move(move);
        }
    }

    static generateField(height, width, holePercentage) {
        const field = Array.from({ length: height }, () => 
            Array.from({ length: width }, () => fieldCharacter)
        );

        // Place hat
        let hatX, hatY;
        do {
            hatX = Math.floor(Math.random() * width);
            hatY = Math.floor(Math.random() * height);
        } while (hatX === 0 && hatY === 0);
        field[hatY][hatX] = hat;

        // Place holes
        const totalCells = height * width;
        const holeCount = Math.floor(totalCells * holePercentage);
        let placedHoles = 0;

        while (placedHoles < holeCount) {
            let holeX = Math.floor(Math.random() * width);
            let holeY = Math.floor(Math.random() * height);
            if (field[holeY][holeX] === fieldCharacter && (holeX !== 0 || holeY !== 0)) {
                field[holeY][holeX] = hole;
                placedHoles++;
            }
        }

        return field;
    }
}

const myField = new Field(Field.generateField(10, 10, 0.1));
myField.startGame();