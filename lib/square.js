const Shape = require('./shapes');

class Square extends Shape {
    constructor(color) {
        super(color);
    }
    render() {
        return `<rect width:'300' height:'300' fill:'${this.color}'/>`
    }

}
module.exports = Square;
