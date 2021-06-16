// Your code here
class Polygon {
    constructor(array) {
        this.array = array;
    }

    get countSides() {
        return this.array.length;
    }

    get perimeter() {
        let total = 0;
        this.array.forEach(num => {
            total += num;
        });
        return total;
    }
}

class Triangle extends Polygon {

    get isValid() {
        if (this.countSides === 3) {
            let side1 = this.array[0];
            let side2 = this.array[1];
            let side3 = this.array[2];
            if (side1 + side2 > side3 && side2 + side3 > side1 && side3 + side1 > side2) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.countSides === 4) {
            let side1 = this.array[0];
            let side2 = this.array[1];
            let side3 = this.array[2];
            let side4 = this.array[3];
            if (side1 === side2 && side2 === side3 && side3 === side4 && side4 === side1) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }

    get area() {
        if (this.isValid) {
            let side1 = this.array[0];
            let side2 = this.array[1];
            return side1 * side2;
        }
        else {
            return "This is not a square!"
        }
    }
}