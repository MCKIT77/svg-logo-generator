class Shape {
    constructor(color) {
        this.color = color;
    }

    draw() {
        throw new Error('draw() method must be implemented in the child class.');
    }
}

module.exports = Shape;